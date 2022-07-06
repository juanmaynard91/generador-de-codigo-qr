<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <!--<a class="navbar-brand" href="#">Vue</a>-->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">Generar QR</router-link>
          </li>
        </ul>
      </div>
      <button class="btn" v-if="!userGoogle" @click="accederConGoogle">Acceder</button>
      <button class="btn" v-else @click="cerrarSesion">Salir</button>
    </div>
  </nav>
</template>

<script setup>
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { inject } from "vue";

const router = useRouter();

const userGoogle = inject("userGoogle");

const accederConGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    //.then(() => console.log("se inicio sesion"))
    //.then( router.push("/about"))
    .catch((e) => console.log(e));
};

const cerrarSesion = () => {
  signOut(getAuth())
    //.then(() => console.log("se cerro sesion"))
    .then(router.push("/"))
    .catch((e) => console.log(e));
};
</script>

<style>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1; /* para que el navbar quede encima del carrucel cuando scroleo para abajo */
}

li a {
  /*padding: 0 10px 0 10px;*/
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
}

li a:hover {
  /*padding: 0 10px 0 10px;*/
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
  margin: 1.5rem 18rem 1.5rem 0;
}

.nav-item {
  display: flex;
  justify-content: center;
  width: 99px;
  /*height: 23px;*/
}

.container-fluid {
  margin: 0 30px 0 0;
}

/* From uiverse.io by @nikk7007 */
.btn {
  padding: 0.8em 1.8em;
  border: 2px solid #7f00ff;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  transition: 0.3s;
  z-index: 1;
  font-family: inherit;
  color: #fff;
}

.btn::before {
  content: "";
  width: 0;
  height: 300%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background: #7f00ff;
  transition: 0.5s ease;
  display: block;
  z-index: -1;
}

.btn:hover::before {
  width: 105%;
}

.btn:hover {
  color: #fff;
}

@media screen and (max-width: 412px) {
  navbar-nav {
    flex-direction: row;
  }
  .container-fluid {
    margin: 0;
  }
  .nav-item {
    display: flex;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 915px) {
  navbar-nav {
    flex-direction: row;
  }
  .container-fluid {
    margin: 0;
  }
  .nav-item {
    display: flex;
    justify-content: flex-start;
  }
}
</style>