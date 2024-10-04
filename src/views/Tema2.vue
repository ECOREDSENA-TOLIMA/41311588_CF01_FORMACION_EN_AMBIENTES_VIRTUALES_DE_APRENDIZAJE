<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Administración educativa

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es el proceso de planificar, organizar, dirigir y evaluar instituciones y programas educativos. Esta administración, busca crear un entorno propicio para el aprendizaje y el desarrollo integral de los aprendices, al mismo tiempo que gestiona de manera efectiva los recursos de la institución. Ya conociendo lo que la administración educativa conlleva, es importante conocer lo que representa dentro del SENA.
          br
          br
          | 

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Procedimientos administrativos educativos

    p(data-aos="fade-left") El área de administración educativa es aquella encargada del proceso de gestión académica de los integrantes del Servicio Nacional de Aprendizaje SENA. Esta área se encarga de planear los procesos de formación, el proceso de ingreso y selección de aprendices, el desarrollo formativo y el apoyo al aprendiz.
    p.mb-5(data-aos="fade-left") Los procedimientos que se llevan a cabo son:

    .row.justify-content-center.p-5
      .col-12
        .tarjeta.tarjeta--BG03.mb-5.p-5
          SlyderB.mb-5(:datos="datosSlyder")
    
    p.mb-5(data-aos="fade-left") Este proceso de formación se detalla a continuación, incluyendo las acciones SENA que representan cada aspecto:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-8.col-lg-3.col-md-10.mb-4.mb-lg-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img6.svg', alt='Imagen decorativa')

          h3.text-center Planeación
          ol.lista-ol
            li.mb-0 
              span.text-bold a. 
              | Diseño curricular.
            li.mb-0 
              span.text-bold b. 
              | Administración de calendario.
            li.mb-0 
              span.text-bold c. 
              | Gestión de ambientes de aprendizaje.
            li.mb-0 
              span.text-bold d. 
              | Planeación de la formación.

      .col-sm-8.col-lg-3.col-md-10.mb-4.mb-lg-0.mb-5
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img6.svg', alt='Imagen decorativa')

          h3.text-center Ingreso
          ol.lista-ol
            li.mb-0 
              span.text-bold a. 
              | Registro.
            li.mb-0 
              span.text-bold b. 
              | Inscripción.
            li.mb-0 
              span.text-bold c. 
              | Pruebas.
            li.mb-0 
              span.text-bold d. 
              | Selección.
            li.mb-0
              span.text-bold e. 
              | Matrícula.

      .col-sm-8.col-lg-3.col-md-10.mb-4.mb-lg-0.mb-5
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img6.svg', alt='Imagen decorativa')

          h3.text-center Formación
          ol.lista-ol
            li.mb-0 
              span.text-bold a. 
              | Desarrollo curricular.
            li.mb-0 
              span.text-bold b. 
              | Ejecución formación.
            li.mb-0 
              span.text-bold c. 
              | LMS.
            li.mb-0 
              span.text-bold d. 
              | Gestión de tiempos.
            li.mb-0
              span.text-bold e. 
              | Certificación.

      .col-sm-8.col-lg-3.col-md-10.mb-4.mb-lg-0.mb-5
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/img6.svg', alt='Imagen decorativa')

          h3.text-center Apoyo
          ol.lista-ol
            li.mb-0 
              span.text-bold a. 
              | Bienestar.
            li.mb-0 
              span.text-bold b. 
              | Emprendimiento.
            li.mb-0 
              span.text-bold c. 
              | Producción de centros.
            li.mb-0 
              span.text-bold d. 
              | Administración de sistema.
            li.mb-0
              span.text-bold e. 
              | Auditoría de calidad.
      
    .row.justify-content-center
      p(data-aos="fade-left") El instructor o tutor SENA es el encargado de los procesos de formación. En el desarrollo de las acciones formativas deberá interactuar con dos sistemas de gestión académica, debido a que todas sus actividades administrativas y de ejecución de la formación se verán soportadas allí. Estos sistemas son: SOFIA Plus y el LMS.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 SOFIA Plus

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-6.col-10.d-lg-flex.d-none.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/img7.png', alt='Imagen decorativa')
          .col-lg-6.col-12.mb-3
            .cajon.color-secundario.p-4.mb-4
              p El primer sistema de gestión a profundizar es SOFIA Plus, llamado así por ser la abreviación de <b>Sistema Optimizado para la Formación Integral del Aprendizaje</b>. Este sistema de información del SENA permite llevar el control de lo administrativo, del proceso académico y, a su vez, gestionar todos los recursos que se involucran en la formación profesional integral de todos sus usuarios. Además, este sistema posibilita la gestión de los procesos educativos que están presentes en cada uno de los servicios de formación del SENA.
    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h5.mb-0 Rol en SOFIA Plus

    p.mb-3(data-aos="fade-left") Se denomina “Rol” en SOFIA Plus a un grupo de paquetes funcionales, independiente de su jerarquía en el sistema, es decir, que todo integrante de la comunidad educativa SENA tiene asignado su rol y, en consecuencia, sus respectivos paquetes funcionales en el aplicativo. A su vez, cada paquete funcional tiene asociada la gestión de las actividades involucradas en los diferentes procesos y servicios de la formación profesional integral del SENA.
    p.mb-5(data-aos="fade-left") A continuación, algunos roles principales:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/img8.svg' alt='AvatarTop')
        h2.text-center Aprendiz
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/img9.svg' alt='AvatarTop')
        h2.text-center Aspirante
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/img10.svg' alt='AvatarTop')
        h2.text-center Funcionario
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/img11.svg' alt='AvatarTop')
        h2.text-center Instructor

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h5.mb-0 Mapa rol instructor

    p.mb-5(data-aos="fade-left") A continuación, podrá ver el mapa de actividades del rol de instructor en SOFIA Plus, las cuales necesitará dependiendo de la modalidad y momento de la formación que esté desarrollando.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img12.svg', alt='Imagen decorativa')

          div(x="30%" y="14%" tooltip="Diseño Curricular" numero="+")
            h5 Diseño Curricular
            p Genera PDF Diseño Titulada Complementaria NO a la medida.

          div(x="30%" y="36%" tooltip="Planeación de la Formación" numero="+")
            h5 Planeación de la Formación
            p COMPLEMENTARIA VIRTUAL: 
            p administrar Fichas Virtuales Centro.

          div(x="30%" y="60%" tooltip="Gestión de Ambientes" numero="+")
            h5 Gestión de Ambientes
            p GESTIÓN AMBIENTES:
            li Consultar Fichas Instructor.
            li Diagramar Horario Instructor.
            li Reporte de Instructores por Ficha.
            li Solicitar Eventos.

          div(x="34%" y="84%" tooltip="Gestión de tiempos" numero="+")
            h5 Gestión de tiempos
            p GESTIONAR TIEMPOS DEL INSTRUCTOR:
            li Consultar inasistencia del aprendiz.
            li Consultar Registro de Tiempo.
            li Gestionar Actividades Adicionales del Instructor.
            li Registrar Actividad Adicional del Instructor.
            li Registrar Inasistencia del Aprendiz.

          div(x="69%" y="14%" tooltip="SGS" numero="+")
            h5 SGS
            p GESTIONAR SGS:
            li Consultar Proyectos de Aprendizaje.
            li Consultar Ruta de Aprendizaje.

          div(x="69%" y="37%" tooltip="Reportes" numero="+")
            h5 Reportes
            p REPORTES VIRTUAL:
            li Trazabilidad de estados Aprendices.
            p REPORTES VIRTUAL POR CENTRO:
            li Consultar Fichas Instructor.
            li Estados de Aprendices.
            li Reporte de Inscritos.
            p REPORTES POR CENTRO DE FORMACIÓN:
            li Administración Educativa Centro.
            li Diseño Curricular Centro.
            li Planeación por Centro.

          div(x="69%" y="60%" tooltip="Ejecución de la Formación" numero="+")
            h5 Ejecución de la Formación
            p ADMINISTRACIÓN RUTA DE APRENDIZAJE:
            li Consulta Ruta de Aprendizaje.
            li Generar Excel de Planeación Pedagógico.
            li Generar PDF de Proyecto Formativo.
            li Gestionar la Ruta de Aprendizaje.
            li Reportes.
            li Solicitud de Segunda Evaluación.
            p COMPLEMENTARIA VIRTUAL:
            li Consultar Novedad Cancelamiento.
            li Crear Novedad Cancelamiento.
            li Enviar Correo Electrónico a Aprendices.
            p EVENTOS DE DIVULGACIÓN TECNOLÓGICA
            li Gestionar Asistencias.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 LMS

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue

    datosSlyder: [
      {
        titulo: 'Planeación',
        texto:
          'Se disponen los lineamientos y orientaciones para realizar el diseño curricular, el alistamiento, publicación y divulgación de la oferta educativa del SENA, de acuerdo con las políticas y directrices institucionales establecidas, con el fin de divulgar las opciones de formación que ofrece la entidad.',
        imagen: require('@/assets/curso/temas/tema2/img2.png'),
      },
      {
        titulo: 'Ingreso',
        texto:
          'Dispone las actividades para garantizar los medios y recursos para el registro e inscripción de los aspirantes en los programas de formación profesional, para que a través de la utilización de instrumentos de evaluación se seleccionen aquellos aspirantes que cumplen las competencias mínimas requeridas y formalizar su ingreso mediante matrícula.',
        imagen: require('@/assets/curso/temas/tema2/img3.png'),
      },
      {
        titulo: 'Formación',
        texto:
          'Dispone las directrices para ejecutar la formación profesional integral, desarrollando las competencias definidas en el programa de formación en los aprendices matriculados, para que se desempeñen en contextos productivos y sociales, de acuerdo con los lineamientos institucionales vigentes.',
        imagen: require('@/assets/curso/temas/tema2/img4.png'),
      },
      {
        titulo: 'Apoyo',
        texto:
          'Establece las orientaciones necesarias para la oportuna y efectiva ejecución de las actividades y/o recursos relacionados con cada una de las áreas de bienestar, emprendimiento, producción de centros, administración de sistema y auditoría de calidad.',
        imagen: require('@/assets/curso/temas/tema2/img5.png'),
      },
    ],
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
