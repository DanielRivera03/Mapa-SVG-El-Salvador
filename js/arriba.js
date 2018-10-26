/**
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
D.R		CONTROL BOTON ANIMADO (.arriba) JAVASCRIPT
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
**/
$(document).ready(function(){
	$('.arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px' // Luego de clickear el boton, el efecto regresara al top con 0 px, dicho en otras palabras,
			// regresa a la parte superior sin ningun borde, margen o relleno alguno
		}, 600); // Tiempo de animacion en aparicion de boton
	});// Cierre funcion general que controla el evento o animacion de boton
	$(window).scroll(function(){
		if( $(this).scrollTop() > 175 ){ // Si altura scrolleada es mayor a 175 px entonces:
			$('.arriba').slideDown(600); // Muestra boton con el efecto scroll hacia abajo
		} else {
			$('.arriba').slideUp(600); // Muestra boton con el efecto scroll hacia arriba
		}
	});// Cierre general de animacion mostrar/ocultar boton animado
});