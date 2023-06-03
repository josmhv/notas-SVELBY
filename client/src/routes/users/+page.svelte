<script lang="ts">
import type { PageData } from './$types';
import { getUsrs, deleteUsr, createUser, usuario } from '$lib/database'
/* import { enhance, applyAction } from '$app/forms'; */
/* import { invalidateAll } from '$app/navigation'; */


export let data: PageData;
let { usrs } = data;
let usrName = ''
let globalUsr = ''

async function create() {
  await createUser(usrName)
  usrs = await getUsrs()
}

usuario.subscribe((value: string) => {
  globalUsr = value;
})

async function del(id: number) {
  let usr = await getUsrs(String(id));
  if (globalUsr === usr.name) {
    usuario.set('')
    await deleteUsr(id)
    usrs = await getUsrs()
  } else {
    alert(" Only the user can delete it self ")
  }
}
</script>

<div class="container">
  <h1>Crear Usuario</h1>

  <div class="mb-3">
    <!--component

    <form 
      method="POST" 
      action="?/cp" 
      use:enhance
    >
      <input type="text" bind:value={usrName} name="usrName" class="form-control" id="exampleFormControlInput1" placeholder="Nombre de usuario"><br />
      <button class="btn btn-primary" type="submit" >Crear</button>
    </form>
    -->
    <form>
      <input type="text" bind:value={usrName} class="form-control" id="exampleFormControlInput1" placeholder="Nombre de usuario"><br />
      <button class="btn btn-primary" type="submit" on:click={create}>Crear</button>
    </form>
  </div>

  <h3>Lista de usuarios</h3>
  <ul class="list-group">
    {#each usrs as usr}
      <li class="list-group-item" >
        <span class="align-items-center">{usr.name}</span>
        <button class="btn btn-danger float-end" type="button" on:click={() => {del(usr.id)}}>Eliminar usuario</button>
      </li>
    {/each}
  </ul>
</div>
