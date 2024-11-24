"use server";

import { createClient } from "@/lib/supabase/server";
import { generateNewId } from "@/lib/utils";
import { redirect } from "next/navigation";

const bucketName = "tilepack-images";

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

export async function uploadTilepack(formData: FormData) {
  const supabase = await createClient();

  // TODO allow anonymous uploads
  const { data, error: getUserError } = await supabase.auth.getUser();
  if (getUserError || !data?.user) {
    redirect("/sign-in");
  }

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const tiles = JSON.parse(formData.get("tiles") as string);
  const image = formData.get("image") as File;

  const imagePath = `${generateNewId()}-${image.name}`;
  const { data: imageData, error: uploadError } = await supabase.storage
    .from(bucketName)
    .upload(imagePath, image);
  console.log("imageData", imageData);
  // TODO: save imageData.id to the tilepack column. remove image_url, we can just join on the storage table

  if (uploadError) {
    throw uploadError;
  }

  const {
    data: { publicUrl: imageURL },
  } = supabase.storage.from(bucketName).getPublicUrl(imagePath);
  console.log(imageURL);

  const row = {
    author_id: data.user.id,
    data: tiles,
    description,
    name,
    public_id: generateNewId(),
    slug: slugifyTitle(name),
    image_url: imageURL,
  };

  const { error: insertError } = await supabase.from("tilepacks").insert(row);

  if (insertError) {
    throw insertError;
  }

  redirect(`/tilepacks/${row.public_id}/${row.slug}`);
}
