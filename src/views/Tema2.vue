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
            .cajon.color-secundario.p-4.mb-0
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

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12.desktop
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img12.svg', alt='Imagen decorativa')

          div(x="30%" y="14%" tooltip="Diseño Curricular" numero="+")
            h5 Diseño Curricular
            p Genera PDF diseño titulada complementaria NO a la medida.

          div(x="30%" y="36%" tooltip="Planeación de la Formación" numero="+")
            h5 Planeación de la Formación
            p COMPLEMENTARIA VIRTUAL: 
            p Administrar fichas virtuales centro.

          div(x="30%" y="60%" tooltip="Gestión de Ambientes" numero="+")
            h5 Gestión de Ambientes
            li Consultar fichas instructor.
            li Diagramar horario instructor.
            li Reporte de instructores por ficha.
            li Solicitar eventos.

          div(x="34%" y="84%" tooltip="Gestión de tiempos" numero="+")
            h5 Gestión de tiempos
            p GESTIONAR TIEMPOS DEL INSTRUCTOR:
            li Consultar inasistencia del aprendiz.
            li Consultar registro de tiempo.
            li Gestionar actividades adicionales del instructor.
            li Registrar actividad adicional del instructor.
            li Registrar inasistencia del aprendiz.

          //- div(x="34%" y="84%" tooltip="Gestión de tiempos" numero="+")
          //-   h5 Gestión de tiempos
          //-   p GESTIONAR TIEMPOS DEL INSTRUCTOR:
          //-   li Consultar inasistencia del aprendiz.
          //-   li Consultar Registro de Tiempo.
          //-   li Gestionar Actividades Adicionales del Instructor.
          //-   li Registrar Actividad Adicional del Instructor.
          //-   li Registrar Inasistencia del Aprendiz.

          div(x="65%" y="91%" tooltip="LMS" numero="+")
            h5 LMS
            li Consultar victorias de capacitación.

          div(x="92%" y="84%" tooltip="Matrícula" numero="+")
            h5 Matrícula
            p EVENTOS DE DIVULGACIÓN TECNOLÓGICA:
            li Generar listado de matriculados.

          div(x="69%" y="37%" tooltip="Reportes" numero="+")
            h5.mb-4 Reportes
            p REPORTES VIRTUAL:
            li.mb-4 Trazabilidad de estados Aprendices.
            p REPORTES VIRTUAL POR CENTRO:
            li Consultar fichas instructor.
            li Estados de aprendices.
            li.mb-4 Reporte de inscritos.
            p REPORTES POR CENTRO DE FORMACIÓN:
            li Administración educativa centro.
            li Diseño curricular centro.
            li Planeación por centro.

          div(x="69%" y="60%" tooltip="Ejecución de la Formación" numero="+")
            h5.mb-4 Ejecución de la Formación
            p ADMINISTRACIÓN RUTA DE APRENDIZAJE:
            li Consulta ruta de aprendizaje.
            li Generar excel de planeación pedagógico.
            li Generar PDF de proyecto formativo.
            li Gestionar la ruta de aprendizaje.
            li Reportes.
            li.mb-4 Solicitud de segunda evaluación.
            p COMPLEMENTARIA VIRTUAL:
            li Consultar novedad cancelamiento.
            li Crear novedad cancelamiento.
            li.mb-4 Enviar correo electrónico a aprendices.
            p EVENTOS DE DIVULGACIÓN TECNOLÓGICA
            li Gestionar asistencias.

          div(x="69%" y="14%" tooltip="SGS" numero="+")
            h5 SGS
            p GESTIONAR SGS:
            li Consultar proyectos de aprendizaje.
            li Consultar ruta de aprendizaje.

    .col.movil
      .row.justify-content-center
        .col-lg-6
          a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_ Mapa rol instructor.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Mapa rol instructor.

    p.mb-5(data-aos="fade-left") Dentro de este mapa del rol de instructor, las actividades que realiza el instructor virtual durante su proceso son: ejecución de la formación, gestión de ambientes y LMS.

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h5.mb-0 Proceso de instructor en SOFIA Plus

    p.mb-5(data-aos="fade-left") A través del siguiente recurso podrá entender el ciclo de ejecución de una ficha. 

    .tarjeta.tarjeta--BG06.px-4.px-md-5.pt-4.mb-5.p-4(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones.p-4
          .row.justify-content-center(titulo="Paso 1")
            .col-lg-6.order-lg-1.order-2
              h5.mb-4 Identificar cursos asignados
              p.mb-0 El instructor recibirá un mensaje a través del correo electrónico registrado en SOFIA Plus, donde se le informa el nombre del curso virtual, número de ficha, la fecha de inicio y finalización.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen decorativa')
          .row.justify-content-center(titulo="Paso 2")
            .col-lg-6.order-lg-1.order-2
              h5.mb-4 Cambiar curso a ejecución
              p.mb-0 Para que los participantes o aprendices del curso puedan iniciar la formación, el instructor SENA deberá cambiar en la ficha el estado de los aprendices de "En tránsito" a "Formación", el instructor deberá asociar a los aprendices a la ruta de aprendizaje establecida para la ficha virtual.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen decorativa')
          .row.justify-content-center(titulo="Paso 3")
            .col-lg-6.order-lg-1.order-2
              h5.mb-4 Verificar aprendices en formación
              p.mb-0 El instructor debe verificar que todos los aprendices del curso hayan cambiado de estado en el sistema, de "En espera" a "Formación", una vez se haya asociado a la ruta de aprendizaje. Además, debe verificar que el número de participantes en formación coincida con el número de matriculados.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen decorativa')
          .row.justify-content-center(titulo="Paso 4")
            .col-lg-6.order-lg-1.order-2
              h5.mb-4 Correo inicial a los aprendices
              p.mb-0 El instructor debe informar a través de SOFIA Plus, mediante un correo inicial, el nombre del programa, número de ficha, fecha de inicio, fecha de finalización y nombre del instructor. Además, debe especificar que el aprendiz tendrá acceso al curso después de 24 horas a través de SOFIA Plus en el paquete funcional del LMS.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen decorativa')
          .row.justify-content-center(titulo="Paso 5")
            .col-lg-6.order-lg-1.order-2
              h5.mb-4 Ejecutar la formación virtual
              p.mb-0 Una vez los cursos se encuentren en estado de ejecución, el instructor debe realizar todo el proceso de desarrollo de la formación virtual, de acuerdo con los lineamientos institucionales vigentes a través del LMS correspondiente.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen decorativa')
          .row.justify-content-center(titulo="Paso 6")
            .col-lg-6.order-lg-1.order-2
              h5.mb-4 Evaluar ruta de aprendizaje
              p.mb-0 Una vez finalice el proceso formativo, el instructor debe realizar el registro de los juicios de evaluación de cada uno de los resultados de aprendizaje, a través del LMS o directamente desde SOFIA Plus, para cada uno de los aprendices del curso.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen decorativa')
          .row.justify-content-center(titulo="Paso 7")
            .col-lg-6.order-lg-1.order-2
              h5.mb-4 Registrar novedades
              p.mb-0 Una vez aplicado los juicios de evaluación de todos los aprendices del curso y sus respectivos resultados de aprendizaje, el instructor debe establecer las novedades de la formación de acuerdo con los lineamientos institucionales.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen decorativa')
          .row.justify-content-center(titulo="Paso 8")
            .col-lg-6.order-lg-1.order-2
              h5.mb-4 Reportes de recurso
              p.mb-0 El instructor debe descargar del reporte de juicios de evaluación, obtenido de SOFIA Plus, las estadísticas del curso y copia del libro de calificaciones obtenidas desde el LMS, de acuerdo con los lineamientos institucionales vigentes.

            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen decorativa')

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 LMS

    p(data-aos="fade-left") El SENA cuenta con un segundo sistema de gestión para el aprendizaje que se basa en un LMS, una abreviatura que en inglés significa <i>«Learning Management System»</i>. Traducido al español, un sistema de administración de aprendizaje. En la formación virtual, la plataforma LMS es la que nos permite crear el aula virtual o lo que comúnmente llamamos Ambiente Virtual de Aprendizaje, en el cual se realiza toda la mediación del proceso formativo entre los instructores y aprendices SENA. El equipo integrante del LMS SENA cuenta con <b>administradores de sistema, coordinadores académicos, equipo de producción, instructores y los aprendices</b>; cada uno de ellos juega un papel importante para el desarrollo del proceso formativo.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon2.color-primario.p-4.mb-0
          p Para que un LMS sea exitoso, el equipo de trabajo responsable debe interactuar constantemente de manera coordinada. Los roles involucrados son:

    .row.justify-content-center.mb-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema2/img14.svg' alt='AvatarTop')
          h4.text-center Instructores
          p Son los tecnólogos o profesionales de las diferentes áreas, encargados de impartir la formación a través del LMS, de acuerdo con los diseños curriculares de los diferentes programas de formación.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema2/img15.svg' alt='AvatarTop')
          h4.text-center Coordinadores académicos
          p Equipo de trabajo encargados de la planeación de la oferta académica en cada una de las diferentes modalidades de formación, así como el seguimiento académico a los instructores y aprendices según los lineamientos institucionales vigentes.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema2/img16.svg' alt='AvatarTop')
          h4.text-center Administradores de sistema
          p Equipo de trabajo encargado de administrar, acompañar, mantener y estabilizar cada uno de los sistemas de gestión con los que cuenta el SENA (SOFIA Plus - LMS).

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema2/img17.svg' alt='AvatarTop')
          h4.text-center Equipos de producción
          p Equipo conformado por expertos temáticos, asesores pedagógicos, diseñadores y desarrolladores, con el fin de crear, diseñar y programar los contenidos que conformarán cada uno de los diferentes cursos de la oferta virtual del SENA.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema2/img18.svg' alt='AvatarTop')
          h4.text-center Aprendices
          p Son todas las personas que reciben formación en la entidad. En el SENA, se les reconoce como libres pensadores, con capacidad crítica, solidarios, emprendedores, creativos y líderes.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span <i>Procedimiento instructor - aprendiz.</i>
      .row.justify-content-center
        .col-lg-10.col-md-12.col-12
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img19.svg', alt='La figura 2, ejemplifica un proceso que se da en una formación virtual, entre el instructor y el aprendiz.')
          figure.movil
            img(src='@/assets/curso/temas/tema2/img20.svg', alt='La figura 2, ejemplifica un proceso que se da en una formación virtual, entre el instructor y el aprendiz.')

    
    p.mb-5(data-aos="fade-left") El instructor SENA juega uno de los papeles más importantes dentro de esta comunidad. Es la persona que actúa durante todo el proceso formativo, interactuando constantemente con el aprendiz. El LMS es el canal de conexión y comunicación entre instructores y aprendices, mediante la publicación de actividades, recursos educativos digitales y herramientas de comunicación sincrónicas o asincrónicas que favorecen el trabajo colaborativo, siempre en cumplimiento de altos estándares de calidad y los lineamientos institucionales vigentes.

    
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
