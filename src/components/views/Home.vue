<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <lista-vagas>
      <!-- <template v-slot:titulo="slotProps">
        {{ slotProps.vagas }}
      </template> 
      <template v-slot:default="slotProps">
        {{ slotProps }}
      </template>
      <template v-slot:rodape="slotProps">
        {{ slotProps }}
      </template> -->
    </lista-vagas>

    <div class="row mt-5">
      <div class="col-4">
        <indicador
          titulo="Vagas abertas"
          indicador="100"
          bg="bg-dark"
          color="text-white"
        ></indicador>
      </div>

      <div class="col-4">
        <indicador
          titulo="Profissionais cadastrados"
          indicador="225"
          bg="bg-dark"
          color="text-white"
        ></indicador>
      </div>

      <div class="col-4">
        <indicador
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-ligth"
          color="text-dark"
        ></indicador>
      </div>
    </div>
  </div>
</template>

<script>
import Indicador from "@/components/comuns/Indicador.vue";
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
import ListaVagas from "@/components/comuns/ListaVagas.vue";

export default {
  name: "Home",
  components: {
    PesquisarVaga,
    Indicador,
    ListaVagas,
  },
  data: () => ({
    usuariosOnline: 0,
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101); //entre 0 e 100
    },
  },
  created() {
    setInterval(this.getUsuariosOnline, 1000); //a cada 1 segundo
  },
};
</script>

<style scoped></style>
