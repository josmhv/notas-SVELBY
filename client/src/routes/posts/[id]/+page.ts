import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getPosts, getUsrs } from '$lib/database'
 
export const load = (async ({ params }) => {
  let post = await getPosts(params.id)
  let usr = getUsrs(await String(post.usr_id));
  return {post, usr}
 
  throw error(404, 'Not found');
}) satisfies PageLoad;
