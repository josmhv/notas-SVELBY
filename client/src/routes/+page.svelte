<script lang="ts">
import type { PageData } from './$types';
import { usuario } from '$lib/database'
import LogIn from './logIn.svelte'

export let data: PageData;
let { usrs } = data;
let usr_value: string;
let in_value = '';

usuario.subscribe((value: string) => {
  usr_value = value
});

function logIn() {
  usuario.set(in_value);
}

function reset() {
  usuario.set('');
}
</script>

<div class="container d-flex justify-content-center">
  <div class="card" style="width: 50%;">
    {#if !usr_value}
    <div class="card-body">
      <form on:submit={logIn}>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Usuario" aria-label="Usuario" aria-describedby="button-addon2" bind:value={in_value}>
          <LogIn value={in_value} />
        </div>
      </form>
    </div>
  {:else}
    <div class="card-body">
      Usuario: {usr_value}
      <button class="btn btn-primary" on:click={reset}>Cambiar usuario</button>
    </div>
  {/if}
  </div>
</div>
<div class='container d-flex justify-content-center'>
  <div class="">
    {#await usrs}
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    {:then usr}
      <ul class="list-group">
        <div class="">
          <p>Lista de usuarios</p>
        </div>
        {#each usr as usr}
          <li class="list-group-item">
            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value={usr.name} bind:group={in_value} id="{usr.id}Radio" >
            <label class="form-check-label" for="{usr.id}Radio">{usr.name}</label>
          </li>
        {/each}
      </ul>
    {:catch error}
      <p class="error">{error.message}</p>
    {/await}
  </div>
</div>
