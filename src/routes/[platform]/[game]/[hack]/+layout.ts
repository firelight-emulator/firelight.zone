import { hacks } from '$lib/stores/hacks';
import { error } from '@sveltejs/kit';
import { and, getDocs, query, where } from 'firebase/firestore';

export async function load({ parent, params }) {
  const { game } = await parent();
  if (!game) error(404);

  const q = query(
    hacks(),
    and(
      where('slug', '==', params.hack),
      where('gameId', '==', game.id),
    ),
  );

  const hack = await getDocs(q).then((docs) => docs.docs[0]?.data());
  if (!hack) error(404);

  return {
    hack,
  }
}
