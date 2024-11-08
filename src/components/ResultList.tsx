import { type Tables } from "@/lib/types";
import Result from "./Result";

export default function Results({ tilePacks }: { tilePacks: Tables<"tilepacks">[] }) {
  if (tilePacks.length === 0) {
    return <p>No tile packs found.</p>;
  }
  return (
    <ul className="flex flex-col gap-4">
      {tilePacks.map((tilePack) => (
        <li key={tilePack.id}>
          <Result tilePack={tilePack} />
        </li>
      ))}
    </ul>
  );
}
