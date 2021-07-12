<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Normatividad tributaria

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_1/img_1.png', alt='Normatividad tributaria')

    p.mb-5 La industria turística y hotelera ha pasado por varios periodos de crisis o bonanzas, acorde con esto se han promulgado normas específicas desde un marco normativo tributario.   En general un negocio hotelero está obligado a pagar impuestos nacionales (Impuesto al Valor Agregado - IVA, e Impuesto sobre la renta) Impuestos departamentales (Impuesto al consumo – Impoconsumo) Impuestos locales (Industria y Comercio - ICA) y en algunos lugares sobretasas a la explotación turística y hotelera. Conozcamos sobre ellos.

    Separador

    .titulo-segundo
      #t_1_1.h2 1.1  Impuesto al Valor Agregado (IVA)

    p.mb-5 El impuesto al valor agregado o impuesto a las ventas, IVA es un gravamen que se cobra cuando los colombianos compran un producto o pagan un servicio. Para este impuesto existe una tarifa general del 19% que se aplica a bienes y servicios, los cuales pueden ser gravados, excluidos o exentos. Tributariamente a este impuesto se da la categoría de impuesto indirecto, porque se liquida sobre los costos de producción y sobre las ventas de la empresa, tiene una característica especial: es un impuesto plurifásico o en cascada, esto quiere decir que grava de manera sucesiva las ventas en todas las fases del proceso productivo desde la producción hasta el consumo final y es descontable entre dichas fases. 

    .row.justify-content-center.mb-5
      .col-lg-11
        .jumbo_1.p-2.mb-5
          p.mt-2.text-center Para entenderlo mejor vamos a analizarlo a continuación con el siguiente ejemplo: 

        TabsA.color-acento-contenido.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 1")
            p Un comerciante de telas vende el metro de tela generó a $9.100  y aplica el 19% del  IVA. 
            p.text-center.mb-0 $9.100 x 19% = $1.729
            p.text-center $9.100 + $1.729 = $10.829 
            figure
              img.img-a(src='@/assets/curso/tema_1/img_2.png', alt='telas')

          .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 2")
            p Un fabricante de sábanas le compra 3 metros de generó por un total de $32.487 IVA incluido. 
            p Luego de confeccionar los juegos de cama los vende a un hotel por $75.000 IVA incluido. Finalmente, el hotel utiliza las sábanas y vende su servicio de alojamiento por $150.000 + IVA.
            figure
              img.img-a(src='@/assets/curso/tema_1/img_3.png', alt='sábanas')

          .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 3")
            p En este caso, hay tres momentos del impuesto (en cascada)

            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                | El comerciante debe declarar todo el IVA cobrado, a menos que tenga otros rubros sobre los cuales cruzar.
              li 
                i.lista-ul__vineta
                |El fabricante debe pagar el IVA, pero puede descontar el valor que pago al comerciante.
              li 
                i.lista-ul__vineta
                | El hotel que es el usuario final también debe pagar IVA por los servicios que presta, en su caso puede descontar el IVA que pagó por los tendidos. 

            figure
              img.img-a(src='@/assets/curso/tema_1/img_4.png', alt='impuesto')

          .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 4")
            p Si llevamos esto a la matemática veremos que:

            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                | El comerciante declara $5.187.
              li 
                i.lista-ul__vineta
                | El fabricante de lencería declara $6.788, que es la diferencia entre los $11.975 que cobró al hotel y los $5.187 de IVA que le pago al comerciante.
              li 
                i.lista-ul__vineta
                | El hotel luego de su cierre contable declarará el IVA recaudado, descontando el IVA pagado. Es decir $16.525.

            figure
              img.img-a(src='@/assets/curso/tema_1/img_5.png', alt='impuesto')

          .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 5")
            .tabla-a.color-acento-contenido
              table
                
                thead
                  tr
                    th(colspan=7) 
                      p
                        strong Impuesto al Valos agregado - IVA
                      p.mb-0 Plurifasico acumulativo o en Cascada
                tbody    
                  tr.color-tr_1
                    td 
                    td.text-center Costo
                    td.text-center Unidad 30%
                    td.text-center PVP
                    td.text-center IVA 19%
                    td.text-center PVP + IVA
                    td.text-center Declara
                  tr.color-tr_1
                    td Industria productora telas
                    td $7.000
                    td $2.100
                    td $9.100
                    td $1.729
                    td $10.829
                    td $1.729
                  tr.color-tr_1
                    td Comerciante de tela
                    td $10.829
                    td $3.249
                    td $14.078
                    td $2.675
                    td $16.752
                    td $946
                  tr.color-tr_1
                    td Confeccionista (Fabrica Sabanas)
                    td $16.752
                    td $5.026
                    td $21.778
                    td $4.138
                    td $25.916
                    td $1.463
                  tr.color-tr_1
                    td Hotel (Usa la sabana, pero vende unservicio)
                    td $25.916
                    td $0
                    td $150.000
                    td $28.500
                    td $178.500
                    td $24.362



        p.mb-5 Existe una tarifa diferencial en el IVA, del 5%, esta solo aplica para algunos productos de la canasta familiar y algunos servicios como los de protección. Adicionalmente hay una serie de productos, la mayoría de ellos de la canasta básica familiar (arroz, papa, leche, huevos, etc.)  y de servicios básicos (educación, salud, entre otros.) que están exentos de IVA, es decir tiene tasa 0%. (DIAN, 2021)

        .row.justify-content-center
          .col-lg-9
            .tarjeta-avatar-b.mb-5
              img.img-b(src='@/assets/curso/tema_1/img_6.svg' alt='AvatarTop')
              .tarjeta.jumbo_1
                .p-4
                  h4 IVA canasta familiar
                  p Conoce en este documento el listado de productos de la canasta familiar con la tarifa del IVA que aplica en Colombia. 

        separador


    .titulo-segundo
      #t_1_2.h2 1.2 Impuesto al consumo

    p.mb-5 El impuesto al consumo o impoconsumo, es un gravamen aplicado sobre ciertos bienes y servicios, está regulado por los artículos 512-1 del estatuto tributario. Este impuesto recae sobre el consumo de ciertos bienes o servicios que no se consideran indispensables (o parte de la canasta básica familiar) y por ello tienen un gravamen adicional al IVA, cuya tarifa puede ser de 16%, 8% o 4%. A continuación, los veremos.

    .row.mb-5
      .col-lg-4
        figure.mb-3
          img.img-a(src='@/assets/curso/tema_1/img_7.png', alt='')
        h4 Tarifa impoconsumo 16%
        p Pick-up cuyo valor FOB (valor free on board) o el equivalente del valor FOB estén en el rango de precio de alguna de las dos tarifas para las que pueden aplicar.
        p Motocicletas con motor de émbolo (pistón) alternativo de cilindraje superior a 200 c.c.

        p Yates, barcos y embarcaciones de recreo o deporte; barcas (botes) de remo y canoas.

        p Globos, dirigibles, planeadores y demás aeronaves, no propulsados con motor de uso privado.

        p Aeronaves (por ejemplo: helicópteros, aviones); vehículos espaciales (incluidos los satélites), sus vehículos de lanzamiento y vehículos suborbitales, de uso privado.


      .col-lg-4
        figure.mb-3
          img.img-a(src='@/assets/curso/tema_1/img_8.png', alt='')
        h4 Tarifa impoconsumo 8%
        p Vehículos automóviles de tipo familiar y los camperos cuyo valor FOB (o el equivalente del valor FOB) sea menor de USD $30.000, incluyendo sus accesorios.

        p Las Pick-up cuyo valor FOB (o el equivalente del valor FOB) sea menor de USD $30.000, incluyendo sus accesorios.

        p Motocicletas con motor de émbolo alternativo de cilindrada mayor a 200cc.
        p Yates y otras embarcaciones o barcos de recreo o uso deportivo, incluyendo botes de remo y canoas.

        p Servicios de comidas y bebidas en restaurantes y bares.
        p Nota: Este impuesto no es aplicable a las actividades de expendio de bebidas y comidas bajo franquicias.

      .col-lg-4
        figure.mb-3
          img.img-a(src='@/assets/curso/tema_1/img_9.png', alt='')
        h4 Tarifa impoconsumo 4%
        p La prestación de servicios de telefonía móvil, internet y navegación móvil.
        p Servicio de datos.

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center
          .col-lg-8
            p Nos vamos a centrar en el ítem servicios de comidas y bebidas en restaurantes y bares, profundicemos en el: 

            p Las comidas preparadas en un hotel o establecimiento de expendio de alimentos y bebidas tienen una tarifa general de impuesto al consumo del 8%. Hay que tener en cuenta la nota que dice “Este impuesto no es aplicable a las actividades de expendio de bebidas y comidas bajo franquicias”. Esto quiere decir es que si el hotel o restaurante funciona bajo el modelo de franquicia (normalmente marcas reconocidas como: Marriott, Hilton, GHL) al expendio de comidas y bebidas en estos establecimientos no se les aplica el 8% de impoconsumo, si no el 19% de la tarifa general del IVA.
          .col-lg-4
            img(src='@/assets/curso/tema_1/img_10.png', alt='')

    separador

    .titulo-segundo
      #t_1_3.h2 1.3 Impuesto a la renta

    .row.mb-5
      .col-lg-4
        img(src='@/assets/curso/tema_1/img_11.png', alt='')
      .col-lg-8
        p Es el impuesto que se genera cuando el patrimonio de una persona tiene un incremento a lo largo de un año. Este tributo rige en todo el país y se cobra sobre los ingresos de las personas naturales y jurídicas. Este gravamen se compone de la renta, las ganancias ocasionales y las remesas, su liquidación es anual y la declaración de renta del año anterior. 

        p La base gravable o de liquidación del impuesto se denomina renta líquida gravable, esta renta hace referencia a lo que el contribuyente gana en un año, determinado por los ingresos, a los que se restan costos y gastos, y algunos beneficios tributarios.

        p La tarifa general del impuesto de renta es de 31% para el año 2021 (ingresos del año 2020) En el caso del impuesto de renta hay también algunas tarifas diferenciales y algunas rentas exentas.

        p Podemos mencionar que los hoteles que construyan o remodelen tendrán una tarifa de renta especial. 

    .row.justify-content-center.mb-5 
      .col-lg-10
        .cajon.color-secundario.p-4.mb-5
          p Con la expedición de la reforma tributaria estructural se contempló la tarifa especial en renta del 9%, para las siguientes actividades: los servicios que se presten en nuevos hoteles, siempre y cuando se construyan en municipios de hasta 200.000 habitantes, y dentro de los diez años siguientes, es decir, hasta 2026. 

          p La tarifa del 9% la podrán aplicar por un término de 20 años. Este beneficio también aplica para los servicios prestados en hoteles ubicados en municipios de hasta 200.000 habitantes, y que se remodelen o amplíen entre 2017 y 2026. La tarifa del 9% podrá ser aplicada durante 20 años, pero solo sobre la proporción que represente la remodelación o ampliación del costo fiscal del inmueble. (Actualícese, 2018)   

        p.mb-5 Los requisitos que deberán cumplir los nuevos hoteles son los que se encuentran señalados en el artículo 5 del Decreto 2755 de septiembre 30 de 2003, recopilado en el artículo 1.2.1.22.11 del DECRETO 1625 de 2016:

        TabsB.color-acento-contenido
          .py-4.py-md-5(:icono="require('@/assets/curso/tema_1/img_12.png')")
            p Debe estar inscrito en el registro nacional de turismo del Ministerio de Comercio, Industria y Turismo (MinCIT)
          .py-4.py-md-5(:icono="require('@/assets/curso/tema_1/img_13.png')")
            p Contar con un certificado expedido por el MinCIT, en el que conste la prestación de servicios hoteleros por parte del nuevo hotel.
            
          .py-4.py-md-5(:icono="require('@/assets/curso/tema_1/img_14.png')")
            p Certificado expedido por la Curaduría Urbana, Secretaría de Planeación o por la entidad que haga sus veces del domicilio del inmueble. En este, debe constar la aprobación del proyecto de construcción del nuevo hotel.

          .py-4.py-md-5(:icono="require('@/assets/curso/tema_1/img_15.png')")
            p Certificado expedido por representante legal y revisor fiscal o contador público, en el cual conste:

            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                | Que los servicios hoteleros prestados se encuentren debidamente autorizados.
              li 
                i.lista-ul__vineta
                | Que las rentas solicitadas con tarifa del 9% corresponden a servicios hoteleros prestados en nuevos hoteles construidos entre 2017 y 2026.
              li 
                i.lista-ul__vineta
                | Que se lleva contabilidad separada de los ingresos por servicios hoteleros y de los originados por otras actividades. (Actualícese, 2018)

    p Por otra parte, sobre los beneficios tributarios a las rentas hoteleras, específicamente los que otorgan los numerales 3 y 4 del artículo 207-2 del Estatuto Tributario (ET) es válido mencionar que, con la modificación que sufrió el artículo 240 del ET, los servicios hoteleros prestados en nuevos hoteles y en hoteles remodelados y/o ampliados de personas jurídicas pasaron de ser rentas exentas para ser gravadas con la tarifa del 9%. En el caso de las personas naturales, la DIAN ha manifestado que dichas rentas deberán tratarlas como gravadas y tributar con las tarifas del artículo 241 del Estatuto Tributario. De cualquier manera, es importante mencionar que la normatividad tributaria cambia constantemente y que debe ser revisada y actualizada.        
          
          


        
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
