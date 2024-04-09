<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import type {IReceitas} from "@/interfaces/IReceitas";

export default defineComponent({
  name: "CardReceitas",
  props: {
    receita: {type: Object as PropType<IReceitas>, required: true}
  }
})
</script>

<template>

  <article class="receita">
    <img class="imagem" :src="`/imagens/receitas/${receita.imagem}`">
    <p class="paragrafo receita-nome">{{receita.nome}}</p>
  </article>

</template>

<style scoped>

.receita{
  width: 19.5rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFFFFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.receita-nome{
  font-size: 18px;
  font-weight: 700;
}

.imagem{
  width: 100%;
  border-radius: 1rem 1rem 0rem 0rem;
}
</style>