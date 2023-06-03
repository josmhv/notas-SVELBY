import { error } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
 
export const load = (async ({ fetch, setHeaders }) => {
  let r = await fetch(`http://127.0.0.1:3000/posts`);

  setHeaders({
    'Cache-control': r.headers.get('cache-control')
  })

  let posts = await r.json();
  if ( posts) {
    return { posts }
  }
 
  throw error(404, 'Not found');
}) satisfies PageServerLoad;

