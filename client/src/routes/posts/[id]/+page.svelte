<script lang="ts">
import type { PageData } from './$types';
import { updatePost, getPosts, usuario } from '$lib/database'

let updating: boolean = false;
let title: string = '';
let body: string = '';
let current_usr: string = '';
export let data: PageData;
let { post } = data;
let { usr } = data;

usuario.subscribe((value: string) => {
  current_usr = value;
})

function update() {
  if (current_usr === usr.name) {
    updating = true
  } else {
    alert("Solo el creador puede editar los posts.")
  }
}

async function upgrade() {
  await updatePost(post.id, title, body);
  post = await getPosts(post.id);
  updating = false;
}
</script>

<div class="container d-flex justify-content-center">
  <div class="card" style="width: 50%; " >
    {#if !updating}
      <div class="card-body">
        <h5 class="card-title">{ post.title }</h5>
        <p class="card-text">{ post.body }</p>
        <p class="card-text">Por: { usr.name }</p>
        <button on:click={update} class="btn btn-link">Cambiar</button>
        <a href="/posts" class="btn btn-link">Posts</a>
      </div>
    {:else}
      <div class="card-body">
        <form>
          <input type="text" class="form-control" placeholder="{post.title}" bind:value={title}>
          <input type="text" class="form-control" placeholder="{post.body}" bind:value={body}>
          <button type="submit" class="btn btn-link" on:click={upgrade}>Actualizar</button>
        </form>
      </div>
  {/if}
  </div>

</div>
