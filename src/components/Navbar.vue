<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">

      <!--<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>-->

<label for="check" type="button" class="bar navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <input id="check" type="checkbox">

    <span class="top"></span>
    <span class="middle"></span>
    <span class="bottom"></span>
</label>

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
  margin: 2rem 18rem 0.5rem 0;
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

  .navbar {
    position: sticky !important;
    top: 0 !important;
    z-index: 1 !important; 
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

  .navbar {
    position: static;
  }
}

/* From uiverse.io by @Ali-Tahmazi99 */
input[type = "checkbox"] {
  -webkit-appearance: none;
  display: none;
  visibility: hidden;
}

.bar {
  position: relative;
  cursor: pointer;
  width: 50px;
  /*height: 40px;*/
  height: 14px;
}

.bar span {
  position: absolute;
  width: 45px;
  height: 3px;
  background: #f1faee;
  border-radius: 100px;
  display: inline-block;
  transition: 0.3s ease;
  left: 0;
}

.bar span.top {
  top: 0;
}

.bar span.middle {
  top: 17px;
}

.bar span.bottom {
  bottom: 0;
}

input[type]:checked ~ span.top {
  transform: rotate(45deg);
  transform-origin: top left;
  width: 48px;
  left: 5px;
}

input[type]:checked ~ span.bottom {
  transform: rotate(-45deg);
  transform-origin: top left;
  width: 48px;
  bottom: -25px;
  box-shadow: 0 0 10px #495057;
}

input[type]:checked ~ span.middle {
  transform: translateX(-20px);
  opacity: 0;
}
</style>