Feature: End to End Ecommerce validation

  Regresion

Scenario: Buy products
Given I open ecommerce
When I select the products
And I add the products
Then Verifico el producto
And Tomo el titulo y lo guardo
Given Abro Google
And Realizo una búsqueda