import { tilePacks } from "@/lib/data";
import ResultList from "@/components/ResultList";

export default function TilePacks() {
  return (
    <div>
      <h1 className="font-runescape text-6xl text-primary">Tile Packs</h1>
      <ResultList tilePacks={tilePacks} />
    </div>
  );
}
