import { tilePacks } from "@/lib/data";
import PopularTilePack from "./PopularTilePack";

const popularTilePacks = tilePacks.slice(0, 3);

export default function PopularSection() {
  return (
    <section className="w-3/4 mx-auto">
      <div className="text-center">
        <h2 className="font-runescape text-6xl leading-[4.5rem] leading text-primary">
          Popular Packs
        </h2>
        <p>Check out what other people are&hellip; checking out!</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {popularTilePacks.map((tilePack) => (
          <PopularTilePack key={tilePack.id} tilePack={tilePack} />
        ))}
      </div>
    </section>
  );
}
