<script lang="ts">
  let varContador: number = 0;
  const modificadorContador = (value: number): number => (varContador += value);
  const reseteo = (): number => (varContador = 0);
</script>

<main>
  <h1>aplicacion contador</h1>
  <p class={varContador > 0 ? "positivo" : "negativo"}>
    la cantidad es: {varContador}
  </p>
  <button on:click={() => modificadorContador(+1)}>+1</button>
  <button on:click={() => modificadorContador(-1)}>-1</button>
  <button on:click={reseteo}>reset</button>
</main>

<style>
  .positivo {
    color: blue;
  }
  .negativo {
    color: red;
  }
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
