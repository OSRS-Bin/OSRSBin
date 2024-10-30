import Link from "next/link";
import { appName } from "@/lib/constants";
import { type Tag } from "@/lib/types";
import { tags } from "@/lib/data";
// import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/NavigationMenu";
import { cn } from "@/lib/utils";
import * as React from "react";
import { randomInteger } from "@/lib/utils";
import { signOutAction } from "@/app/actions";
import { Button } from "@/components/Button";
import { createClient } from "@/lib/supabase/server";

function findTagBySlug(slug: string): Tag {
  return tags.find((tag) => tag.slug === slug)!;
}

const headerTags = [
  findTagBySlug("pvm"),
  findTagBySlug("skilling"),
  findTagBySlug("misc"),
];

export default async function Header() {
  // const pathname = usePathname();
  const {
    data: { user },
  } = await (await createClient()).auth.getUser();
  let metadata = user?.user_metadata;

  return (
    <header className="font-runescape">
      <div className="bg-header">
        <nav className="flex justify-between items-center py-2 container mx-auto px-8">
          <div className="text-4xl font-runescape">
            <Link href="/">{appName}</Link>
          </div>
          <ul className="flex gap-8 text-3xl text-primary">
            <li>
              <Link href="/help">Help</Link>
            </li>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {metadata?.username}!
                <form action={signOutAction}>
                  <Button type="submit" variant={"outline"}>
                    Sign out
                  </Button>
                </form>
              </div>
            ) : (
              <div className="flex gap-2">
                <Button asChild variant={"outline"}>
                  <Link href="/sign-in">Sign in</Link>
                </Button>
                <Button asChild>
                  <Link href="/sign-up">Sign up</Link>
                </Button>
              </div>
            )}
          </ul>
        </nav>
      </div>
      <div className="bg-header-lighter">
        <nav className="container mx-auto text-2xl px-8">
          <ul className="flex gap-4 items-center">
            <li className="uppercase px-12 py-1 border-primary border-2">
              <Link href="/tilepacks/upload">Upload</Link>
            </li>
            <NavigationMenu>
              <NavigationMenuList>
                {headerTags.map((tag) => (
                  <NavigationMenuItem key={tag.id}>
                    <NavigationMenuTrigger>{tag.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {Array.from({ length: randomInteger(3, 6) }).map(
                          (_, i) => (
                            <ListItem
                              key={i}
                              title={`${tag.name} ${i + 1}`}
                              href={`/tags/${tag.slug}`}
                            />
                          )
                        )}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <Link href="/tags" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      All Tags
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="leading-none">{title}</div>
          {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p> */}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
