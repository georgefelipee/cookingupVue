<script  lang="ts">

import type {PropType} from "vue";
import type {IReceitas} from "@/interfaces/IReceitas";
import {obterReceitas} from "@/http";
import CardReceitas from "@/components/CardReceitas.vue";
import BotaoReceita from "@/components/BotaoReceita.vue";
import {itenDeLista1EstaoEmLista2} from "@/services/listas";

export  default {
  components: {BotaoReceita, CardReceitas},
  data() {
      return {
        receitas: [] as IReceitas[],
        receitasPossiveis: [] as IReceitas[]
      }
  },
  async created(){
    this.receitas = await obterReceitas();
    this.filtrarReceitasPossiveis();
  },
  props: {
    ingredientes: {type: Array as PropType<{ nome: string }[]>, required: true}
  },
  methods:{
    filtrarReceitasPossiveis(){
      // Lógica que verifica se posso fazer receita:
      // Todos os ingredientes de uma receita devem estar inclusos na minha lista de ingredientes
      // Se sim, devemos retornar `true`
        var ingredientesAux = this.ingredientes.map(ingrediente => ingrediente.nome)

        console.log(ingredientesAux)
        this.receitasPossiveis = this.receitas.filter(receita => {
          const possoFazerReceita = itenDeLista1EstaoEmLista2(receita.ingredientes, ingredientesAux)

          return possoFazerReceita;
        })

      console.log(this.receitasPossiveis)
    },

  },
}
</script>

<template>
 <section class="receitas-encontradas">
    <h1 class="cabecalho titulo-receitas">Receitas</h1>
   <p class="paragrafo texto-resultados">Resultados Encontrados: {{receitasPossiveis.length}}</p>
   <p v-if="receitasPossiveis.length" class="paragrafo-lg texto-opcoes" > Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!</p>
    <p v-else class="paragrafo-lg texto-opcoes">Não encontramos nenhuma receita com os ingredientes que você tem por aí!</p>

   <ul class="receitas">
     <li v-for="receita in receitasPossiveis" :key="receita.nome">
        <CardReceitas :receita="receita"/>
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