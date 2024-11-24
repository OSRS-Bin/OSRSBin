// script to generate types with the database
// run with `npm run gen-db-types`
//
// steps:
// 1. load environment files with dotenv for the SUPABASE_PERSONAL_ACCESS_TOKEN and
//    SUPABASE_PROJECT_ID variables
// 2. make a request to
//    https://api.supabase.com/v1/projects/{ref}/types/typescript with
//    Authorization header set to "Authorization: Bearer {PAT}"
// 3. extract the "types" key from the response
// 4. write the types to a file whose path is the first argument to this script

import { writeFileSync, existsSync } from "fs";
import { resolve } from "path";
import { config } from "dotenv";
import fetch from "node-fetch";
import { createInterface } from "readline";

async function generateTypes() {
  // try both
  config();
  config({
    path: resolve(process.cwd(), ".env.local"),
  })

  const personalAccessToken = process.env.SUPABASE_PERSONAL_ACCESS_TOKEN;
  const projectId = process.env.SUPABASE_PROJECT_ID;

  if (!personalAccessToken || !projectId) {
    throw new Error(
      "Missing SUPABASE_PERSONAL_ACCESS_TOKEN or SUPABASE_PROJECT_ID"
    );
  }

  const url = `https://api.supabase.com/v1/projects/${projectId}/types/typescript`;

  try {
    // Get the output file path from command line arguments
    const outputPath = process.argv[2];
    if (!outputPath) {
      throw new Error("Please provide an output file path as an argument");
    }

    const resolvedPath = resolve(process.cwd(), outputPath);

    // Check if file exists and prompt for confirmation
    if (existsSync(resolvedPath)) {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      await new Promise<void>((resolve) => {
        rl.question(
          `File ${resolvedPath} already exists. Press Enter to proceed with write or Ctrl+C to cancel...`,
          () => {
            rl.close();
            resolve();
          }
        );
      });
    }

    // Make the request to Supabase API
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${personalAccessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `API request failed with status ${
          response.status
        }: ${await response.text()}`
      );
    }

    const data = (await response.json()) as unknown;

    // Define the expected response shape
    type SupabaseTypesResponse = {
      types: string;
    };

    // Type guard to verify the response shape
    function isSupabaseTypesResponse(
      data: unknown
    ): data is SupabaseTypesResponse {
      return (
        typeof data === "object" &&
        data !== null &&
        "types" in data &&
        typeof (data as SupabaseTypesResponse).types === "string"
      );
    }

    // Verify the response shape
    if (!isSupabaseTypesResponse(data)) {
      throw new Error("Invalid response format from API");
    }

    writeFileSync(resolvedPath, data.types, "utf8");
    console.log(`Successfully wrote types to ${resolvedPath}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error generating types:", error.message);
    } else {
      console.error("Error generating types:", error);
    }
    process.exit(1);
  }
}

// Check if this file is being run directly
if (require.main === module) {
  generateTypes();
}

// Export for use as a module
export { generateTypes };
