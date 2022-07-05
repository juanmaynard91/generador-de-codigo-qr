<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

import { provide, ref } from "vue";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

const userGoogle = ref(false);

onAuthStateChanged(getAuth(), (user) => {
  userGoogle.value = user;
});

provide("userGoogle", userGoogle);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

#app {
  text-align: center;
  color: #fff;
  background-color: #7f00ff;
  height: 100vh;
  font-family: "Poppins", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  outline: none;
}

body {
  padding-right: 0 !important;
}

@media screen and (max-width: 412px) {
  #app {
    height: auto;
  }
}
</style>
