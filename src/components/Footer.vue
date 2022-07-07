<template>
  <nav class="navbar navbar-expand-lg bg-dark footer footer__icon">
    <a href="https://www.linkedin.com/in/juan-maynard/" target="_blank" class="footer__icon"><i class="bx bxl-linkedin-square"></i></a>

    <a href="https://github.com/juanmaynard91" target="_blank" class="footer__icon"><i class="bx bxl-github"></i></a>

    <a href="https://wa.me/5492494577897" target="_blank" class="footer__icon"><i class="bx bxl-whatsapp"></i></a>
  </nav>
</template>

<script setup>
</script>

<style>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  width: 100%;
  height: 52px;
  /*position: sticky;
  bottom: 0;*/
}

.footer__icon {
  padding: 0 10px;
  text-decoration: none;
  color: #fff;
}

.footer__icon:hover {
  color: #d7dde8;
}

@media screen and (min-width: 412px) {
  .footer {
    position: sticky !important;
    bottom: 0;
  }
}

@media screen and (min-width: 915px) {
  .footer {
    position: static !important;
  }
}
</style>