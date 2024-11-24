export interface User {
  id: string;
  name: string;
  avatarHref: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface TilePack {
  id: string;
  slug: string;
  imageHref: string;
  name: string;
  tiles: string;
  uploadDate: Date;
  description: string;
  author: User;
  viewCount: number;
  favoriteCount: number;
  installCount: number;
  commentCount: number;
  tags: Tag[];
}