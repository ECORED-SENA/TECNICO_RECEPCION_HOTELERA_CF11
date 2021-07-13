<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Operaciones matemáticas

    p Es un hecho inherente a la función del cajero, que quien desempeñe este rol debe tener competencias matemáticas básicas, aunque hoy en día se cuenta con muchos apoyos tecnológicos la habilidad de hacer cálculos matemáticos correctamente le será de gran ayuda. El cajero debe estar en la capacidad de realizar todas las operaciones que afecten una cuenta huésped (sumar, restar, multiplicar, dividir, calcular descuentos, etc.) sin apoyo tecnológico, es un escenario que puede presentarse repentinamente. Por ejemplo, en un corte de energía.

    p.mb-5 Las operaciones matemáticas son: 

    .row.justify-content-center.mb-5
      .col-lg-8

        #MapaGroup01
          .row.mb-5
            .col-lg-4
              button.ClasePripiaBtn.collapsed(data-bs-toggle='collapse' data-bs-target='#collapse01, #collapse01s' aria-expanded='true' aria-controls='#collapse01, #collapse01s')
                img.img-a(src='@/assets/curso/tema_4/img_5.svg', alt='')
              img#collapse01s.img-a.collapse.show(src='@/assets/curso/tema_1/img_16.svg', alt='')(data-bs-parent='#MapaGroup01')
              
            .col-lg-4
              button.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse02, #collapse02s' aria-expanded='false' aria-controls='#collapse02, #collapse02s')
                img.img-a(src='@/assets/curso/tema_4/img_6.svg', alt='')
              img#collapse02s.img-a.collapse(src='@/assets/curso/tema_1/img_16.svg', alt='')(data-bs-parent='#MapaGroup01')
              
            .col-lg-4
              button.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse03, #collapse03s' aria-expanded='false' aria-controls='#collapse03, #collapse03s')
                img.img-a(src='@/assets/curso/tema_4/img_7.svg', alt='')
              img#collapse03s.img-a.collapse(src='@/assets/curso/tema_1/img_16.svg', alt='')(data-bs-parent='#MapaGroup01')
              
            
          #collapse01.collapse.show(data-bs-parent='#MapaGroup01')
            p Es posible pensar que este es un tema demasiado sencillo, después de todo hay quien no sabe sumar, ¡verdad!, pero aún así es pertinente tener estas operaciones en cuenta debido a que gran parte del movimiento diario de la caja, se soporta en ellas.

          #collapse02.collapse(data-bs-parent='#MapaGroup01')
            p Esta operación le será de gran ayuda, en la gestión de grupos. Simplificando grandes series de sumatorias, es también la base de la correcta aplicación de los descuentos expresados en porcentaje, cuya notación corresponde a un valor el cual se multiplica por un %.

          #collapse03.collapse(data-bs-parent='#MapaGroup01')
            p Esta operación será su principal aliado cuando se le presente el caso de tener dividir una cuenta o un cargo en varias partes. Esta es una situación frecuente en la operación diaria de los hoteles.

    .row.justify-content-center
      .col-lg-10

        p Aunque los registros contables se realicen en un sistema PMS estas operaciones básicas le servirán para la validación y el control de los registros, para realizar los arqueos y cierres de movimiento. Sugerimos tenerlas muy en cuenta si no se tiene acceso a sistemas computarizados.

        .cajon.color-primario.p-4.mb-5
          p #[strong Porcentajes:] aprender a calcular porcentajes, le será de gran utilidad para dividir cuentas en partes desiguales. Esta operación es relativa a la proporcionalidad matemática y se puede calcular por medio de la regla de tres. 

          p Esta es una operación matemática cuyo concepto es, encontrar un valor incógnito a partir de tres valores conocidos. Aprendamos cómo, con la siguiente situación.

    .row.justify-content-center
      .col-lg-8
        TabsB
          .py-4.py-md-5(titulo="PASO 1")
            .row
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema_4/img_1.png', alt='Un huésped')
              .col-lg-7
                p Un huésped se acerca a pagar la cuenta e informa que del valor de la habitación su compañía solo le cubre el 70% y el pagará el 30% restante. Adicionalmente, en ese momento el hotel experimenta un corte de energía y usted solo dispone del valor total del alojamiento ($574.000 + IVA) en un informe impreso que se generó de la auditoría.


          .py-4.py-md-5(titulo="PASO 2")
            p Lo primero que hay que determinar es el valor monetario del 30%, de los $574.000, que pagará el cliente. 

            p.mb-5 Para lograrlo puede plantear la siguiente regla de tres. Para que la ecuación se resuelva correctamente, se deben colocar los valores del mismo tipo debajo, en este caso ubicamos porcentaje, debajo de porcentaje y la incógnita que será el valor del alojamiento, debajo de la cantidad.

            .row.justify-content-center
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema_4/img_2.png', alt='valores')
              .col-lg-3
                p.text-center $574.000____100%
                p.text-center x =?  ___ 30%

          .py-4.py-md-5(titulo="PASO 3")
            p Esta notación se lee: si $574.000 equivale al 100%, ¿Cuánto es el 30%? Tomando los valores en diagonal, se multiplica $574.000 por 30 y luego divide ese valor en 100.

            p De esta forma buestra ecuación quedaría de la siguiente manera.

            figure.mb-3
              img.img-a(src='@/assets/curso/tema_4/img_3.png', alt='')

            p Al despejar se eliminan los signos porcentuales, y resolviendo la multiplicación, tendremos

            figure.mb-3
              img.img-a(src='@/assets/curso/tema_4/img_4.png', alt='')

            p Es decir que el valor equivalente al 30% que debe pagar el huésped es $172.200 + IVA por tanto, a la empresa se le debe cobrar el valor de $401.800 + IVA


</template>

<script>
export default {
  name: 'Tema4',
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
