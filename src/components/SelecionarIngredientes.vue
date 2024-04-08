<script lang="ts">
import { obterCategorias } from '@/http';
import type {ICategoria} from "@/interfaces/ICategoria";
import CardCategoria from "@/components/CardCategoria.vue";
import BuscarReceita from "@/components/BuscarReceita.vue";
import FooterCooking from "@/components/FooterCooking.vue";

   export default {
     components: {FooterCooking, BuscarReceita, CardCategoria},
      data(){
         return {
            categorias: [] as ICategoria[]
         }
      },
     async created(){
        this.categorias = await obterCategorias();
     },
     emits: ["adicionarIngrediente", "removerIngrediente","buscarReceitas"]
   }
</script>

<template>
 <section class="selecionar-ingredientes">
   <h1 class=" cabecalho titulo-ingredientes"> Ingredientes</h1>
   <p class="paragrafo-lg instrucoes">Selecione abaixo os ingredientes que você quer usar nesta receita:</p>

   <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
        <CardCategoria
            @remover-ingrediente="$emit('removerIngrediente', $event)"
            @adicionar-ingrediente=" $emit('adicionarIngrediente', $event)"
            :categoria="categoria"/>
      </li>
   </ul>
   <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
   </p>
  <BuscarReceita @click="$emit('buscarReceitas')" />
 </section>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  margin-bottom: 1.5rem;
  display: block;
}
.instrucoes {
  margin-bottom: 2rem;
}
.categorias{
margin-bottom: 1rem;
display: flex;
justify-content: center;
gap: 1.5rem;
flex-wrap: wrap;
}

.dica{
   align-self: flex-start;
   margin-bottom: 3.5rem;
}
</style>