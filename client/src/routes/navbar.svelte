<script lang="ts">
import { usuario } from "$lib/database";

let usr: string = '';
usuario.subscribe((value: string) => {
  usr = value;
})

let act1: string, act2: string, act3: string;
act1 = act2 = act3 = '';

</script>

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <div class=" navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item ">
          <a class="nav-link {act1}" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link {act2}" href="/posts">Posts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link {act3}" href="/users">Usuarios</a>
        </li>
      </ul>
        <div class="d-flex justify-content-end">
            {#if usr}
              {usr}
            {:else}
              Usuario no logeado
            {/if}
        </div>
    </div>
  </div>
</nav>

<slot></slot>
