<script lang="ts">
import { createPost, usuario } from "$lib/database"
export let btn: any;

let usr = '',
  title = 'Texto',
  body = 'de ejemplo';

usuario.subscribe((value) => {
  usr = value;
});
</script>

<div>
  {#if usr}
    <form on:submit={() => {
      createPost(usr, title, body);
    }}>
    <h1>Crear post</h1>
    <div class="mb-3">
      <input type="text" class="form-control" placeholder="Titulo de ejemplo" bind:value={title}>
    </div>
    <div class="mb-3">
      <textarea class="form-control" rows="3" placeholder="Texto de ejemplo" bind:value={body}></textarea>
    </div>
    <button on:click={btn} type="submit" class="btn btn-primary mb-3">Crear</button>
    </form>
  {:else}
    Inicia sesión para poder crear posts.
  {/if}
</div>
<br/>
<br/>
