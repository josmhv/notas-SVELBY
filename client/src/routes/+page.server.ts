import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, setHeaders }) => {
  let r = await fetch(`http://127.0.0.1:3000/usrs`);

  setHeaders({
    'Cache-control': r.headers.get('cache-control')
  })

  let usrs = await r.json();

  if (usrs) {
    return { usrs }
  }
 
  throw error(404, 'Not found');
}) satisfies PageServerLoad;


export const ssr = true

