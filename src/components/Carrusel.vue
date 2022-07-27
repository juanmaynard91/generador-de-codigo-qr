<template>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/codigo-qr-1.webp" loading="lazy" class="d-block w-100" alt="codigo-qr-uno">
    </div>
    <div class="carousel-item">
      <img src="../assets/codigo-qr-2.webp" loading="lazy" class="d-block w-100" alt="codigo-qr-dos">
    </div>
    <div class="carousel-item">
      <img src="../assets/codigo-qr-3.webp" loading="lazy" class="d-block w-100" alt="codigo-qr-tres">
    </div>
    <div class="carousel-item">
      <img src="../assets/codigo-qr-4.webp" loading="lazy" class="d-block w-100" alt="codigo-qr-cuatro">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script setup>
</script>

<style>
.carousel-inner {overflow: hidden;border-radius: 5px;margin-top: 13px;box-shadow: rgb(0 0 0 / 50%) 0 1rem 1rem;}.carousel-control-prev, .carousel-control-next {z-index: 0;}img {width: 100%;height: 300px;object-fit: cover;}img:hover {transform: scale(1.15);transition: transform 0.5s, opacity 0.5s;}@media screen and (max-width: 412px) {img {height: 200px;}}@media screen and (max-width: 915px) {img {height: 260px;}}
</style>