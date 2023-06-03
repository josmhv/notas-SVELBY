import { error } from '@sveltejs/kit';
import type { PageLoad, Actions } from './$types';
import { API_URL, createUser } from '$lib/database'
 
export const load = (async ({ fetch, setHeaders }) => {
  const r = await fetch(`${API_URL}usrs`);
  const usrs = await r.json();
 
  return { usrs };
 
  throw error(404, 'Not found');
}) satisfies PageLoad;

// export const actions: Actions = {
//   cp: async({ cookies, request }) => {
//     const data = await request.formData()
//     const usrName: string = String(data.get('usrName'))

//     await createUser(usrName)
//   }
// }
