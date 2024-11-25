import ResultList from "@/components/ResultList";
import { createClient } from "@/lib/supabase/server";

export default async function Tag({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("tilepacks")
    .select(`*, tags!inner (*)`)
    .eq("tags.slug", slug);

  if (error) {
    throw error;
  }

  console.log(data[0])

  return (
    <div>
      <h1 className="font-runescape text-6xl text-primary">{slug}</h1>

      <ResultList tilePacks={data} />
    </div>
  );
}
