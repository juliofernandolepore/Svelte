<script lang="ts">
  import Saludo from "./components/Saludo.svelte";
  import Contador from "./components/Contador.svelte";
  /* puedo crear una variable en este componente para fijar un valor inicial */
  let valorInicial = 60;
</script>

<Saludo
  title="estoy en App.svelte y soy un title renderizado. el 
  componente importado contador es:"
/>

<Contador valorInicial={10} />
<Contador {valorInicial} />
