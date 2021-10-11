export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/inicio.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Investigación de la moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Introducción al tema sobre la comunicación de la moda.',
            hash: 't1-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sistemas de comunicación y vestuario.',
            hash: 't1-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'La semiología: la interpretación de símbolos, signos y señales en el mundo de la moda',
            hash: 't1-3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Lenguaje y simbología del color y el estampado',
            hash: 't1-4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Expresión cultural de la moda: investigación desde la cultura y la historia ',
            hash: 't1-5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo:
              'Lenguaje al vestir según las ocasiones e intención comunicacional',
            hash: 't1-6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'La moda en lo social: desde el estilo hasta el mal gusto',
            hash: 't1-7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo:
              'Psicología de la moda: sexualidad, ropa mágica, ropa malévola y ropa neurótica',
            hash: 't1-8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo:
              'Montaje de colecciones como recurso comunicativo en la interacción con el consumidor',
            hash: 't1-9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo:
              'Canales de comunicación de la moda: medios digitales, impresos, audiovisual, material pop',
            hash: 't1-10',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'ADN de la Marca',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Identidad de la marca: misión, visión, promesa de valor, valores corporativos, palabras claves',
            hash: 't2-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Imagen de la marca o branding: nombre y slogan de la marca, tipografía, fuente y paleta de color',
            hash: 't2-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Diferenciación y conceptualización de las marcas: casos exitosos de marcas y pirámide de la moda',
            hash: 't2-3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Canales de distribución',
            hash: 't2-4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Registro de marca: normativa y definiciones',
            hash: 't2-5',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
  referencias: [
    {
      referencia:
        '20th Century Studios España (2012, 28 de marzo). "Titanic 3d - jack y rose bailan en tercera clase ',
      link: 'https://youtu.be/pOSZrMOzq00',
    },
    {
      referencia:
        'Acerte no Look - Dicas de Moda e Beleza. (2016). Looks de 100 años de moda. ',
      link: 'https://www.youtube.com/watch?v=SzSfrKtZFOw',
    },
    {
      referencia:
        'Ananá. (2019, 05 de mayo). Como hacer una colección de moda – Anana. ',
      link: 'https://youtu.be/5WgxbULQFC8?t=6',
    },
    {
      referencia:
        'Brand Inteligente. (2018, 25 de septiembre). Caso Apple: Logo, identidad y gestión de marca | Branding Ejemplos. ',
      link: 'https://youtu.be/tf_GDM7lxvs',
    },
    {
      referencia:
        'Cámara de Comercio de Cúcuta. (s. f.). Registro de Marcas en Colombia. ',
      link:
        'http://www.cccucuta.org.co/eventos-9-10/especializacion-evaluacion-y-gerencia-de-proyectos.htm',
    },
    {
      referencia:
        'Chicas Guapas. (2016, 14 de agosto). Moda y Comunicación. Blog de Moda y Belleza. ',
      link:
        'https://chicasguapas000.wixsite.com/chicas-guapas/single-post/2016/08/14/Moda-y-Comunicaci%C3%B3n',
    },
    {
      referencia: 'CEIPA. (2011). Fundamentos de Mercadeo. ',
    },
    {
      referencia:
        'Comerciales en Like México (2019, 29 de octubre). COCA-COLA - Un Mundo Sin Residuos. ',
      link: 'https://youtu.be/A_tC4H9KPzg',
    },
    {
      referencia:
        'Comunicaciones Novaventa (2019, 12 de julio). Así es Novaventa | Vídeo Corporativo 2018. ',
      link: 'https://youtu.be/Ni020CV1uqM',
    },
    {
      referencia:
        'Díaz, P. (2014). Comunicación y gestión de marcas de moda. Gustavo Gili.',
    },
    {
      referencia:
        'DIESEL. (2017, 6 de septiembre). Go With The Flaw - DIESEL FW17. ',
      link: 'https://youtu.be/aYxG1ASrYKo',
    },
    {
      referencia:
        'Educaton Colombia. (2017, 11 de octubre). Paso a paso para el registro de una marca.',
      link: 'https://youtu.be/RKcaJB0mNqY',
    },
    {
      referencia:
        'Gef France. (2019, 27 de mayo). ¡Lleva tu look formal a otro nivel! | Nueva colección GEF. ',
      link: 'https://youtu.be/NIE2ryEVqaE',
    },
    {
      referencia: 'Gerval, O. (2008). Estudio y productos. Editorial Acanto. ',
    },
    {
      referencia:
        'Guerrero, J. A. (2009). Nuevas tecnologías aplicadas a la moda: diseño, producción, marketing y comunicación.   Parramón.',
    },
    {
      referencia:
        'Heller, E, 1948-2008. (2004). Psicología del color: cómo actúan los colores sobre los sentimientos y la razón.    Editorial Gustavo Gili.',
    },
    {
      referencia:
        'Inditex Careers. (2014, 16 de octubre). Inditex · Logística. ',
      link: 'https://youtu.be/vxwj4AYN_Ao',
    },
    {
      referencia: 'Insider. (2016, 17 de marzo). Looks de 100 años de moda.',
      link: 'https://youtu.be/SzSfrKtZFOwl',
    },
    {
      referencia:
        'López, E. (s.f.). La vestimenta: poderosa herramienta de comunicación personal. Emagister. Consultado el 17 de agosto de 2020.',
      link:
        'https://www.emagister.com/blog/la-vestimenta-poderosa-herramienta-de-comunicacion-personal/',
    },
    {
      referencia:
        'Mademoisellecora19. (2009, 30 de agosto). "Escena titanic español latino (jack cena en la primera clase). ',
      link: 'https://youtu.be/nG2QbGN_Wd0',
    },
    {
      referencia:
        'Martínez, G. (2018). Marketing y comunicación de moda. ESIC Editorial. ',
      link: 'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/',
    },
    {
      referencia:
        'Moschino (2014, 3 de marzo). "MOSCHINO" Full Show HD Milano Moda Donna Autumn Winter 2014 2015 by Fashion Channel. ',
      link: 'https://youtu.be/j6FDYGNOXtQ',
    },
    {
      referencia:
        'Moschino. (2019, 11 de diciembre). Moschino Pre-Fall 2020 fashion show!. ',
      link: 'https://youtu.be/zKPg-6yZWmw',
    },
    {
      referencia:
        'Posner, H. (2015). Marketing de moda (2a. ed.). Editorial Gustavo Gili. ',
      link: 'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual',
    },
    {
      referencia:
        'Reig, M. (s.f.). Moda, gestión del diseño de operaciones. Consultado el 25 de agosto de 2020. ',
      link:
        'https://repositorioinstitucional.ceu.es/bitstream/10637/4137/1/IndiceyResumen_TFM_ReigOrtega%2CMar%C3%ADa.pdf',
    },
    {
      referencia:
        'Stefano, Z. (2014, 20 de noviembre). Retail Marketing - Análisis Benetton UDEP.',
      link: 'https://youtu.be/CkBc6q5oebk',
    },
    {
      referencia:
        'Veneziani, C. (2011). La imagen de la moda. Editorial Nobuko. ',
      link: 'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/',
    },
  ],
  glosario: [
    {
      termino: 'Branding',
      terminoHtml: '<em>Branding</em>',
      significado:
        'Hace referencia al proceso de hacer y construir una marca (en inglés brand equity) mediante la administración estratégica del conjunto total de activos vinculados en forma directa o indirecta al nombre y/o símbolo o (logo) que identifican a la marca influyendo en el valor de la marca, tanto para el cliente como para la empresa propietaria de la marca.',
    },
    {
      termino: 'Canales de comunicación',
      significado:
        'Son los medios que se utilizan para dar a conocer la existencia de un producto o servicio, ejemplo: las redes sociales.',
    },
    {
      termino: 'Canales de distribución',
      significado:
        'Se denomina canal de distribución al camino seguido en el proceso de comercialización de un producto desde el fabricante hasta el usuario industrial o consumidor final. El punto final o de destino es el consumidor.',
    },
    {
      termino: 'Colecciones',
      significado:
        'Es un conjunto de prendas creadas por un diseñador con una coherencia interna en términos de estilo y destinada a una temporada del año en concreto.',
    },
    {
      termino: 'Comunicación de moda',
      significado:
        'Es la forma en la que llega un mensaje a un determinado consumidor usando como estrategia diversos canales de información.',
    },
    {
      termino: 'Concepto',
      significado:
        'Representación mental de un objeto, hecho, cualidad, situación y otros, opinión o juicio. Son las unidades más básicas de toda forma de conocimiento humano.',
    },
    {
      termino: 'Imagen de marca',
      significado:
        'Es el conjunto de elementos gráficos, visuales, emocionales, que demuestra y define lo que somos.',
    },
    {
      termino: 'Interpretación',
      significado:
        'Se denomina interprete a la persona que realiza la interpretación, su función consiste en transmitir el mensaje del discurso original teniendo en cuenta diversos aspectos, como el registro utilizado, la información implícita en dicho mensaje y las emociones.',
    },
    {
      termino: 'Logística',
      significado:
        'Es el «conjunto de medios y métodos necesarios para llevar a cabo la organización de una empresa, o de un servicio, especialmente de distribución».',
    },
    {
      termino: 'Marca',
      significado:
        'Es uno o el conjunto de signos distintivos de un producto o servicio en el mercado. Señal que permite identificar o distinguir algo o para dar alguna información sobre ello.',
    },
    {
      termino: 'Medios',
      significado:
        'Son canales e instrumentos para informar y comunicar a las sociedades actuales acerca de hechos o acontecimientos que suceden.',
    },
    {
      termino: 'Normativa',
      significado:
        'Es la norma o conjunto de normas que guían, dirigen y ajustan el comportamiento de un individuo, organización, materia y/o actividad.',
    },
    {
      termino: 'Pretat a porter',
      significado:
        'Es una expresión francesa que significa textualmente listo para llevar. Se refiere a las prendas de moda producidas en serie con patrones que se repiten en función de la demanda; es por tanto la moda que se ve en la calle a diario.',
    },
    {
      termino: 'Protección de marca',
      significado:
        'Es la norma o conjunto de normas que guían, dirigen y ajustan el comportamiento de un individuo, organización, materia y/o actividad.',
    },
    {
      termino: 'Psicología de la moda',
      significado:
        'Es el estudio y el tratamiento de como el color, la imagen, el estilo y la belleza afectan el comportamiento humano, mientras aborda normas culturales y sensibilidades culturales.',
    },
    {
      termino: 'Registro de Marca',
      significado:
        'Una marca es todo signo visible que distingue productos o servicios de otros de su misma especie o clase en el mercado. Su uso exclusivo se obtiene mediante su registro.',
    },
    {
      termino: 'Semiología',
      significado: 'Estudio de la interpretación de los signos.',
    },
    {
      termino: 'Señales',
      significado:
        'Una señal es un signo, un gesto u otro tipo de informe o aviso de algo; la señal sustituye por lo tanto a la palabra escrita o al lenguaje. Ellas obedecen a convenciones por lo que son fácilmente interpretadas.',
    },
    {
      termino: 'Signos',
      significado:
        'Cualquier estimulo que se puede captar por los sentidos y que se refiere a una realidad para que podamos considerar que hay un signo ha de haber también alguien que lo interprete.',
    },
  ],
  complementario: [
    // {
    //   texto:
    //     'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
    //   tipo: 'Video',
    //   link: 'https://www.google.com/',
    // },
    // {
    //   texto:
    //     'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
    //   tipo: 'Página web',
    //   descarga: '/downloads/prueba.pdf',
    // },
    // {
    //   texto:
    //     'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
    //   tipo: 'Artículo científico',
    //   link: 'https://www.google.com/',
    // },
    // {
    //   texto: 'Economía de Rosquilla. (s.f.).',
    //   tipo: 'Página web',
    //   descarga: '/downloads/prueba.pdf',
    // },
    // {
    //   texto: '2 minutos para entender el desarrollo sostenible – Spanish',
    //   tipo: 'Video',
    //   link: 'https://www.google.com/',
    // },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
