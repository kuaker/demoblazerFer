#language:es
Característica: End to End Ecommerce validación

Regresion

Escenario: Comprar productos
Dado Abro el ecommerce
Cuando Selecciono los productos
Y Agrego un producto al carrito
Y Confirmo el producto
Entonces Chequeo que el producto sea el correcto
Y Me agarro el titulo y lo guardo
Dado Abro Google
Y Googleo el producto
Entonces Chequeo que el producto sea el mismo