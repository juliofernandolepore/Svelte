<script lang="ts">
  export let valorInicial: number = 0;

  const incremento = () => {
    valorInicial++;
  };
</script>

<div>
  <h2>contador: {valorInicial}</h2>
  <button on:click={incremento}>+1</button>
</div>

<style>
  h2 {
    color: brown;
  }
  div {
    text-align: center;
    background-color: blueviolet;
  }
</style>
