<template>
  <!-- <slot name="titulo" :dadosTitulo="{ttulo: 'Título lista', nroVagas: 15}">
    <p>Título da lista de vagas</p>
  </slot> -->
  <slot :vagas="vagas">
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga v-bind="vaga" />
      </div>
    </div>
  </slot>
  <!-- <slot name="rodape" :dadosRodape="{titulo: 'Rodapé Lista', paginacao:{nroPaginas:10, PaginaAtual:5}}">
    <p>O rodapé da lista devgas</p>
  </slot> -->
</template> 


<script>
import Vaga from "@/components/comuns/Vaga.vue";
export default {
  name: "ListaVagas",
  data: () => ({
    vagas: [],
  }),
  components: {
    Vaga,
  },
  activated() {
    this.vagas = JSON.parse(localStorage.getItem("vagas"));
  },
  mounted() {
    this.emitter.on("filtrarVagas", (vaga) => {
      const vagas = JSON.parse(localStorage.getItem("vagas"));
      this.vagas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      );
    });
  },
};
</script>
