<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Posteo de servicios hoteleros

    .cajon.color-secundario.p-4.mb-5
      p Procesar los cargos y pagos de los huéspedes se conoce en la jerga hotelera como posteo, esta es una expresión españolizada de la palabra inglesa “post” hoy tan de moda por las redes sociales. Postear es la acción de agregar o restar los cargos de los huéspedes en la cuenta. Para entender apropiadamente cómo funciona la cuenta de un cliente, hay que entender su naturaleza contable. 

    .row.justify-content-center.mb-5
      .col-lg-10
        p En este sentido los activos son elementos que tienen valor monetario. Los pasivos son cargos financieros u otras obligaciones contractuales o deudas. Estos dos conceptos proporcionan los fundamentos a un sistema de contabilidad y soporte a las cuentas huésped. 

    .row.justify-content-center.mb-5
      .col-lg-9
        .row.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema_2/img_1.png' alt='AvatarTop')
              .tarjeta.col_ava
                .p-4
                  h2.text-center Ejemplos de activos
                  p.text-center Incluyen la propiedad de un teléfono celular, un libro de texto, o dos boletos para un concierto.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema_2/img_2.png' alt='AvatarTop')
              .tarjeta.col_ava
                .p-4
                  h2.text-center Ejemplos de pasivos
                  p.text-center Incluyen un contrato para pagar el teléfono celular mensualmente, una deuda financiera para pagar un automóvil.

    .row.justify-content-center.mb-5
      .col-lg-10
        p Los cargos de huéspedes son obligaciones financieras contraídas con un hotel, estos se consideran un activo para este. Si un huésped paga por adelantado una cuenta, esto es una responsabilidad para el hotel porque el hotel debe devolver el dinero al huésped al finalizar la compra. Veamos cual es el efecto de DÉBITOS y CRÉDITOS, respecto de los activos y los pasivos.

    .row.justify-content-center.mb-5
      .col-lg-9
        p.BorTit #[strong Tabla 2.] Efecto de débitos y créditos, frente a Activos y Pasivos
        .tabla-a.color-acento-contenido
          table
            
            thead
              tr
                th(colspan=3) 
                  p
                    strong Efecto de debito y crédito, frente a Activos y Pasivos
            tbody    
              tr.color-tr_1
                td 
                td.text-center #[strong DEBITO]
                td.text-center #[strong CRÉDITO]
              tr
                td.text-center Activos
                td.text-center 
                  .row.justify-content-center
                    .col-lg-4
                      p Aumenta
                    .col-lg-4
                      ul.lista-ul--color
                        li 
                          i.fas.fa-long-arrow-alt-up
                td.text-center
                  .row.justify-content-center
                    .col-lg-4
                      p Disminuye
                    .col-lg-4
                      ul.lista-ul--color
                        li 
                          i.fas.fa-long-arrow-alt-down
              tr
                td.text-center Pasivos
                td.text-center 
                  .row.justify-content-center
                    .col-lg-4
                      p Disminuye
                    .col-lg-4
                      ul.lista-ul--color
                        li 
                          i.fas.fa-long-arrow-alt-down
                td.text-center
                  .row.justify-content-center
                    .col-lg-4
                      p Aumenta
                    .col-lg-4
                      ul.lista-ul--color
                        li 
                          i.fas.fa-long-arrow-alt-up

    .row.justify-content-center.mb-5
      .col-lg-10
        p Es importante la publicación precisa y oportuna de los cargos y pagos de los huéspedes, para mantener registros financieros precisos, ya que el huésped puede decidir hacer check out / salida, en cualquier momento durante el día y requerirá la información precisa en ese momento. 

        p El uso del Sistema de Administración de Hoteles o PMS (Property Management System) para el posteo aumenta la precisión y automatización de los cargos. Las opciones del módulo de caja del PMS, que se enumeran en la ilustración, permiten al cajero contabilizar de manera fácil y correcta los cargos y pagos en los que incurre el huésped durante su estadía 

    .row.justify-content-center.mb-5
      .col-lg-8
        p.BorTit #[strong Figura 1.] Tipos de cargos hoteleros
        figure
          img.img-a(src='@/assets/curso/tema_2/img_3.svg', alt='Tipos de cargos hoteleros')
          figcaption Nota. Sena (2021) 

    h5 Cargos según su origen
    p.mb-5 Los cargos según su origen se clasifican de la siguiente manera: 

    TabsC.color-primario
      .py-3.py-md-4(titulo="Cargos manuales")
        .row.align-items-center
          .col-md-6
            figure
              img.img-a(src='@/assets/curso/tema_2/img_4.png', alt='Cargos manuales')
          .col-md-6.mb-4.mb-md-0
            p Estos cargos se generan por la interacción humana con el sistema. Para ser más explícitos es un cargo realizado por un cajero, directamente en la caja de recepción.
          
      .py-3.py-md-4(titulo="Cargos automáticos")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-a(src='@/assets/curso/tema_2/img_5.png', alt='Texto que describa la imagen')
          .col-md-6
            p Están los cargos realizados automáticamente por el sistema en el proceso de auditoría nocturna. Estos son los cargos relativos al cobro del valor del alojamiento, es decir es el valor del alojamiento, los respectivos impuestos y otros cargos que pueden parametrizarse, con los planes tarifarios. Por ejemplo, el valor del desayuno, si se ofrece como incluido o el seguro hotelero.

        
      .py-3.py-md-4(titulo="Caja de ambientes")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-a(src='@/assets/curso/tema_2/img_6.png', alt='Caja de ambientes')
          .col-md-6.mb-4.mb-md-0
            p Estas cajas están enlazadas (se comunican por medio una interfase) al sistema PMS, principal. Son los llamados módulos POS (Point of Sale) o Puntos de venta. Están ubicados en los sitios donde huéspedes o clientes pueden realizar consumos, son conocidos como ambientes. 




</template>

<script>
export default {
  name: 'Tema2',
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
