<script lang="ts">
import type { PageData } from './$types';
import CreatePost from "./CreatePost.svelte";
import { getPosts, deletePost, getUsrs, usuario } from "$lib/database";

export let data: PageData;
let { posts } = data;
let usr: string;

usuario.subscribe((value: string) => {
  usr = value;
})

function loadData() {
  setTimeout(async () => {
    posts = await getPosts()
    /* posts = data.posts; */
  }, 20);
}

async function getPostUsr(id: string) {
  let { name } = await getUsrs(id);
  return name;
}

async function del(usr_id: number, id: number) {
  let postUsrId = await getUsrs(String(usr_id));
  if (postUsrId.name === usr) {
    await deletePost(id);
    loadData();
  } else {
    alert("Solo el autor puede borrar sus posts.")
  }
}

</script>

<div class="container">
  <CreatePost btn={loadData}/>
  {#await posts}
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  {:then post}
    {#if post.length > 0}
      <h1>Posts</h1>
    {/if}
    {#each post as post}
      <div class="card">
        <div class="row align-items-start card-body">
          <div class="col">
            <h1><a href="/posts/{post.id}"> {post.title} </a></h1>
            <p>{post.body}</p>
            {#await getPostUsr(post.usr_id)}
              <p>Por: {usr}</p>
            {:then usr}
              <p>Por: {usr}</p>
            {:catch error}
              <p class="error">{error.message}</p>
            {/await}
          </div>
          <div class="col ">
            <button class="btn btn-danger float-end" type="button" on:click={() => {del(post.usr_id, post.id)}}>X</button>
          </div>
        </div>
      </div>
    {/each}
  {:catch error}
    <p class="error">{error.message}</p>
  {/await}
</div>

<style>
  .error {
    background-color: red;
    color: white;
  }
</style>
