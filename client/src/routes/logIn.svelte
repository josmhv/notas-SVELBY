<script>
import { usuario, validateUsrs } from '$lib/database'
export let value = ''

async function logIn() {
  if (await validateUsrs(value)) {
    usuario.set(value);
  } else {
    usuario.set('')
  }
}
</script>

<button type="submit" class="btn btn-primary" id="button-usuario" on:click={logIn}> Ingresar </button>
