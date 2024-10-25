<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema:
        'Lineamientos institucionales y administración educativa en los procesos de formación virtual',
      titulo: 'Cuestionario - Lineamientos SENA',
      introduccion:
        '<b> Objetivo:</b> Determinar el actor o acción presente en los diferentes procedimientos SENA, basado en la acción formativa desarrollada en la institución.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '<strong>Es el gestor principal del procedimiento de la ejecución de la formación profesional:</strong>',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aprendiz.', esCorrecta: false },
            { id: 'b', texto: 'Instructor.', esCorrecta: true },
            { id: 'c', texto: 'Coordinador.', esCorrecta: false },
            { id: 'd', texto: 'Diseño Curricular.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! El instructor es el actor principal de este proceso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '<b>No es una formación ofrecida por EL SENA:</b>',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Virtual.', esCorrecta: false },
            { id: 'b', texto: 'Presencial.', esCorrecta: false },
            { id: 'c', texto: 'Personal.', esCorrecta: true },
            { id: 'd', texto: 'A distancia.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Este tipo de formación no es aplicada en el SENA.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '<b>No hace parte de una competencia asociada al instructor:</b>',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Comunicativa.', esCorrecta: false },
            { id: 'b', texto: 'Conductual.', esCorrecta: true },
            { id: 'c', texto: 'Técnica.', esCorrecta: false },
            { id: 'd', texto: 'Específica.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Tiene claro cuáles son las competencias asociadas al instructor.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '<b>Indique cuáles son los momentos presentes en un curso:</b>',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Inicio y fin.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Depende del tipo de formación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Antes, al inicio, durante y al finalizar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Inscripción, ficha, formación, graduación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce cuáles son los momentos que se dan durante un curso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '<b>Son los dos sistemas de gestión académica utilizados por el SENA:</b>',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'CompromISO y el LMS.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Centro de calificaciones y repositorio.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'SofiaPlus y el LMS.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Inventario y Diseño Curricular.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Estos son los sistemas utilizados por el SENA en la gestión académica.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '<b>Es uno de los roles principales asociados a SOFIA Plus:</b>',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Coordinador.', esCorrecta: false },
            { id: 'b', texto: 'Gestor.', esCorrecta: false },
            { id: 'c', texto: 'Fichas.', esCorrecta: false },
            { id: 'd', texto: 'Aspirante.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '<b>Las siglas FPI dentro del funcionamiento SENA hacen referencia a:</b>',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Formadores Integrales.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Funcionamiento Público Instructor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Instructores de Formación Integral.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formación Profesional Integral.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Esto representan las siglas alusivas a la Formación Profesional Integral.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '<b>No es un sistema de información utilizado en el desarrollo de la formación del SENA:</b>',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Drive.', esCorrecta: true },
            {
              id: 'b',
              texto: 'SOFIA Plus.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'CompromISO.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'LMS.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Este no es un sistema de información utilizado en la entidad.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '<b>Los Resultados de aprendizaje son enunciados que están asociados a:</b>',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aprendizaje colaborativo.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Evidencias.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Centro de calificaciones.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Actividades de aprendizaje.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Los Resultados de aprendizaje se asocian a las Actividades de aprendizaje y evaluación.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '<b>El aula virtual es conocida también como:</b>',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Entrega de evidencias.', esCorrecta: false },
            { id: 'b', texto: 'Espacios formativos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Ambiente Virtual de Aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sistema de descargas de certificaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente! Tiene claro lo que es un AVA.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Ha superado la actividad, demostrando que posee conocimientos sólidos sobre la temática tratada en el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda revisar el componente formativo e intentarlo nuevamente.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
