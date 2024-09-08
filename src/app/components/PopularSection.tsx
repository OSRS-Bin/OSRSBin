import { tilePacks } from "@/lib/data";
import Result from "@/components/Result";

const popularTilePacks = tilePacks.slice(0, 3);

export default function PopularSection() {
  return (
    <section className="mx-auto">
      <div className="text-center">
        <h2 className="font-runescape text-6xl leading-[4.5rem] leading text-primary">
          Popular Packs
        </h2>
        <p>Check out what other people are&hellip; checking out!</p>
      </div>

      <div className="grid grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-4 mt-6">
        {popularTilePacks.map((tilePack) => (
          <Result key={tilePack.id} tilePack={tilePack} orientation="vertical" />
        ))}
      </div>
    </section>
  );
}
