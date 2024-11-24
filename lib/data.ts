/**
 * Fake site data. Will be replaced by a database sometime soon.
 */

import { type User, type Tag, type Tilepack } from "./types";
import { randomInteger } from "./utils";

function createUser(id: string, name: string, avatarHref: string): User {
  return {
    id,
    name,
    avatarHref,
  };
}

const userCosmo = createUser("1", "ComradeCosmo", "/avatars/comrade-cosmo.png");
const userOak = createUser("2", "ComradeOak", "/avatars/comrade-oak.png");

export const users: User[] = [userCosmo, userOak];

function createTag(id: string, name: string, slug: string): Tag {
  return {
    id,
    name,
    slug,
  };
}

const tagPvM = createTag("1", "PvM", "pvm");
const tagSkilling = createTag("2", "Skilling", "skilling");
const tagColusseum = createTag("3", "Colusseum", "colusseum");
const tagMinigame = createTag("4", "Minigame", "minigame");
const tagQuest = createTag("5", "Quest", "quest");
const tagMisc = createTag("6", "Misc", "misc");

export const tags: Tag[] = [
  tagPvM,
  tagSkilling,
  tagColusseum,
  tagMinigame,
  tagQuest,
  tagMisc,
];

function randomCount() {
  return randomInteger(0, 10000);
}

type Tile = {
  regionId: number;
  regionX: number;
  regionY: number;
  z: number;
  color: string;
}

function createRandomTile(): Tile {
  return {
    regionId: randomInteger(0, 100),
    regionX: randomInteger(0, 64),
    regionY: randomInteger(0, 64),
    z: randomInteger(0, 4),
    color: "#" + Math.floor(Math.random() * Math.pow(16, 8)).toString(16),
  };
}

function createRandomTileData(): string {
  return JSON.stringify(Array.from({ length: 10 }, createRandomTile), undefined, 2);
}

function createTilePack(
  id: string,
  name: string,
  imageHref: string,
  description: string,
  author: User,
  tags: Tag[]
): Tilepack {
  return {
    id,
    slug: name.toLowerCase().replace(/\W+/, "-"),
    imageHref,
    name: name,
    tiles: createRandomTileData(),
    uploadDate: new Date(),
    description,
    author,
    viewCount: randomCount(),
    favoriteCount: randomCount(),
    installCount: randomCount(),
    commentCount: randomInteger(1, 5),
    tags,
  };
}

export const tilePacks: Tilepack[] = [
  createTilePack(
    "1",
    "Wholesome Reminders",
    "/wholesome-reminders.png",
    "Get wholesome reminders like hydration and posture checks as you travel throughout the world of Gielinor.",
    userCosmo,
    [tagMisc]
  ),
  createTilePack("2", "Pokepack", "/pokepack.png", "Gotta draw 'em all!", userOak, [
    tagMisc,
  ]),
  createTilePack(
    "3",
    "Cox Olm Tiles",
    "/cox-olm.jpg",
    "Simple tile pack to make learning Olm easier! GLHF!",
    userCosmo,
    [tagPvM, tagMinigame]
  ),
  createTilePack(
    "4",
    "EZ Inferno Pack",
    "/ez-inferno.jpg",
    "Inferno? More like inferYES!",
    userOak,
    [tagPvM, tagMinigame]
  ),
  createTilePack(
    "5",
    "Barrows Tile Pack",
    "/barrows.png",
    "Barrows tiles for your convenience!",
    userCosmo,
    [tagPvM, tagQuest]
  ),
  createTilePack(
    "6",
    "Colusseum Tiles",
    "/colusseum.jpg",
    "Tiles to get your quiver!",
    userOak,
    [tagColusseum, tagMinigame]
  ),
];
