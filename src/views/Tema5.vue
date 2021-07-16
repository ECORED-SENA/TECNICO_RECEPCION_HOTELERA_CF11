<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Cuenta huésped

    p.mb-5 Se denomina cuenta huésped al resumen de las operaciones que se realizan durante el día, detallando número de habitación o folio, monto del movimiento y su origen, es decir en dónde se realizó y si fue débito o crédito. 

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_5/img_1.png', alt='Un huésped')

    p.mb-5 En la recepción se da inicio al ciclo de la cuenta huésped desde el registro y se va alimentando con los movimientos que se registran en el sistema PMS, ya sea desde allí mismo o desde otras dependencias o ambientes.

    separador

    .titulo-segundo
      #t_5_1.h2 5.1  Naturaleza de los cargos

    p.mb-5 La afectación de la cuenta huésped se da por los débitos y créditos que origina el movimiento diario del hotel, como veremos a continuación:

    .row.justify-content-center.mb-5
      .col-lg-6.d-flex
        .tarjeta-avatar-b.mb-5
          img.img-b(src='@/assets/curso/tema_5/img_2.svg' alt='AvatarTop')
          .tarjeta.jumbo_1
            .p-4
              h4 Débitos
              p Registra los cargos a cuenta huésped que se realizan durante el día, es decir, la venta de alojamiento, alimentos, bebidas, teléfonos y lavandería entre otros.

      .col-lg-6.d-flex
        .tarjeta-avatar-b.mb-5
          img.img-b(src='@/assets/curso/tema_5/img_3.svg' alt='AvatarTop')
          .tarjeta.jumbo_1
            .p-4
              h4  Créditos
              p Relaciona los descargos a la cuenta huésped como efecto de la cancelación de facturas, considerando básicamente efectivo, tarjetas de crédito o débito, divisas y particulares. Las columnas de descuento y depósito aplican como crédito al aplicarles dichas situaciones. (Scheel, 1992)

    p Cuando el hotel cuenta con un sistema de administración, PMS, esté hace el cálculo automático de los saldos de la cuenta huésped y genera un reporte de auditoría que detalla el balance.

    separador

    .titulo-segundo
      #t_5_2.h2 5.2 Tipos de cargos

    p Los tipos de cargos son: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Abonos")
        .col-lg-2
          figure
            img.img-a(src='@/assets/curso/tema_5/img_4.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Un abono hace referencia al pago que registra un huésped para disminuir el saldo de la cuenta a su cargo, es decir que, si el monto adeudado es superior al pagado, se genera este tipo de movimiento.      
        

      .row.justify-content-center(titulo="Anticipos")
        .col-lg-2
          figure
            img.img-a(src='@/assets/curso/tema_5/img_5.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p El anticipo es una cantidad de dinero que el huésped entrega al hotel antes de iniciar su estancia y que luego se aplicará a la cuenta del huésped.
      .row.justify-content-center(titulo="Depósitos")
        .col-lg-2
          figure
            img.img-a(src='@/assets/curso/tema_5/img_6.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Estos corresponden a dineros dejados por el huésped en prenda por el préstamo de un servicio. Este dinero posteriormente se devuelve al huésped, por tanto, no se registra en el movimiento de la cuenta del huésped. Solo se entrega un comprobante de recibo de estos y los valores se depositan en una caja segura.
      .row.justify-content-center(titulo="Paid Out")
        .col-lg-10.mb-3
          p Es el desembolso realizado por caja de recepción para cubrir un servicio externo que el huésped autoriza le sea cargado a su cuenta y por lo tanto afecta el balance del cajero en turno. Generalmente los hoteles aplican un cargo adicional a título de comisión por este servicio, sobre el cual se cobra IVA por ser un ingreso para el hotel, si se da este caso, podemos verlo así:

        .row.justify-content-center
          .col-lg-9
            .tabla-a.color-acento-contenido
              table
                
                thead
                  tr
                    th(colspan=2) 
                      p
                        strong Registro de Paid Out
                tbody    
                  tr.color-tr_1
                    td.text-center Monto de la transacción autorizada por el huésped
                    td.text-center $ 20.000
                  tr.color-tr_1
                    td.text-center Comisión del 10% por el servicio 
                    td.text-center $ 2.000
                  tr.color-tr_1
                    td.text-center IVA sobre la comisión, que es lo que cobra el hotel 
                    td.text-center $ 380
                  tr.color-tr_1
                    td.text-center Total a cargo del huésped
                    td.text-center $ 22.380
      .row.justify-content-center(titulo="Avance en efectivo")
        .col-lg-2
          figure
            img.img-a(src='@/assets/curso/tema_5/img_7.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Es un préstamo que se hace al huésped con cargo a su cuenta y obedece a necesidades externas a los servicios prestados por el hotel. En muchas ocasiones este servicio se presta contra un pago inmediato, por ello, si se cuenta con PMS debe hacerse en una ventana diferente a la que soporta los demás cargos, con el fin de cerrar esa venta al momento. 
      .row.justify-content-center(titulo="Devoluciones")
        .col-lg-2
          figure
            img.img-a(src='@/assets/curso/tema_5/img_8.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Se presentan cuando es necesario retirar dinero de la caja de recepción para retornar al huésped un dinero sobrante, ya sea porque su anticipo sigue superando el saldo a pagar o porque hace el pago en moneda extranjera y no es posible tener un valor exacto teniendo en cuenta la tasa de cambio. 
      
    h5.text-center.mb-5 Veamos algunos casos sobre devoluciones:

    .row.justify-content-center
      .col-lg-10
        figure
          img.img-a(src='@/assets/curso/tema_5/img_9.svg', alt='devoluciones')
          figcaption Nota. En el ingreso se reporta el total de moneda extranjera

    separador
      
    .titulo-segundo
      #t_5_3.h2 5.3 Documentos de soporte

    p Como resultado del plan de cuentas, los movimientos en la cuenta huésped, generan los siguientes documentos mencionados por Peña (2010):   

    ol.lista-ol--cuadro.lista
      li 
        .lista-ol--cuadro__vineta
          span 1
        h5 Soportes de débito

    p Los movimientos de débito, como lo menciona Peña (2010) es decir los que aumentan la cuenta del cliente, deben tener como soporte, comandas o soportes de consumo debidamente firmadas por:

    ul.lista-ul--color.mb-5
      li 
        i.lista-ul__vineta
        | Cargos por los consumos en los diferentes ambientes del hotel (restaurante, bar, room service, bar habitación, banquetes y eventos)
      li 
        i.lista-ul__vineta 
        | Cargos en los servicios de comunicaciones (Internet, teléfono, fax, etc.)
      li 
        i.lista-ul__vineta 
        | Cargos por los servicios de banquetes.
      li 
        i.lista-ul__vineta 
        | Cargos por anticipos a huéspedes (en caso de que esté contemplado dentro de las políticas del hotel)
      li 
        i.lista-ul__vineta 
        | Cargos por las ventas de tiendas por departamentos.
      li 
        i.lista-ul__vineta 
        | Cargos por los servicios de peluquería.
      li 
        i.lista-ul__vineta 
        | Cargos por los servicios de taxis.
      li 
        i.lista-ul__vineta 
        | Transferencias de naturaleza débito (cargos asumidos de otras cuentas)
      li 
        i.lista-ul__vineta 
        | Cargos por consumos en negocios con los cuales el hotel mantenga convenios comerciales.

    p Los cargos por servicios de alojamiento, que se realizan en la auditoría nocturna se soportan en el contrato de alojamiento.

    .row.mb-5
      .col-lg-4
        figure
          img.img-a(src='@/assets/curso/tema_5/img_10.png', alt='')
      .col-lg-4
        figure
          img.img-a(src='@/assets/curso/tema_5/img_11.png', alt='')
      .col-lg-4
        figure
          img.img-a(src='@/assets/curso/tema_5/img_12.png', alt='')
      
    ol.lista-ol--cuadro.lista
      li 
        .lista-ol--cuadro__vineta
          span 2
        h5 Soportes de crédito

    p.mb-5 Los movimientos créditos o abonos a la cuenta huésped se realizan por los siguientes conceptos:

    .row
      .col-lg-6
        figure
          img(src='@/assets/curso/tema_5/img_13.png', alt='')
      .col-lg-6
        ul.lista-ul--color.mb-5
          li 
            i.lista-ul__vineta
            | Aplicación de depósitos de reservas.
          li 
            i.lista-ul__vineta
            | Abonos parciales en efectivo.
          li 
            i.lista-ul__vineta
            | Descuentos y ajustes.
          li 
            i.lista-ul__vineta
            | Transferencias de naturaleza crédito.
          li 
            i.lista-ul__vineta
            | Reversión por cargos errados.
          li 
            i.lista-ul__vineta
            | Cancelación de la cuenta (efectivo, moneda extranjera, tarjetas de crédito, cartera con empresas, agencias de viajes y particulares)




    


          
          

    
    

</template>

<script>
export default {
  name: 'Tema5',
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
