<script  lang="ts">

import type {PropType} from "vue";
import type {IReceitas} from "@/interfaces/IReceitas";
import {obterReceitas} from "@/http";

export  default {
  data() {
      return {
        receitas: [] as IReceitas[]
      }
  },
  async created(){
    this.receitas = await obterReceitas();
  },
  props: {
    ingredientes: {type: Array as PropType<{ nome: string }[]>, required: true}
  },
}
</script>

<template>
 <section class="receitas-encontradas">
    <h1 class="cabecalho titulo-receitas">Receitas</h1>
   <p class="paragrafo texto-resultados">Resultados Encontrados:</p>
   <p class="paragrafo-lg texto-opcoes" > Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!</p>

   <ul class="receitas">
     <li v-for="receita in receitas" :key="receita.nome">
        {{receita.nome}}
     </li>
   </ul>
 </section>
</template>

<style scoped>
.receitas-encontradas {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titulo-receitas{
  color: var(--verde-medio, #3D6D4A);
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: block;
}
.texto-resultados{
  color: var(--verde-medio, #3D6D4A);
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 22px;
}
.texto-opcoes{
  margin-bottom: 2rem;
}

.receitas{
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;

}

</style>