export default {
  global: {
    componenteFormativo: 'Procesos de facturación',
    descripcionCurso:
      'Los procesos de facturación son el paso final en el ciclo de atención al huésped, es allí donde el hotel recibe los ingresos (pagos) por su actividad, esta función requiere un alto nivel ético y de responsabilidad, porque implica el manejo de dinero, de su correcto desarrollo depende la percepción del huésped, un mal proceso ocasionará molestias y quejas en los clientes.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normatividad tributaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Impuesto al Valor Agregado (IVA)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Impuesto al consumo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Impuesto a la renta',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Posteo de servicios hoteleros',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Políticas de manejo de caja',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: ' Fondo de Caja',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Saldos elevados',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Arqueos de caja',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Procedimiento del arqueo de caja',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Pagos realizados en la caja',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Consumos internos',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Operaciones matemáticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Cuenta huésped',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Naturaleza de los cargos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Tipos de cargos',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Documentos de soporte',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Facturación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Normatividad',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Folios maestros',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'División de folios',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
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
        titulo: 'referencias bibliográficas',
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
        'Actualícese. (2018). Beneficio tributario para hoteles en municipios con menos de 200.000 habitantes no necesita decreto.  Actualícese.',
      link:
        'https://actualicese.com/beneficio-tributario-para-hoteles-en-municipios-con-menos-de-200-000-habitantes-no-necesita-decreto/',
    },
    {
      referencia:
        'Gerencie.com. (2020). Requisitos de la factura de venta. Gerencie.com',
      link: 'https://www.gerencie.com/requisitos-de-la-factura.html',
    },
    {
      referencia:
        'DECRETO 2755 DE 2003. [Ministro del Interior y de Justicia de la República de Colombia]. Por medio del cual de reglamenta el artículo 207-2 del Estatuto Tributario. Artículo 10. Septiembre 30 de 2003. (Colombia)',
    },
    {
      referencia: 'DIAN. (s.f.). Obligados a facturar. Impuestos.',
      link:
        'https://www.dian.gov.co/impuestos/sociedades/Paginas/obligadosfacturar.aspx',
    },
    {
      referencia:
        'Martín, R., Campa, F., Parte, L., y Such, M. (2015). El sistema uniforme de cuentas para los establecimientos hoteleros. Asociación Española de Contabilidad y Administración de Empresas.',
      link:
        'https://www.researchgate.net/publication/281377429_El_sistema_uniforme_de_cuentas_para_los_establecimientos_hoteleros',
    },
    {
      referencia:
        'Ministerio de Hacienda. (2016). Tabla IVA Canasta familiar. DIAN. (2016). Tabla IVA Canasta Familiar.',
      link:
        'https://www.dian.gov.co/impuestos/Reforma%20Tributaria%20Estructural/Listado%20completo%20IVA%20Canasta%20Familiar.pdf',
    },
    {
      referencia:
        'Peña, A. (2010). Contabilidad hotelera, de restaurantes y de gestión. Cartagena: Universidad Libre.',
      link:
        'http://www.unilibre.edu.co/cartagena/pdf/investigacion/libros/ceac/CONTABILIDAD_HOTELERA_DE_RESTAURANTES_Y_DE_GESTION.pdf',
    },
    {
      referencia:
        'Scheel, A. (1992). Control de alojamiento y contabilidad de huéspedes. Bogotá: Edinter.',
    },
  ],
  glosario: [
    {
      termino: 'Check out',
      significado:
        'Es el proceso por el cual una persona después de estar hospedada en un hotel, al momento de retirarse debe dirigirse a la recepción para cancelar los pendientes.',
    },
    {
      termino: 'FOB',
      significado:
        'Es el precio de venta de los bienes puestos en un medio de transporte marítimo, sin incluir valor de seguro y fletes.',
    },
    {
      termino: 'Gravamen',
      significado:
        'Impuesto o carga que se aplica sobre un bien, riqueza o propiedad que pertenece a una persona y para indicar que se encuentra comprometido.',
    },
    {
      termino: 'Renta',
      significado:
        'Utilidad o el beneficio que rinde algo o lo que de ello se cobra.',
    },
    {
      termino: 'Tela genero',
      significado:
        'Tela conocida como alegro o microfibra, es un textil suave y ancho.',
    },
  ],
  complementario: [
    {
      texto:
        'Martín, R., Campa, F., Parte, L., y Such, M. (2015). El sistema uniforme de cuentas para los establecimientos hoteleros. Asociación Española de Contabilidad y Administración de Empresas.',
      tipo: 'PDF',
      descarga:
        '/downloads/Anexo6_Sistema_uniforme_de_cuentas_para_los_establecimientos_hoteleros.pdf',
    },
    {
      texto:
        'Ángel Simón, M. (2016). Recepción: Front Office. Fundación Proturismo. ',
      tipo: 'PDF',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Ministerio de Hacienda. (2016). Tabla IVA Canasta familiar. DIAN. (2016). Tabla IVA Canasta Familiar. ',
      tipo: 'PDF',
      descarga: '/downloads/Listado_completo_IVA _Canasta_Familiar.pdf',
    },
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
      {
        nombre: 'Harbey Enrique Castelblanco',
        cargo: 'Experto técnico',
        centro: 'Centro Nacional Colombo Alemán',
      },
      {
        nombre: 'Leidy Carolina Arias Aguirre',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de diseño y metrología',
      },
      {
        nombre: 'Paola Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Vilma Perilla Méndez',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlved',
        cargo: 'Corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisora de estilo',
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
        nombre: ['Oscar Ivan Uribe Ortiz'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ricardo Alonso González Vargas',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },

      {
        nombre: 'Magdi Khalifah Gamboa',
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
