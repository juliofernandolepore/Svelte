<script>
  let varContador = 0;
  /* recordar el uso de llaves {} para interpolar el valor de la variable o 
  hacer llamado a funciones o metodos, a las clases tambien se le pueden pasar 
  llaves con  contenido js  */
  const agregar = () => (varContador += 1);
  const restar = () => (varContador -= 1);
  const resetear = () => (varContador = 0);
</script>

<main>
  <h1>Ejercicio Contador con Eventos en Svelte</h1>

  <h2 class={varContador > 0 ? "Positivo" : "Negativo "}>
    contador {varContador}
  </h2>
  <button on:click={agregar} class="agregar">+1</button>
  <button on:click={restar} class="restar">-1</button>
  <button on:click={resetear} class="reseteoColor">reset</button>
</main>

<style>
  .Positivo {
    color: blue;
  }
  .Negativo {
    color: brown;
  }
  button {
    font-size: 2rem;
    border-radius: 15%;
    margin: 0.1rem, 0.5rem;
  }
  .reseteoColor {
    background: #ff3e00;
  }
  .reseteoColor:hover {
    background-color: #b6441e;
  }
  .agregar {
    background-color: blue;
  }
  .agregar:active {
    background-color: rgb(48, 48, 170);
  }

  .restar {
    background-color: rgb(17, 205, 89);
  }
  .restar:active {
    background-color: rgb(21, 82, 26);
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
    font-size: 2em;
    font-weight: 100;
  }

  h2 {
    font-size: 3rem;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
