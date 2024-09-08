import { tilePacks } from "@/lib/data";
import { notFound } from "next/navigation";
import { formatNumber } from "@/lib/utils";
import TagBadge from "@/components/TagBadge";
import { faker } from "@faker-js/faker";
import CopyButton from "./CopyButton";

function getTilePackWithId(id: string) {
  return tilePacks.find((tilePack) => tilePack.id === id);
}

export default function TilePack({ params }: { params: { id: string[] } }) {
  const id = params.id[0];
  const tilePack = getTilePackWithId(id);

  if (!tilePack) {
    notFound();
  }

  return (
    <div className="grid grid-flow-row gap-4">
      <h1 className="font-runescape text-6xl text-primary">{tilePack.name}</h1>

      <h2 className="sr-only">Data</h2>
      <CopyButton text={tilePack.tiles}>
        Copy "{tilePack.name}" to Clipboard
      </CopyButton>
      <details className="cursor-pointer">
        <summary className="font-runescape text-2xl">Data</summary>
        <textarea
          value={tilePack.tiles}
          rows={5}
          readOnly
          className="w-full h-64 text-black font-mono rounded-lg"
        />
      </details>

      <h2 className="sr-only">Metadata</h2>
      <ul>
        <li>
          <span className="font-runescape text-2xl">Author</span>:{" "}
          {tilePack.author.name}
        </li>
        <li>
          <span className="font-runescape text-2xl">Installs</span>:{" "}
          {formatNumber(tilePack.installCount)}
        </li>
        <li>
          <span className="font-runescape text-2xl">Views</span>:{" "}
          {formatNumber(tilePack.viewCount)}
        </li>
        <li>
          <span className="font-runescape text-2xl">Favorites</span>:{" "}
          {formatNumber(tilePack.favoriteCount)}
        </li>
      </ul>

      <h2 className="sr-only">Description</h2>
      <p className="bg-card text-card-foreground px-4 py-2 rounded-lg">
        {tilePack.description}
      </p>

      <img
        src={tilePack.imageHref}
        alt={tilePack.name}
        className="w-full h-auto"
      />

      <h2 className="sr-only">Tags</h2>
      <ul className="flex gap-2">
        {tilePack.tags.map((tag) => (
          <li key={tag.name}>
            <TagBadge tag={tag} />
          </li>
        ))}
      </ul>

      <h2 className="text-4xl font-runescape">Comments</h2>
      <ul className="grid grid-flow-row gap-4">
        {Array.from({ length: tilePack.commentCount }).map((_, i) => (
          <li key={i} className="bg-card text-card-foreground p-4 rounded-lg">
            <p className="font-runescape text-xl">
              {faker.internet.userName()}
            </p>
            <p>{faker.lorem.sentences(3)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
