Feature: End to End Ecommerce validation
    
        Como usuario quiero loguearme a Demoblaze

Background: Login
 Given Ingreso al Ecommerce

Scenario: Me logueo como usuario
When Hago click en el boton de Log in
And Espero que habra el modal
And Ingreso el usuario
And Ingreso la password
And Hago click en el boton de Login
Then Compruebo que estoy logueado