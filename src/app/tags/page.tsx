import { tilePacks } from "@/lib/data";
import { Tag } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { formatNumber } from "@/lib/utils";

const tags: Map<Tag, number> = tilePacks.reduce((acc, tilePack) => {
  for (const tag of tilePack.tags) {
    if (acc.has(tag)) {
      acc.set(tag, acc.get(tag) + 1);
    } else {
      acc.set(tag, 1);
    }
  }
  return acc;
}, new Map());

export default function Tags() {
  return (
    <div>
      <h1 className="font-runescape text-6xl text-primary">Tags</h1>
      <ul className="list-disc list-inside">
        {Array.from(tags.entries()).map(([tag, count]) => (
          <li key={tag.name} className="">
            <Link href={`tags/${tag.slug}`} key={tag.name} className="underline hover:text-foreground/80">
              {tag.name}
            </Link>
            <span className="italic ms-2">({formatNumber(count)} packs)</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
