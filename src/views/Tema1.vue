<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Gestión de la formación profesional

    .col-12.mb-5(data-aos="flip-up")
      figure
        img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Abarca diferentes procesos formativos institucionales, incluyendo de manera directa los desarrollados en el SENA.  busca ofrecer una educación integral y accesible, respondiendo a las necesidades del sector productivo y social a través del desarrollo de competencias. El instructor es clave en este proceso, tanto en modalidades presenciales como virtuales. 

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Lineamientos SENA
    
    p.mb-5(data-aos="fade-left") El siguiente video hace mención a los lineamientos que se tienen en la institución, destacando las modalidades que se manejan en la formación que se imparte y el rol tan importante que ocupa el instructor en la ejecución de la formación profesional:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/yKDLf8p6c-A?si=3PPKD2f4iilYIJAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Ejecución de la formación profesional

    p.mb-5(data-aos="fade-left") El procedimiento de ejecución de la formación profesional integral establece las directrices para desarrollar las competencias definidas en el programa de formación de los aprendices matriculados, para que se desempeñen en contextos productivos sociales, de acuerdo con los lineamientos vigentes.

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h5.mb-0 Competencias del instructor virtual- tutor virtual

    p.mb-5(data-aos="fade-left") El responsable de la ejecución de la formación virtual en el SENA es el instructor virtual, el cual debe reunir las siguientes competencias:

    TabsB.color-acento-botones.mb-5(data-aos="flip-up")
      .py-4.py-md-5.p-4(titulo="Actitudinales" :icono="require('@/assets/curso/temas/tema1/img2.svg')")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img3.png', alt='Imagen decorativa')
          .col-lg-7
            p Son las competencias relacionadas con el "saber-ser" o "saber actuar" estas son:
            li Curiosidad
            li Creatividad
            li Amabilidad
      .py-4.py-md-5.p-4(titulo="Comunicativas" :icono="require('@/assets/curso/temas/tema1/img4.svg')")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='Imagen decorativa')
          .col-lg-7
            p Son las capacidades del instructor para darse a entender y entender al aprendiz. Estas son:
            li Manejo del tono.
            li Claridad-precisión.
            li Buena ortografía.
            li Buen gusto.
            li Redacción clara.

      .py-4.py-md-5.p-4(titulo="Pedagógicas" :icono="require('@/assets/curso/temas/tema1/img6.svg')")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='Imagen decorativa')
          .col-lg-7
            p Son las capacidades, destrezas y conocimientos que posee el instructor-tutor para ejecutar el proceso formativo y lograr una orientación integral en el aprendiz. Estas son:
            li Comunicación.
            li Motivación.
            li Retroalimentación.
            li Uso cuadros de honor.
            li Caracterización de los aprendices.
            li Exigencia.

      .py-4.py-md-5.p-4(titulo="Técnicas" :icono="require('@/assets/curso/temas/tema1/img8.svg')")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='Imagen decorativa')
          .col-lg-7
            p Son las destrezas y conocimiento en el manejo de tecnologías. Estas son:
            li Manejo del LMS.
            li Herramientas ofimáticas.
            li Búsquedas en la web.
            li Web 2.0 (blogs, wikis).
            li Redes sociales.

      .py-4.py-md-5.p-4(titulo="Específicas" :icono="require('@/assets/curso/temas/tema1/img10.svg')")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='Imagen decorativa')
          .col-lg-7
            p Capacidad de poner en practica todos los pensamientos, conocimientos y habilidades. Estas son:
            li Actuaciones constantes.
            li Pensamientos críticos.
            li Aprendizaje significativo.
    
    p.mb-5(data-aos="fade-left") Estas competencias fortalecen la responsabilidad del instructor virtual en el desempeño de las acciones que se agrupan de acuerdo con los momentos de la formación, las cuales son de obligatorio cumplimiento en el desarrollo de su labor. Estos momentos, que deben ser atendidos en su totalidad, son:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <i>Momentos de la formación.</i>
      .row.justify-content-center
        .col-lg-10.col-md-12.col-12
          figure.desktop
            img(src='@/assets/curso/temas/tema1/img12.svg', alt='La figura 1,  relaciona los momentos en los que tanto el instructor, como el aprendiz participan en la formación. Encontrando que antes de iniciar el curso el actor involucrado es el instructor, mientras que al inicio del curso, durante y al finalizarlo, lo hace el instructor, junto con el aprendiz.')
          figure.movil
            img(src='@/assets/curso/temas/tema1/img13.svg', alt='La figura 1,  relaciona los momentos en los que tanto el instructor, como el aprendiz participan en la formación. Encontrando que antes de iniciar el curso el actor involucrado es el instructor, mientras que al inicio del curso, durante y al finalizarlo, lo hace el instructor, junto con el aprendiz.')

    p.mb-5(data-aos="fade-left") Para garantizar la calidad en el proceso de la formación virtual, el instructor cuenta con un documento institucional denominado “Guía de orientaciones para la formación en ambientes virtuales de aprendizaje –AVA-” que lo orienta paso a paso en el cumplimiento de las acciones durante el proceso de ejecución de la formación. Esta guía o documento equivalente se encuentra en siguiente enlace web:

    .tarjeta.tarjeta1.p-3(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-lg-1.col-3.p-4
          img(src="@/assets/curso/temas/tema1/img14.svg").img50
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.mb-1 Guía de orientaciones para la formación en ambientes virtuales de aprendizaje –AVA
              p.mb-0 Documento institucional
            .col-sm-auto
              a.boton.color-acento-botones(href="https://compromiso.sena.edu.co/" target="_blank")
                span Enlace web
                i.fas.fa-link
          
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Aplicativo CompromISO SENA

    p.mb-5(data-aos="fade-left") Es importante conocer los siguientes pasos para lograr una adecuada utilización de este aplicativo:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-lg-8.col-12
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="¿Qué es?")
            .col-lg-12.mb-4.mb-md-0
              p El aplicativo compromiso es el sistema integrado de gestión y autocontrol del SENA.
          .row(titulo="¿Para que le sirve?")
            .col-lg-12.mb-4.mb-md-0
              p Para que todo funcionario y/o contratista SENA conozca la información sobre los procedimientos de la entidad y tenga facilidad para obtener los formatos de los diferentes procesos e información sobre su diligenciamiento.
          .row(titulo="¿Cómo ingresar?")
            .col-lg-12.mb-4.mb-md-0
              p A través del enlace <a href="http://compromiso.sena.edu.co"><b>http://compromiso.sena.edu.co</b></a>. 
              p Requisitos:
              li Ser funcionario y/o contratista SENA.
              li Tener un usuario y una clave asignado por la entidad.
          .row(titulo="¿Qué puede encontrar?")
            .col-lg-12.mb-4.mb-md-0
              p Manual de procesos, manual de procedimientos, formatos de los procesos y procedimientos, guías para diligenciar los formatos y toda la información sobre el SIGA (Sistema Integrado de Gestión y Autocontrol).
      
      .col-lg-4.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema1/img15.png', alt='Imagen decorativa')
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
