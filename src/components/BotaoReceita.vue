<script lang="ts">
export default {
  name: 'BotaoReceita',
  props: {
    msg: String
  }
}
</script>

<template>
  <button class="buscar__receita">
    {{msg}}
  </button>
</template>

<style scoped>
.buscar__receita{
  cursor: pointer;
  background-color: var(--coral, #F0633C);
  padding: 1rem 0.5rem;
  width: 312px;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: var( --branco, #fff);
  margin-bottom: 3rem;
}
</style>