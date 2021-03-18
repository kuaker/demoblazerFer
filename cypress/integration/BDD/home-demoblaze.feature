Feature: End to End Ecommerce validation

  Regresion

Scenario: Buy products
Given I open ecommerce
When I select the products
And I add the products
And I confirm the product
Then I check the product
And I get the title and i save it
Given I open Google
And I google the product saved
Then I see the name of the product in the search bar