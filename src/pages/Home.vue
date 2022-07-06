<template>
  <div class="container home">
    <Carrusel />

    <div class="row">
      <div class="col-">
        <h3>¿Que son los codigos QR?</h3>
        <p>
          El código QR es una versión bidimensional del código de barras,
          compuesto de patrones de píxeles en blanco y negro. Denso Wave
          pertenece a Denso, una proveedora de Toyota, y ha desarrollado los
          códigos QR para la identificación de componentes con el fin de
          acelerar los procesos logísticos de su producción de automóviles.
          Ahora, con el uso generalizado de los smartphones, el código QR ha
          encontrado su camino al mercado. "QR" significa "Respuesta Rápida",
          que se refiere al acceso instantáneo a la información oculta en el
          Code (código).
        </p>
      </div>

      <div class="col-">
        <h3>¿Cuales son los beneficios de usar codigo QR?</h3>
        <p>
          Los códigos QR están ganando popularidad debido a su multiplicidad.
          Puedes usarlos para obtener feedback con el objetivo de mejorar tus
          productos y servicios, aumentar la participación de los clientes con
          imágenes o videos o incluso promocionar tu negocio con eventos y
          cupones. ¡Todo esto con un solo escaneo!
        </p>
      </div>

      <div class="col-">
        <h3>¿Como escaneo un codigo QR?</h3>
        <p>
          Depende de su dispositivo. Algunos móviles ya vienen con un lector o
          escáner de código QR integrado. Abre la cámara de tu smartphone y
          apúntala hacia el código QR durante unos segundos hasta que aparezca
          una notificación. Si no pasa nada, comprueba la configuración para ver
          si el escáner de códigos QR está activado. ¿Todavía no funciona? No te
          preocupes, sólo instala un lector de código QR desde tu tienda de
          aplicaciones.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Carrusel from "../components/Carrusel.vue";
</script>

<style>
.home {
  max-width: 50%;
  /*margin-bottom: 11%;*/
  height: 87vh;
}

h3 {
  margin-top: 30px;
  /*text-align: start;*/
  text-decoration: underline;
  text-transform: uppercase;
}
p {
  text-align: center;
}

@media screen and (max-width: 412px) {
  .home {
    max-width: 100% !important;
    height: auto;
  }
}

@media screen and (max-width: 915px) {
  .home {
    max-width: 70%;
    height: auto;
  }
}
</style>