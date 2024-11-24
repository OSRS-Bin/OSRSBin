"use server";

import type { UploadFormSchema } from "./Upload";
import { createClient } from "@/lib/supabase/server";
import { customAlphabet } from "nanoid";
import { redirect } from "next/navigation";

function slugifyTitle(title: string) {
  let slugged = title
    .trim()
    .toLowerCase()
    .replace("'", "")
    .replace(/[\p{P}\W]+/gu, "-");
  if (slugged.startsWith("-")) {
    slugged = slugged.slice(1);
  }
  if (slugged.endsWith("-")) {
    slugged = slugged.slice(0, -1);
  }
  return slugged;
}

// taken from https://github.com/CyberAP/nanoid-dictionary
// > Numbers and english alphabet without lookalike
const idAlphabet = "346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz";
const defaultIdLength = 6;
const generateNewId = customAlphabet(idAlphabet, defaultIdLength);

export async function uploadTilepack(json: string) {
  const values: UploadFormSchema = JSON.parse(json);
  const supabase = createClient();

  const { data, error: getUserError } = await supabase.auth.getUser();
  if (getUserError || !data?.user) {
    redirect("/sign-in");
  }

  const row = {
    author_id: data.user.id,
    data: values.tiles,
    description: values.description,
    name: values.name,
    public_id: generateNewId(),
    slug: slugifyTitle(values.name),
  };

  const { error: insertError } = await supabase.from("tilepacks").insert(row);

  if (insertError) {
    throw insertError;
  }

  redirect(`/tilepacks/${row.public_id}/${row.slug}`);
}
