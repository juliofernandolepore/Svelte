<script lang="ts">
  import Mensaje from "./components/Mensaje.svelte";
  /* esta variable global define el valor inicial */
  let visible = true;
  /* la funcion hace que se cambie el valor en cada llamado o sea lo covirte al
	valor opuesto del que tenia almacenado o sea false a true y viceversa */
  let manejoColor = () => {
    visible = !visible;
    console.log(visible);
  };
  /*  si visible tiene valor true entonces return de mensaje y si el valor es falso
  entonce deja de mostrar mensaje (que es el h1 del otro componente ) */
</script>

<main>
  {#if visible}
    <Mensaje />
  {/if}
  <button on:click={manejoColor}>mostrar/ocultar</button>
</main>

<style>
  main {
    text-align: center;
  }
</style>
