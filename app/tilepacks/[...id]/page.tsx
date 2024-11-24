import TilePack from "./View";
import Upload from "./Upload";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ViewOrUpload(props: {
  params: Promise<{ id: string[] }>;
}) {
  const params = await props.params;
  const id = params.id[0];

  if (id === "upload") {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error || !data) {
      redirect("/sign-in");
    } else {
      return <Upload />;
    }
  } else {
    return <TilePack id={id} />;
  }
}
