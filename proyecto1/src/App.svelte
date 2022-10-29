<script lang="ts">
  import Saludo from "./components/Saludo.svelte";
  import Contador from "./components/Contador.svelte";
</script>

<Saludo
  title="estoy en App.svelte y el contador que viene del componente saludo es:"
/>

<Contador valorInicial={10} />

<Contador valorInicial={0} />
