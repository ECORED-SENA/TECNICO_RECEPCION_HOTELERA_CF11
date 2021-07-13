<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Facturación

    .row
      .col-lg-4
        figure
          img(src='@/assets/curso/tema_6/img_1.png', alt='')
      .col-lg-8
        p La facturación en los hoteles es el procedimiento en el que se toma la carpeta cuenta huésped, se realizan los cargos de último minuto, se verifican los cargos anteriores, se expide una precuenta y luego de la revisión y aceptación por parte del cliente se recibe el pago y se expide la factura. Este proceso ha evolucionado enormemente con la utilización de sistemas PMS y la reciente implantación del sistema de facturación electrónica en nuestro país.

        p La expedición de facturas en Colombia está regulada por algunas normas.

    separador
   

    .titulo-segundo
      #t_6_1.h2 6.1 Normatividad	

    p Toda persona o empresa que esté obligada a facturar, o que sin estarlo quiera expedir una factura de venta, requiere cumplir con los requisitos que señala la ley. 

    ol.lista-ol--cuadro.lista
      li 
        .lista-ol--cuadro__vineta
          span 1
        h5 Obligación de facturar

    p.mb-5 De acuerdo con el  Art. 615 Estatuto Tributario se establece la obligación de expedir factura para efectos tributarios a todas las personas o entidades que tengan la calidad de comerciantes, ejerzan profesiones liberales o presten servicios inherentes a éstas o enajenen bienes producto de la actividad agrícola o ganadera, deberán expedir factura o documento equivalente, y conservar copia de la misma por cada una de las operaciones que realicen, independientemente de su calidad de contribuyentes o no de los impuestos administrados por la Dirección de Impuestos y Aduanas Nacionales, que en su documento obligados a facturar mencionan: 

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.mb-3
          .col-lg-6.d-flex.mb-3
            .jumbo_1.p-4
              .row
                .col-lg-3
                  figure
                    img.img-a(src='@/assets/curso/tema_6/img_2.png', alt='')
                .col-lg-9
                  p Personas naturales o jurídicas responsables del Impuesto sobre las ventas IVA (Responsabilidad 48)

          .col-lg-6.d-flex
            .jumbo_1.p-4
              .row
                .col-lg-3
                  figure
                    img.img-a(src='@/assets/curso/tema_6/img_2.png', alt='')
                .col-lg-9
                  p Personas naturales que superen los montos establecidos y personas jurídicas obligadas a facturar por bienes o servicios excluidos de IVA (Responsabilidad 16)

        .row.mb-3
          .col-lg-6.d-flex.mb-3
            .col_ava.p-4
              .row
                .col-lg-3
                  figure
                    img.img-a(src='@/assets/curso/tema_6/img_2.png', alt='')
                .col-lg-9
                  p Personas naturales o jurídicas responsables del impuesto al consumo (Decreto 803 de 2013 artículo 6 literal D, Responsabilidades 33, 34)

          .col-lg-6.d-flex
            .col_ava.p-4
              .row
                .col-lg-3
                  figure
                    img.img-a(src='@/assets/curso/tema_6/img_2.png', alt='')
                .col-lg-9
                  p Personas naturales o jurídicas voluntarios u obligados por modalidad electrónica (Responsabilidad 52)
    
        .row
          .col-lg-6.d-flex.mb-3
            .jumbo_2.p-4
              .row
                .col-lg-3
                  figure
                    img.img-a(src='@/assets/curso/tema_6/img_2.png', alt='')
                .col-lg-9
                  p Personas naturales, con las actividades económicas 1811, 1812, 1820 (Litógrafos, tipógrafos)

          .col-lg-6.d-flex
            .jumbo_2.p-4
              .row
                .col-lg-3
                  figure
                    img.img-a(src='@/assets/curso/tema_6/img_2.png', alt='')
                .col-lg-9
                  p Contribuyentes que optaron por el Régimen Simple de Tributación – SIMPLE.


    p Las personas naturales obligadas a facturar son aquellas que:  

    .jumbo_3.p-4.mb-5
      .row
        .col-lg-8.mb-3
          ul.lista-ul--color
            li 
              i.far.fa-check-circle
              | Cuenta con más de un establecimiento de comercio.

            li 
              i.far.fa-check-circle
              | Desarrollen actividades bajo franquicia, concesión, regalía, autorización o cualquier otro sistema que implique la explotación de intangibles.

            li 
              i.far.fa-check-circle
              | Sean usuarios aduaneros

            li 
              i.far.fa-check-circle
              | Que el monto de sus consignaciones bancarias, depósitos o inversiones financieras durante el año anterior o durante el respectivo año, provenientes de actividades gravadas con el impuesto sobre las ventas IVA, no supere la suma de 3.500 UVT.
        .col-lg-4
          figure
            img.img-a(src='@/assets/curso/tema_6/img_3.png', alt='')

    p Requisitos Importantes: 

    ul.lista-ul--color.mb-5
      li 
        i.lista-ul__vineta
        | Clientes del servicio: tener cuenta de usuario registrada en los servicios en línea de la entidad.
      li 
        i.lista-ul__vineta
        | Tener firma electrónica vigente.
      li 
        i.lista-ul__vineta
        | Conservar actualizado el Registro Único Tributario (razón social, dirección, responsabilidades, representación legal, establecimientos de comercio y demás pertinentes)

    ol.lista-ol--cuadro.lista
      li 
        .lista-ol--cuadro__vineta
          span 2
        h5 Requisitos para facturar

    p.mb-5 El Art. 617. Establece los requisitos de la factura de venta para efectos tributarios, la expedición de factura a que se refiere el artículo 615 consiste en entregar el original de esta, con el lleno de los siguientes requisitos:

    .row.justify-content-center.mb-5
      .col-lg-10
        #MapaGroup01
          .row.mb-5
            .col-lg-4
              button.ClasePripiaBtn.collapsed(data-bs-toggle='collapse' data-bs-target='#collapse01, #collapse01s' aria-expanded='true' aria-controls='#collapse01, #collapse01s')
                img.img-a(src='@/assets/curso/tema_6/img_9.svg', alt='')
              img#collapse01s.img-a.collapse.show(src='@/assets/curso/tema_1/img_16.svg', alt='')(data-bs-parent='#MapaGroup01')
              
            .col-lg-4
              button.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse02, #collapse02s' aria-expanded='false' aria-controls='#collapse02, #collapse02s')
                img.img-a(src='@/assets/curso/tema_6/img_10.svg', alt='')
              img#collapse02s.img-a.collapse(src='@/assets/curso/tema_1/img_16.svg', alt='')(data-bs-parent='#MapaGroup01')
              
            .col-lg-4
              button.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse03, #collapse03s' aria-expanded='false' aria-controls='#collapse03, #collapse03s')
                img.img-a(src='@/assets/curso/tema_6/img_11.svg', alt='')
              img#collapse03s.img-a.collapse(src='@/assets/curso/tema_1/img_16.svg', alt='')(data-bs-parent='#MapaGroup01')

          #collapse01.text-center.collapse.show(data-bs-parent='#MapaGroup01')
            p Está denominada expresamente como factura de venta.
          #collapse02.text-center.collapse(data-bs-parent='#MapaGroup01')
            p Apellidos y nombre o razón y NIT del vendedor o de quien presta el servicio.

          #collapse03.text-center.collapse(data-bs-parent='#MapaGroup01')
            p Apellidos y nombre o razón social y NIT del adquirente de los bienes o servicios, junto con la discriminación del IVA pagado.

        #MapaGroup02

          .row.mb-5              
            .col-lg-4
              button.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse04, #collapse04s' aria-expanded='false' aria-controls='#collapse04, #collapse04s')
                img.img-a(src='@/assets/curso/tema_6/img_12.svg', alt='')
              img#collapse04s.img-a.collapse(src='@/assets/curso/tema_1/img_16.svg', alt='')(data-bs-parent='#MapaGroup02')

            .col-lg-4
              button.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse05, #collapse05s' aria-expanded='false' aria-controls='#collapse05, #collapse05s')
                img.img-a(src='@/assets/curso/tema_6/img_13.svg', alt='')
              img#collapse05s.img-a.collapse(src='@/assets/curso/tema_1/img_16.svg', alt='')(data-bs-parent='#MapaGroup02')

            .col-lg-4
              button.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse06, #collapse06s' aria-expanded='false' aria-controls='#collapse06, #collapse06s')
                img.img-a(src='@/assets/curso/tema_6/img_14.svg', alt='')
              img#collapse06s.img-a.collapse(src='@/assets/curso/tema_1/img_16.svg', alt='')(data-bs-parent='#MapaGroup02')

          #collapse04.text-center.collapse(data-bs-parent='#MapaGroup02')
            p Llevar un número que corresponda a un sistema de numeración consecutiva de facturas de venta.

          #collapse05.text-center.collapse(data-bs-parent='#MapaGroup02')
            p Fecha de expedición.

          #collapse06.text-center.collapse(data-bs-parent='#MapaGroup02')
            p Descripción específica o genérica de los artículos vendidos o servicios prestados.

        #MapaGroup03
          .row.mb-5
            .col-lg-4
              button.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse07, #collapse07s' aria-expanded='false' aria-controls='#collapse07, #collapse07s')
                img.img-a(src='@/assets/curso/tema_6/img_15.svg', alt='')
              img#collapse07s.img-a.collapse(src='@/assets/curso/tema_1/img_16.svg', alt='')(data-bs-parent='#MapaGroup03')

            .col-lg-4
              button.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse08, #collapse08s' aria-expanded='false' aria-controls='#collapse08, #collapse08s')
                img.img-a(src='@/assets/curso/tema_6/img_16.svg', alt='')
              img#collapse08s.img-a.collapse(src='@/assets/curso/tema_1/img_16.svg', alt='')(data-bs-parent='#MapaGroup03')

            .col-lg-4
              button.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse09, #collapse09s' aria-expanded='false' aria-controls='#collapse09, #collapse09s')
                img.img-a(src='@/assets/curso/tema_6/img_17.svg', alt='')
              img#collapse09s.img-a.collapse(src='@/assets/curso/tema_1/img_16.svg', alt='')(data-bs-parent='#MapaGroup03')
            
          #collapse07.text-center.collapse(data-bs-parent='#MapaGroup03')
            p Valor total de la operación.

          #collapse08.text-center.collapse(data-bs-parent='#MapaGroup03')
            p El nombre o razón social y el NIT del impresor de la factura.

          #collapse09.text-center.collapse(data-bs-parent='#MapaGroup03')
            p Indicar la calidad de retenedor del impuesto sobre las ventas.

    p.mb-5 Al momento de la expedición de la factura los requisitos de los literales en negrita deberán estar previamente impresos a través de medios litográficos, tipográficos o de técnicas industriales de carácter similar. Cuando el contribuyente utilice un sistema de facturación por computador o máquinas registradoras, con la impresión efectuada por tales medios se entienden cumplidos los requisitos de impresión previa. El sistema de facturación deberá numerar en forma consecutiva las facturas y se deberán proveer los medios necesarios para su verificación y auditoría.

    .jumbo_4.p-4.mb-5
      .row
        .col-lg-4.mb-3
          figure
            img.img-a(src='@/assets/curso/tema_6/img_4.png', alt='')
        .col-lg-8
          h5 Parágrafo
          p En el caso de las empresas que venden tiquetes de transporte no será obligatorio entregar el original de la factura. Al efecto, será suficiente entregar copia de esta.
          h5 Parágrafo: 
          p Para el caso de facturación por máquinas registradoras será admisible la utilización de numeración diaria o periódica, siempre y cuando corresponda a un sistema consecutivo que permita individualizar y distinguir de manera inequívoca cada operación facturada, ya sea mediante prefijos numéricos, alfabéticos o alfanuméricos o mecanismos similares.

    .row.justify-content-center.mb-5
      .col-lg-11
        p.text-center Adicionalmente a estos requisitos, la factura debe mostrar en forma preimpresa o impresa por computador la resolución de facturación, que es un requisito exigido por la DIAN a manera de control.

    ol.lista-ol--cuadro.lista
      li 
        .lista-ol--cuadro__vineta
          span 3 
        h5 Facturación electrónica

    .row
      .col-lg-8.mb-3
        p La implementación de esta modalidad de facturación es reciente en nuestro país y la administración de impuestos y aduanas nacionales (DIAN) tiene dentro de su plan, dejarlo como único sistema válido de facturación. Estas son las Leyes, Decretos y resoluciones que la reglamentan.

        p.mb-4 El artículo 26 de la Ley 962 de 2005 (Racionalización de trámites) define que la factura electrónica podrá expedirse, aceptarse, archivarse usando cualquier tipo de tecnología disponible, garantizando la autenticidad e integridad desde su expedición y durante todo el tiempo de conservación, aplicando el principio de neutralidad tecnológica. El Estatuto Tributario maneja los siguientes artículos sobre facturación electrónica:

        .row.justify-content-center
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('/downloads/facturaelectronica.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[strong Anexo.] La factura electrónica 

      .col-lg-4.d-flex
        figure
          img(src='@/assets/curso/tema_6/img_5.png', alt='')

    separador

    .titulo-segundo
      #t_6_2.h2 6.2 Folios maestros

    p.mb-5 Los folios maestros son cuentas que se utilizan para registrar los ingresos en los que no se hace uso de las habitaciones. En los sistemas informáticos o en el registro contable del hotel cuando una persona registra el ingreso el sistema abre un folio (no una factura), en este folio se harán los cargos de los consumos durante la estadía. Pero hay casos donde se necesita registrar consumos o ventas sin hacer uso de estos folios de habitación. 

    

    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-5
          p Un caso clásico son las cuentas de banquetes, en estos casos cuando se hace uso de los salones de banquetes, no se usan habitaciones de alojamiento. Pero hay que registrar los consumos de alimentos y bebidas, servicios audiovisuales, etc. Es allí donde se abre una cuenta o folio maestro. Tiene las mismas propiedades y comportamiento de la cuenta huésped, excepto que tiene tarifa de alojamiento (0) cero y estadísticamente no afectan la ocupación del hotel.

        p.text-center
          strong También tienen otros usos como:

        figure
          img.img-a(src='@/assets/curso/tema_6/img_6.png', alt='')

        .row.justify-content-center
          .col-lg-11
            p.text-center Cuando por algún motivo una cuenta huésped queda sin pagarse, pero se necesita liberar la habitación, con previa autorización del jefe de recepción se puede abrir una cuenta maestra y transferir los cargos.

            figure
              img.img-a(src='@/assets/curso/tema_6/img_7.png', alt='')

        .row.justify-content-center
          .col-lg-11
            p.text-center Para registrar las ventas de terceros y misceláneos, aplica para el caso de exposiciones de arte, vitrinas y concesiones. 

        figure
          img.img-a(src='@/assets/curso/tema_6/img_6.png', alt='')

        .row.justify-content-center
          .col-lg-11
            p.text-center Para cargar consumos a empleados.
            figure
              img.img-a(src='@/assets/curso/tema_6/img_7.png', alt='')

        .row.justify-content-center
          .col-lg-11
            p.text-center Para transferir cuentas por cobrar de compañías con fecha de corte de facturación vencida. 

        figure
          img.img-a(src='@/assets/curso/tema_6/img_6.png', alt='')

        .row.justify-content-center
          .col-lg-11
            p.text-center Cuentas de grupos
            figure
              img.img-a(src='@/assets/curso/tema_6/img_7.png', alt='')

    separador

    .titulo-segundo
      #t_6_3.h2 6.3 División de folios   

    .row
      .col-lg-5.d-flexf
        figure
          img(src='@/assets/curso/tema_6/img_8.png', alt='')
      .col-lg-7
        p La división es un proceso que se va a encontrar en el día a día del trabajo de caja. Consiste en pasar cargos de un folio a otro dentro la misma cuenta huésped. Como mencionamos al momento del registro el sistema abre un folio para que se efectúen los cargos del cliente. Pero muchas veces por control de costos o por organización los clientes pedirán que los cargos de alojamiento se facturen aparte de los otros gastos. Esto puede suceder porque la habitación la cubre la empresa y los gastos extras el huésped o por otras razones.

        p En los sistemas informáticos PMS, esta tarea es muy sencilla, ya que solo se debe marcar el cargo y pasarlo a otra ventana (así se conocen los subfolios dentro de la misma cuenta) Si no se utiliza sistema PMS, la tarea será un poco más engorrosa ya que debe hacerse manualmente, y seguro bajo presión de tiempo al momento de la salida.

        

        





</template>

<script>
export default {
  name: 'Tema6',
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

<style lang="sass" scoped></style>
