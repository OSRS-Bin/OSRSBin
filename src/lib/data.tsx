import { type User, type Tag, type TilePack } from "@/lib/tilePack";

const comradeCosmo: User = {
  id: "1",
  name: "ComradeCosmo",
  avatarHref: "/avatars/comrade-cosmo.png",
};

const comradeOak: User = {
  id: "2",
  name: "ComradeOak",
  avatarHref: "/avatars/comrade-oak.png",
};

export const tilePacks: TilePack[] = [
  {
    id: "1",
    imageHref: "/wholesome-reminders.png",
    title: "Wholesome Reminders",
    uploadDate: new Date("2024-01-01"),
    description:
      "Get wholesome reminders like hydration and posture checks as you travel throughout the world of Gielinor.",
    author: comradeCosmo,
    viewCount: 100,
    favoriteCount: 20,
    installCount: 1100,
    commentCount: 5,
    tags: [],
  },
  {
    id: "2",
    imageHref: "/pokepack.png",
    title: "Pokepack",
    uploadDate: new Date("2024-01-01"),
    description: "Gotta draw 'em all!",
    author: comradeOak,
    viewCount: 100,
    favoriteCount: 20,
    installCount: 1100,
    commentCount: 5,
    tags: [],
  },
  {
    id: "3",
    imageHref: "/cox-olm.jpg",
    title: "Cox Olm Tiles",
    uploadDate: new Date("2024-01-01"),
    description: "Simple tile pack to make learning Olm easier! GLHF!",
    author: comradeCosmo,
    viewCount: 100,
    favoriteCount: 20,
    installCount: 1100,
    commentCount: 5,
    tags: [],
  },
];
