<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Políticas de manejo de caja

    p.mb-5 Las políticas son los preceptos que establecen normas, procedimientos y comportamientos que deben tener los empleados. En el caso del manejo de caja es muy seguro que cada empresa hotelera tenga sus propias políticas, es recomendable que los empleados de recepción y los directamente responsables de la caja las tengan totalmente claras.

    .row.mt-5
      .col-lg-12
        .col_ava.p-5.alt-tarj.alt-jum
    
    .row.top-jum
      .col-lg-4.mb-5
        figure
          img.img-a(src='@/assets/curso/tema_3/img_1.png', alt='Texto que describa la imagen')
      .col-lg-8
        h4 Recuerda que: 

        p En los establecimientos de alojamiento se manejan grandes cifras que pueden ser cuantiosas, por lo que el empleado debe tener un alto grado de responsabilidad. 

        p A continuación, mencionamos algunas de las políticas más comunes del manejo de caja.

    Separador

    .titulo-segundo
      #t_3_1.h2 3.1 Fondo de Caja

    p.mb-5 A continuación conocerás que es un fondo de caja: 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/oxzRCxlLcUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_3/img_2.png', alt='Normatividad tributaria')

    .row.justify-content-center.align-items-stretch
      .col-lg-5
        .titulo-segundo
          #t_3_2.h2 3.2 Saldos elevados

        p Es una política administrativa, que previene posibles fraudes por pagos. Es responsabilidad del auditor nocturno revisar a diario los huéspedes y sus respectivas garantías, con el fin de determinar los casos en los cuales el saldo excede el valor límite autorizado por la política del hotel.
      .col-lg-1.d-none.d-lg-block.verticalLine
        
      
      .col-lg-5
        .titulo-segundo
          #t_3_3.h2 3.3 Arqueos de caja

        p Este es un método de control que consiste en un recuento de todas las transacciones en un periodo determinado (débitos / créditos) Esta comprobación tiene como propósito ver si se ha contabilizado todo el dinero recibido y si el saldo que muestra el PMS (o Planilla) es correcto.

        p El dinero que se encuentra en la caja de recepción tiene un cierto grado de exposición al público y riesgo de robo, pérdida o simplemente de una contabilización errada. Se recomienda arquear la caja al menos una vez al día en cada turno.

    separador

    .titulo-segundo
      #t_3_4.h2 3.4 Procedimiento del arqueo de caja

    p.mb-5 Como mencionamos el arqueo de caja, se trata de un recuento de las operaciones del día, como este se realiza en cualquier momento del día, debe ser rápido y con un procedimiento sencillo que puede ser el siguiente.

    .row.justify-content-center.mb-5
      .col-lg-10
        ol.lista-ol--cuadro.lista-ol--separador.mb-5
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Contar todo el dinero en efectivo que hay en caja, y verificar los valores de otras formas de pago (tarjetas, moneda extranjera, créditos, etc.)


          li 
            .lista-ol--cuadro__vineta
              span 2
            | Solicitar al software de gestión (PMS) un reporte de caja, que nos indique el valor que debemos tener en ese momento. Si no se cuenta con sistema PMS, basta con sumar los valores de la planilla de control. 


          li 
            .lista-ol--cuadro__vineta
              span 3
            | Al finalizar y comparar los valores físicos, con los controles tendremos un resultado que puede tener las siguientes conclusiones.

        .col_ava.p-5.mb-5
          .row.justify-content-center
            .col-lg-5.mb-5
              figure.mb-2
                img.img-a(src='@/assets/curso/tema_3/img_3.png', alt='correcto')
              p.mb-0.text-center El arqueo contable y el 
              p.text-center arqueo físico #[strong coinciden].

            .col-lg-1.mb-5.d-none.d-lg-block.verticalLine_1
            .col-lg-5
              figure.mb-2
                img.img-a(src='@/assets/curso/tema_3/img_4.png', alt='incorrecto')
              p.mb-0.text-center El arqueo contable y el 
              p.text-center arqueo físico #[strong NO coinciden].

        p El resultado incorrecto puede deberse a:

        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Una falta real de dinero: se dio mal un cambio, hubo una sustracción de este.
          li 
            i.lista-ul__vineta
            | Un registro errado del PMS: se recibió un pago en tarjeta y se registró como efectivo.
          li 
            i.lista-ul__vineta
            | Un sobrante de dinero: falta realizar algún registro.

    separador

    .row.d-flex
      .col-lg-8
        .titulo-segundo
          #t_3_5.h2 3.5 Pagos realizados en la caja
        p.mb-5 Es una política de control, enfocada en darle orden al manejo del efectivo, funciona en si se autoriza o no realizar pagos en la caja de recepción por parte de la gerencia del hotel, en caso afirmativo se determina que pagos si se pueden realizar y cuáles no. Como todas las políticas estas se instauran en cada establecimiento.

        .titulo-segundo
          #t_3_6.h2 3.6 Consumos internos

        p Es una política operacional, que determina cómo se realizan los consumos de los empleados cuando son para disfrute personal o como parte de trabajo. En los hoteles hay ocasiones en que, como parte de la labor comercial, el personal de ventas extiende invitaciones a clientes con el propósito de cerrar algún negocio o de mostrar los servicios. En esos casos la política determina el monto y frecuencia máxima de dichas atenciones.

        .cajon.color-secundario.p-4.mb-5
          p En el caso de los consumos para disfrute personal, los hoteles suelen tener una política de descuentos en los servicios que prestan, cuando son consumidos por empleados o familiares. 



      .col-lg-4.d-flex
        figure
          img(src='@/assets/curso/tema_3/img_5.png', alt='incorrecto')
    
    

</template>

<script>
export default {
  name: 'Tema3',
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
