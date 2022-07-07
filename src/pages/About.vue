<template>
  <div class="container about">
    <h3>Generar codigo QR</h3>
    <form @submit.prevent="formulario">
      <input type="text" placeholder="ingrese url" class="form-control mt-3 mb-3" v-model.trim="dato" />
    </form>

    <qrcode-vue :value="dato" :size="270" v-if="dato" class="size" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import QrcodeVue from "qrcode.vue"; // npm

const dato = ref("");

const formulario = () => {
  dato.value = "";
};
</script>

<style>
.about {
  height: 88.8vh;
}

form {
  margin: 0 auto;
  width: 70%;
}

h3 {
  margin: 30px;
  /*text-align: start;*/
  text-decoration: underline;
  text-transform: uppercase;
}

.size {
  margin: 30px 0 30px 0;
  box-shadow: rgb(0 0 0 / 50%) 0 1rem 1rem;
}

@media screen and (max-width: 360px) {
  .about {
    height: 81vh !important;
  }
}

@media screen and (max-width: 740px) {
  .about {
    height: 130vh;
  }
}
</style>