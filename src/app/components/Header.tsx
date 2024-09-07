import Link from "next/link";
import { appName } from "@/lib/constants";

// extracted here because these may change, while things in upper header are more likely fixed
const headerCategories = [
  {
    title: "PvM",
    href: "/categories/pvm",
  },
  {
    title: "Skilling",
    href: "/categories/skilling",
  },
  {
    title: "Minigames",
    href: "/categories/minigames",
  },
];

export default function Header() {
  return (
    <header className="font-runescape">
      <div className="bg-header">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center py-2">
            <div className="text-4xl font-runescape">{appName}</div>
            <ul className="flex gap-4 text-3xl text-primary">
              <li>
                <Link href="/how-to-use">How to Use</Link>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bg-header-lighter">
        <div className="container mx-auto text-2xl">
          <ul className="flex gap-4 items-center">
            <li className="uppercase px-12 py-1 border-primary border-2">
              Import
            </li>
            <ul className="flex gap-4 items-center">
              {headerCategories.map((category) => (
                <li key={category.title} className="px-4 py-1">
                  <Link href={category.href}>{category.title}</Link>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </header>
  );
}
