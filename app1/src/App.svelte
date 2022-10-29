<script lang="ts">
  let nombre: string = "amore";
  let varContador: number = 0;

  const agregar = () => {
    varContador++;
  };
  const restar = () => {
    varContador--;
  };
  const reset = () => {
    varContador = 0;
  };
</script>

<main>
  <h1>Hola {nombre}!</h1>
  <p>contador: {varContador}</p>
  <button on:click={agregar}>+1</button>
  <button on:click={restar}>-1</button>
  <button on:click={reset}>reset</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
