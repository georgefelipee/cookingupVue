<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import SuaLista from "@/components/SuaLista.vue";
import ReceitasEncontradas from "@/components/ReceitasEncontradas.vue";
import BotaoReceita from "@/components/BotaoReceita.vue";

export default defineComponent({
  name: "MostrarReceitas",
  props: {
    ingredientes: {type: Array as PropType<{ nome: string }[]>, required: true}
  },
  components: {BotaoReceita, ReceitasEncontradas, SuaLista},
  emits: ["editar-lista"],
})
</script>

<template>
  <section class="container">
    <SuaLista  :ingredientes="ingredientes"/>
    <ReceitasEncontradas :ingredientes="ingredientes"/>
    <BotaoReceita @click="$emit('editar-lista')" msg="Editar Lista" />
  </section>
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
}
</style>