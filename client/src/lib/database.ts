import {writable} from 'svelte/store'
export const API_URL = "http://127.0.0.1:3000/"

export async function getPosts(id = '' ) {
  let r = await fetch(`${API_URL}posts/${id}`);
  const data = await r.json();
  return data
}

export async function createPost(usr: String, title: String, body: String) {
  try {
    let r = await fetch(`${API_URL}posts/`, {
      method: 'POST',
      headers: {
	'Content-Type': 'application/json',
      },
      body: JSON.stringify({
	usr,
	title,
	body
      })
  })

  let data = await r.json()
  console.log('Success: ', data)
  } catch(e) {
    console.log(e)
  }
}

export async function deletePost(id: Number) {
  try {
    let r = await fetch(`${API_URL}posts/${id}`, {
      method: 'DELETE',
      headers: {
	'Content-Type': 'application/json',
      },
      body: JSON.stringify({
	id
      })
    })

    let data = await r.json()
    console.log('Success: ', data)
  } catch(e) {
    console.log(e)
  }
}

export async function updatePost(id: number, title: string, body: string) {
  try {
    let r = await fetch(`${API_URL}posts/${id}`, {
      method: 'PATCH',
      headers: {
	'Content-Type': 'application/json',
      },
      body: JSON.stringify({
	id,
	title,
	body
      })
    })

    let data = await r.json()
    console.log('Success: ', data)
  } catch(e) {
    console.log(e)
  }
}

export async function getUsrs(id: string = '') {
  let r = await fetch(API_URL + `usrs/${id}`);
  const data = await r.json();
  return data
}

export async function validateUsrs(usr: String) {
  const usrs = await getUsrs();
  let usr_names: any[] = [];
  usrs.forEach((u) => {
    usr_names.push(u.name);
  })
  if (usr_names.includes(usr)) {
    return true
  } else {
    return false
  }
}

export async function createUser(name: string) {
  try {
    let r = await fetch(`${API_URL}usrs/`, {
      method: 'POST',
      headers: {
	'Content-Type': 'application/json',
      },
      body: JSON.stringify({
	name
      })
  })

  let data = await r.json()
  console.log('Success: ', data)
  } catch(e) {
    console.log(e)
  }
}

export async function deleteUsr(id: number) {
  try {
    let r = await fetch(`${API_URL}usrs/${id}`, {
      method: 'DELETE',
      headers: {
	'Content-Type': 'application/json',
      },
      body: JSON.stringify({
	id
      })
    })

    let data = await r.json()
    console.log('Success: ', data)
  } catch(e) {
    console.log(e)
  }
}

export const usuario = writable('');
