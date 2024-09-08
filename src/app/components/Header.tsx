"use client";

import Link from "next/link";
import { appName } from "@/lib/constants";
import { type Tag } from "@/lib/types";
import { tags } from "@/lib/data";
import { usePathname } from "next/navigation";

function findTagBySlug(slug: string): Tag {
  return tags.find((tag) => tag.slug === slug)!;
}

const headerTags = [
  findTagBySlug("pvm"),
  findTagBySlug("skilling"),
  findTagBySlug("misc"),
];

function headerTagLink(slug: string, name: string, isActive: boolean) {
  return (
    <li
      key={slug}
      className={isActive ? "px-4 py-1 border-primary border-2" : "px-4 py-1"}
    >
      <Link href={`/tags/${slug}`}>{name}</Link>
    </li>
  );
}

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="font-runescape">
      <div className="bg-header">
        <div className="container mx-auto px-8">
          <nav className="flex justify-between items-center py-2">
            <div className="text-4xl font-runescape">
              <Link href="/">{appName}</Link>
            </div>
            <ul className="flex gap-8 text-3xl text-primary">
              <li>
                <Link href="/help">Help</Link>
              </li>
              <li>
                <Link href="/logout">Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bg-header-lighter">
        <div className="container mx-auto text-2xl px-8">
          <ul className="flex gap-4 items-center">
            <li className="uppercase px-12 py-1 border-primary border-2">
              Import
            </li>
            <ul className="flex gap-4 items-center">
              {headerTags.map((tag) => (
                <li key={tag.id} className="px-4 py-1">
                  <Link
                    href={`/tags/${tag.slug}`}
                    className={`${
                      pathname === `/tags/${tag.slug}`
                        ? "border-b-primary border-b-2"
                        : ""
                    }`}
                  >
                    {tag.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/tags"
                  className={`${
                    pathname === `/tags` ? "border-b-primary border-b-2" : ""
                  }`}
                >
                  (All Tags)
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </header>
  );
}
