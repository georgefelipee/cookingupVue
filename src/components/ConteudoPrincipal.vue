<script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import Tag from "@/components/Tag.vue";
import SuaLista from "@/components/SuaLista.vue";
import FooterCooking from "@/components/FooterCooking.vue";
import MostrarReceitas from "@/components/MostrarReceitas.vue";

type Paginas = "SelecionarIngredientes" | "MostrarReceitas";
export default {
  name: 'ConteudoPrincipal',
  data() {
    return {
      ingredientes: [] as {nome: string}[],
      conteudo: "SelecionarIngredientes" as Paginas
    }
  },
  components: {
    MostrarReceitas,
    FooterCooking,
    SuaLista,
    Tag,
    SelecionarIngredientes
  },
  methods : {
    adicionarIngrediente(ingrediente: string){
      this.ingredientes.push({nome: ingrediente})
    },
    removerIngrediente(ingrediente: string){
      this.ingredientes = this.ingredientes.filter(ing => ing.nome !== ingrediente)
    },
    navegar(pagina: Paginas){
      console.log(pagina)
      this.conteudo = pagina
    }
  }
}
</script>

<template>
  <main class="conteudo-principal">

    <SuaLista v-if="conteudo === 'SelecionarIngredientes'" :ingredientes="ingredientes"/>

    <KeepAlive include="SelecionarIngredientes">
      <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'"
                              @remover-ingrediente="removerIngrediente($event)"
                              @adicionar-Ingrediente="adicionarIngrediente($event)"
                              @buscar-receitas="navegar('MostrarReceitas')"
                              :conteudo="conteudo"
      />
      <MostrarReceitas @editar-lista="navegar('SelecionarIngredientes')" :ingredientes="ingredientes"  v-else-if="conteudo === 'MostrarReceitas'"/>
    </KeepAlive>

  </main>
  <FooterCooking/>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background-color: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}


@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
