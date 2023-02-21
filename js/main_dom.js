import countDown from "./cuenta_regresiva.js";
import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import scrollTop from "./scroll_top.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilter from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_spy.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";
import speechReader from "./narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    
    //menu hamburguesa
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    
    //reloj 
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    
    //alarma
    alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    
    //cuenta regresiva
    //el formato es         MM  DD, AÑO  hh:mm:ss
    countDown("countdown", "Dec 29, 2023 09:00:00", "¡Feliz cumpleaños Seba! 😄");
    
    //scroll top
    scrollTop(".scroll-top-btn");

    //Multimedia responsiva con JS
    responsiveMedia(
        "youtube", 
        "(min-width: 1024px)", 
        `<a style="text-decoration: none;" target="blank" href="https://www.youtube.com/watch?v=6IwUl-4pAzc">Ver video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps", 
        "(min-width: 1024px)", 
        `<a style="text-decoration: none;" target="blank" href="https://goo.gl/maps/83pnYc4nrNeRDtCU7">Ver mapa</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8299.523120496087!2d-60.785365599414604!3d-34.35893073378061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1673230099532!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );

    //Responsive Tester. Abre una web cualquiera con un tamaño de ancho y alto determinados por el usuario
    responsiveTester("responsive-tester");
    
    //User Agent 
    userDeviceInfo("user-device");

    //Deteccion de WebCam
    webCam("webcam");

    //Geolocalizacion
    getGeolocation("geolocation");

    //Filtro de búsqueda
    searchFilter(".card");

    //Sorteo
    draw("#winner-btn", ".player");
    
    //Carrusel
    slider();

    //Scroll espia
    scrollSpy();

    //Video Inteligente
    smartVideo();

    //Validaciones del formulario
    contactFormValidations();

});

d.addEventListener("keydown", (e) => {
    /*
    keydown:    ejecuta al presionar la tecla
    keyup:      ejecuta al soltar la tecla 
    keypress:   ejecuta al mantener la tecla
    */
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
    
})

//Se colocan afuera porque usan Document content loaded en si mismos

/*dark theme:
Colocar el data-atribute "dark-mode" (sin comillas) en cada selector del html.
En JS inventaremos el segundo parametro: "dark-mode" y a esta clase le daremos estilo en CSS
Luego programar en JS.
*/
darkTheme(".dark-theme-btn", "dark-mode", ".stage");

//Verifica qué sistema utiliza el usuario
networkStatus();

//Narrador con voz
speechReader();