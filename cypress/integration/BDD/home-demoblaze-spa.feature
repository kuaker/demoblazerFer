#language:es
Característica: End to End Ecommerce validación

  Regresion

Escenario: Comprar productos
Dado I open ecommerce
Cuando I select the products
Y I add the products
Y I confirm the product
Y I check the product
Y I get the title and i save it
Dado I open Google
Y I google the product saved
Entonces I see the name of the product in the search bar