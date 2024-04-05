<script lang="ts">
import Banner from './components/Banner.vue';
import ConteudoPrincipal from "@/components/ConteudoPrincipal.vue";

export default {
  components: {ConteudoPrincipal, Banner }
}
</script>

<template>
  <Banner />
  <ConteudoPrincipal />
</template>
