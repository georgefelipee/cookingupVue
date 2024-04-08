<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import SuaLista from "@/components/SuaLista.vue";
import ReceitasEncontradas from "@/components/ReceitasEncontradas.vue";

export default defineComponent({
  name: "MostrarReceitas",
  props: {
    ingredientes: {type: Array as PropType<{ nome: string }[]>, required: true}
  },
  components: {ReceitasEncontradas, SuaLista}
})
</script>

<template>
  <section>
    <SuaLista  :ingredientes="ingredientes"/>
    <ReceitasEncontradas :ingredientes="ingredientes"/>
  </section>
</template>

<style scoped>

</style>