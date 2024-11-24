import { Badge } from "./ui/badge";
import Link from "next/link";

export default function TagBadge({
  tag,
}: {
  tag: { name: string; slug: string };
}) {
  return (
    <Link href={`/tags/${tag.slug}`}>
      <Badge variant="secondary">{tag.name}</Badge>
    </Link>
  );
}
