import { Collection } from "sveltefire";
import { firestoreCollection } from "../util";

export interface Hack {
  slug: string;
  gameId: string;
  name: string;
  shortDescription: string;
  markdownDescription: string;
  logoImage: string;
  bannerImage: string;
};

export const Hacks = Collection<Hack>;

export function hacks() {
  return firestoreCollection<Hack>('hacks')
}
