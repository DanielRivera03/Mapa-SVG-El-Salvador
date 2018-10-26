/**
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
D.R   MENU DESPLEGABLE PARA MAPA ANIMADO SV JAVASCRIPT
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
**/

/**********************************************

  MENU DIVIDIDO EN LAS 3 ZONAS DE EL SALVADOR
  CON INFORMACION GENERAL DE CADA UNO DE LOS
  DEPARTAMENTOS QUE LO CONFORMAN

***********************************************/


$(".titulo_menu").click(function(){	// Se inicia funcion general aplicable contenedor .titulo_menu
   var contenido_general_menu=$(this).next(".contenido_menu_desplegable");
   if(contenido_general_menu.css("display")=="none"){ // Si usuario hace clic en el titulo contenedor entonces...
      contenido_general_menu.slideDown(280); // Se abre el contenedor que contiene toda la informacion		
      $(this).addClass("desplegable_abierto"); // Y accede al contenedor desplegable_abierto para mostrar la informacion que contiene
   }
   else{ // Cuando el usuario hace clic de nuevo entonces...
      contenido_general_menu.slideUp(280); // Se cierra el contenedor desplegable_abierto aplicando de nuevo la linea css display none
      $(this).removeClass("desplegable_abierto");	// Y remueve la clase para que el usuario haga clic y repita el ciclo
  }						
}); // Cierre funcion general