import { type TilePack } from "@/lib/tilePack";

export default function PopularTilePack(
  props: Readonly<{
    tilePack: TilePack;
  }>
) {
  return (
    <div className="flex flex-col text-card-foreground bg-card rounded-md overflow-hidden">
      <img
        src={props.tilePack.imageHref}
        alt={props.tilePack.title}
        className="object-cover w-full h-64"
      />
      <div className="p-4">
        <h3 className="font-runescape text-primary text-2xl">{props.tilePack.title}</h3>
        <ul className="flex">
          <li>{props.tilePack.author.name}</li>
          <li className="mx-2">&bull;</li>
          <li>{props.tilePack.installCount} installs</li>
        </ul>
        <p className="mt-4">{props.tilePack.description}</p>
      </div>
    </div>
  );
}
