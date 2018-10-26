/**
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
D.R		CONTROL GENERAL DE MAPA ANIMADO SV 										
D.R		CONTROL ESPECIFICO UNICAMENTE PARA LA SECCION HTML5 DONDE SE ENCUENTRA ALOJADO EL DIV CONTENEDOR DEL MAPA_SV
D.R		JAVASCRIPT
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R_D.R
**/
$(document).ready(function() {
    $('.departamentos_SV').mapaSV({
    tema_general_mapa: 'tema_general', /* Se indica que tome los estilos de la hoja css animaciones_mapaSV.css */
    'maxWidth': 380, /* Se establece maximo de 380 px a contenedor general de informacion por departamento */
    estilos_contenido_animacion_mapa: true, /* todos los estilos generales de cada uno de los elementos declarados en la hoja
    de control de mapa, procedemos a validar que tome todos los estilos generales declarados en la hoja css animaciones_mapaSV.css */
    });
});