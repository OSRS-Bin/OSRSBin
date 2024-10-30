import TilePack from "./View";
import Upload from "./Upload";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export default async function ViewOrUpload({
  params,
}: {
  params: { id: string[] };
}) {
  const id = params.id[0];

  if (id === "upload") {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    console.log("data", data);
    console.log("error", error);

    if (error || !data) {
      redirect("/sign-in");
    } else {
      return <Upload />;
    }
  } else {
    return <TilePack id={id} />;
  }
}
