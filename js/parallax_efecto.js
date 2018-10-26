/**
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
D.R		EFECTO PARALLAX EN .BANNER E .INFO_TELEFONO_MITUR JAVASCRIPT
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
**/

/**********************************************

	EFECTO PARALLAX PARA .BANNER

***********************************************/

$(document).ready(function(){
	// Estilos para pantallas pequeñas
	var ancho_banner= $(window).width();
	if(ancho_banner<=1200){ // Validamos si ancho es igual o menor a 1200 aplique la siguiente regla !! Segun los media del css responsivo !!
		$('.banner').css({ // Div clase banner
			'background-size': 'initial' // Devolvemos a que el fondo vuelva a su posicion inicial
		});
	}// Cierre de sentencias para pantallas menores a 1200 px
	// Aplicamos el efecto parallax para todas los tamaños de pantallas	
	$(window).scroll(function(){
		var scrolleado_usuario=$(window).scrollTop();
		var posicion_pantalla=(scrolleado_usuario * 1.3); // Scroll dado por usuario * valor de movimiento (efecto)
		$('.banner').css({ // Efecto general parallax para el DIV contenedor .banner
			'background-position': '0 -' + posicion_pantalla + 'px' // Sumatoria de calculo anterior para aplicar efecto
			});
		});
	}); // Fin de funcion general para .banner



/******************************************************

	EFECTO PARALLAX PARA .INFO_TELEFONO_MITUR

******************************************************/

$(document).ready(function(){
	// Estilos para pantallas pequeñas
	var ancho_banner_telefono= $(window).width();
	if(ancho_banner_telefono<=1200){ // Validamos si ancho es igual o menor a 1200 aplique la siguiente regla !! Segun los media del css responsivo !!
		$('.info_telefono_mitur').css({ // Div clase info telefono mitur
			'background-size': 'initial' // Devolvemos a que el fondo vuelva a su posicion inicial
		});
	}// Cierre de sentencias para pantallas menores a 1200 px
	// Aplicamos el efecto parallax para todas los tamaños de pantallas	
	$(window).scroll(function(){
		var scrolleado_usuario_itm=$(window).scrollTop();
		var posicion_pantalla_itm=(scrolleado_usuario_itm * 1.3); // Scroll dado por usuario * valor de movimiento (efecto)
		$('.info_telefono_mitur').css({ // Efecto general parallax para el DIV contenedor .info_telefono_mitur
			'background-position': '0 -' + posicion_pantalla_itm + 'px' // Sumatoria de calculo anterior para aplicar efecto
			});
		});
	}); // Fin de funcion general para .info_telefono_mitur