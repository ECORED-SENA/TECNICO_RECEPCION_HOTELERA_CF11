<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p La industria hotelera se ha caracterizado por su capacidad de mantener actualizados y ordenados los saldos de las cuentas para los huéspedes. La recepción y más puntualmente la sección de caja, procesa y centraliza diariamente una multitud de cargos y pagos, efectuados por los huéspedes y los clientes en los ambientes del hotel, lo que requiere de un sistema contable bien organizado (sistema uniforme de cuentas) y de ser posible un sistema PMS (Property Management System) que apoye esta labor. En este componente de la formación, se abordan los procesos técnicos para que esa gestión financiera sea exitosa.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
