export default function hamburguerMenu(panelBtn, panel, menuLink){
    
    const d = document;

    d.addEventListener("click", (e) => {
        
        //abre el menú hamburguesa
        if ( e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panelBtn).classList.toggle("is-active");
            d.querySelector(panel).classList.toggle("is-active");
        
        }

        //cerrar el menú hamburguesa
        if( e.target.matches(menuLink) ){
            d.querySelector(panelBtn).classList.remove("is-active");
            d.querySelector(panel).classList.remove("is-active");
        }
    })

}