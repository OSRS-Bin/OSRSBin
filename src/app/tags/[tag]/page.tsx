import { tags, tilePacks } from "@/lib/data";
import { type Tag } from "@/lib/types";
import { notFound } from "next/navigation";
import ResultList from "@/components/ResultList";

function tilePacksWithTag(tag: Tag) {
  return tilePacks.filter((tilePack) => tilePack.tags.includes(tag));
}

export default function Tag({ params }: { params: { tag: string } }) {
  const tag = tags.find((tag) => tag.slug === params.tag);

  if (!tag) {
    notFound();
  }

  return (
    <div>
      <h1 className="font-runescape text-6xl text-primary">{tag.name}</h1>

      <ResultList tilePacks={tilePacksWithTag(tag)} />
    </div>
  );
}
