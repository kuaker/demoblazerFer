#language:es
Característica: End to End Ecommerce validation

Como usuario quiero loguearme a Demoblaze

Antecedentes: Login
Dado Ingreso al Ecommerce

Escenario: Me logueo como usuario valido

Cuando Hago click en el boton de Log in
Y Espero que habra el modal
E Ingreso el usuario "username"
E Ingreso la password "password"
Y Hago click en el boton de Login
Entonces Compruebo que estoy logueado