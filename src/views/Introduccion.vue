<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cajon-b.color-primario.p-3.mb-5
      p.mb-0(data-aos="Fade-left") La contextualización de una temática es muy importante porque es la base para el desarrollo de cualquier proceso de enseñanza - aprendizaje. Es por ello, que este componente está enmarcado en la adaptación de los lineamientos de la Formación Profesional Integral, en adelante FPI, del SENA en la modalidad virtual. Los sistemas de información que se utilizan en el desarrollo de la formación SOFIA Plus, CompromISO y el LMS, están orientados al fortalecimiento de las competencias y actividades que desarrollará el instructor-tutor virtual durante la ejecución del proceso formativo.
    
    //- figure.mb-5(data-aos="zoom-in")
    //-   .video
    //-     iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
