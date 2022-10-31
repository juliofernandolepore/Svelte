<script lang="ts">
  export let name: string;
  import Clima from "./components/Clima.svelte";
</script>

<main class="text-center">
  <h1 class="h1">aplicacion {name}!</h1>
  <hr />
  <Clima />
</main>

<style>
</style>
