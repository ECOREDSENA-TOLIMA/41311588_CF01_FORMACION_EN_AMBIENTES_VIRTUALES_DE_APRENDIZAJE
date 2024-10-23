export default {
  global: {
    componenteFormativo:
      'Lineamientos institucionales y administración educativa en los procesos de formación virtual',
    descripcionCurso:
      'Los lineamientos institucionales son esenciales para asegurar que una organización funcione de manera efectiva, cumpliendo sus objetivos y adaptándose a los desafíos del entorno. El SENA cumple este funcionar educativo, al formar aprendices con conocimientos en su quehacer laboral y personal.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Gestión de la formación profesional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Lineamientos SENA',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ejecución de la formación profesional',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Aplicativo CompromISO SENA',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Administración educativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Procedimientos administrativos educativos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'SOFIA Plus',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'LMS',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Gestión de la formación profesional',
      referencia: 'Portal SENA. (s.f.). Glosario.',
      tipo: 'Página web',
      link:
        'https://www.sena.edu.co/es-co/formacion/Paginas/Estudie-en-el-SENA.aspx',
    },
    {
      tema: '1. Gestión de la formación profesional',
      referencia: 'Portal SENA. (s.f.). ¿Quiere estudiar en el SENA?',
      tipo: 'Página web',
      link: 'https://www.sena.edu.co/es-co/ciudadano/Paginas/glosario.aspx',
    },
    {
      tema: '1.3.	Aplicativo CompromISO SENA',
      referencia: 'CompromISO SENA. (2024). SIGA 2024.',
      tipo: 'Página web',
      link: 'https://compromiso.sena.edu.co/index.php?text=inicio&id=1',
    },
    {
      tema: '2.2 SOFIA Plus',
      referencia: 'SOFIA Plus. (2014). Ayudas y manuales.',
      tipo: 'Página web',
      link: 'https://portal.senaSOFIAPlus.edu.co/index.php/ayudas',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje colaborativo',
      significado:
        'conjunto de métodos que se aplican en grupos pequeños de entrenamiento y desarrollo de habilidades mixtas, donde cada miembro del grupo es responsable, tanto de su aprendizaje, como de los demás miembros del grupo.',
    },
    {
      termino: 'Aprendizaje en el SENA',
      significado:
        'indica que es un proceso mediante el cual el aprendiz comprende, asimila, incorpora y aplica conocimientos, habilidades, destrezas y actitudes que lo hacen competente para actuar técnica, metodológica, participativa y socialmente en el trabajo.',
    },
    {
      termino: 'Aprendizaje virtual',
      significado:
        'proceso de aprendizaje soportado sobre las Tecnologías de la Información y la Comunicación (TIC), requiriendo esfuerzos de autoaprendizaje y autoevaluación. El aprendizaje virtual no se limita a la adquisición de competencias en el uso de las TIC, abarca también el uso de diversos formatos y métodos digitales: programas informáticos, internet, aprendizaje en línea y otros medios electrónicos e interactivos.',
    },
    {
      termino: 'Autoaprendizaje',
      significado:
        'sinónimo de autoformación, autoinstrucción o autoestudio. Para algunos sicólogos, significa que el aprendiz se hace responsable de su proceso de aprendizaje, aprende por sí y para sí mismo y no para otro.',
    },
    {
      termino: 'Diseño curricular',
      significado:
        'actividad que se realiza para organizar los programas de formación, definiendo las competencias asociadas y los resultados de aprendizaje para cada competencia, con los cuales se dará respuesta a las demandas y necesidades de formación.',
    },
    {
      termino: 'Formación virtual',
      significado:
        'la formación virtual o <i>e-learning</i> es el proceso formativo de enseñanza-aprendizaje y evaluación realizado a través de internet y de tecnologías multimediales que se encuentran integradas en un Ambiente Virtual de Aprendizaje que facilita el trabajo colaborativo y la construcción de conocimiento, la comunicación entre aprendices e instructor y aprendices, por medio de herramientas de comunicación asíncrona y sincrónica, la flexibilidad de acceder desde donde quiera y cuando quiera.',
    },
    {
      termino: 'Instructor-tutor',
      significado:
        'sujeto que participa en el proceso de enseñanza-aprendizaje, quien asume el rol de facilitador, orientador y apoyo, quien retroalimenta y evalúa al aprendiz durante su proceso formativo, haciendo uso de distintas técnicas didácticas activas, bajo la estrategia de aprendizaje por proyectos, la cual le permite contribuir con su propio aprendizaje.',
    },
    {
      termino: 'LMS',
      significado:
        'sistemas de administración de aprendizaje, por sus siglas en inglés LMS, utilizados para gestionar, soportar y realizar seguimiento a los procesos educativos.',
    },
    {
      termino: 'Resultado de aprendizaje',
      significado:
        'enunciados que están asociados a las actividades de aprendizaje y evaluación, y que orientan al instructor-tutor y al aprendiz en la verificación de los procesos cognitivos, motores, valorativos, actitudinales y de apropiación de los conocimientos técnicos y tecnológicos requeridos en el aprendizaje.',
    },
    {
      termino: 'SENA',
      significado:
        'el Servicio Nacional de Aprendizaje, SENA, es la institución pública colombiana encargada de la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los colombianos, ofreciendo y ejecutando la formación profesional gratuita, para la incorporación y el desarrollo de las personas en actividades productivas, que contribuyan al desarrollo social, económico y tecnológico del país. El SENA es la principal institución del Sistema Nacional de Formación para el Trabajo.',
    },
    {
      termino: 'SOFIA Plus',
      significado:
        'la sigla significa Sistema Optimizado para la Formación y el Aprendizaje, el aplicativo SOFIA Plus, opera como la principal herramienta para facilitar la gestión de los nuevos procesos formativos en el SENA. La operación del sistema requiere la interacción de tres componentes importantes: el entendimiento y adopción de los nuevos procesos de gestión del aprendizaje, la prueba y uso del aplicativo diseñado para la gestión de estos nuevos procesos, y la migración de información útil del actual aplicativo de gestión académica de centros hacia el nuevo aplicativo que soportará todos los procesos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ángel, W. I. (2020). Guía de orientaciones para la formación en ambientes virtuales de aprendizaje -AVA-. Servicio Nacional de Aprendizaje SENA.',
      link: '',
    },
    {
      referencia:
        'Meza, J. (2012). Modelo pedagógico para proyectos de formación virtual.',
      link:
        'http://www.facico-uaemex.mx/diplomado/2.3%20BB%20MEZA%20JOHANA.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Wilmer Ismael Ángel Benavides',
          cargo: 'Líder equipo / Asesor formación virtual',
          centro: 'Dirección de Formación Profesional',
        },
        {
          nombre: 'Aura Andrea Sánchez Suárez ',
          cargo: 'E-Pedagoga',
          centro: 'Centro Agroempresarial y Minero - Regional Bolívar',
        },
        {
          nombre: 'Bibiana Lucía Camargo Romero ',
          cargo: 'E-Pedagoga',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diana Patricia Carmona Milian',
          cargo: 'E-Pedagoga',
          centro:
            'Centro de Gestión y Desarrollo Sostenible Surcolombiano - Regional Huila',
        },
        {
          nombre: 'Humberto Amaya Alvear',
          cargo: 'E-Pedagogo',
          centro: 'Centro Agroempresarial y Minero - Regional Bolívar',
        },
        {
          nombre: 'Laura Ivonne Rusinque Gamboa',
          cargo: 'E-Pedagoga',
          centro: 'Centro Agropecuario la Granja-Regional Tolima',
        },
        {
          nombre: 'Marisol Báez Solano	',
          cargo: 'E-Pedagoga',
          centro: 'Centro de Industria y la Construcción - Regional Tolima',
        },
        {
          nombre: 'María Cecilia Aroca Díaz	',
          cargo: 'Soporte de seguimiento académico',
          centro: 'Centro Agroempresarial y Minero - Regional Bolívar',
        },
        {
          nombre: 'Diego Alejandro Córdoba Mavesoy',
          cargo: 'Soporte de diseño y multimedia',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
