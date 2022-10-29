<script lang="ts">
  export let valorInicial: number;

  const incremento = () => {
    valorInicial++;
  };
</script>

<div>
  <h2>contador: {valorInicial}</h2>
  <button on:click={incremento}>+1</button>
</div>
