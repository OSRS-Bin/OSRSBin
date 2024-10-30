"use server";

import type { UploadFormSchema } from "./Upload";
import { createClient } from "@/lib/supabase/server";
import { customAlphabet } from "nanoid";
import { redirect } from "next/navigation";

// taken from https://github.com/CyberAP/nanoid-dictionary
// > Numbers and english alphabet without lookalike
const idAlphabet = "346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz";
const defaultIdLength = 6;
const generateNewId = customAlphabet(idAlphabet, defaultIdLength);

export async function uploadTilepack(json: string) {
  const values: UploadFormSchema = JSON.parse(json);
  const supabase = createClient();

  // const author_id = (await supabase.auth.getUser()).data!.user!.id;
  const { data, error: getUserError } = await supabase.auth.getUser();
  console.log("data", data);
  if (getUserError || !data?.user) {
    redirect("/sign-in");
  }
  console.log("author_id", data.user.id);

  const row = {
    author_id: data.user.id,
    data: values.tiles,
    description: values.description,
    name: values.name,
    public_id: generateNewId(),
  };

  const { error: insertError } = await supabase.from("tilepacks").insert(row);

  if (insertError) {
    throw insertError;
  }
}
