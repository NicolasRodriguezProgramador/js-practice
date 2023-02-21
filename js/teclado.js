const d = document;
let x = 0, y = 0;

export function moveBall (e, ball, stage){

    const $ball = d.querySelector(ball), $stage = d.querySelector(stage);
    const limitsBall = $ball.getBoundingClientRect(), limitsStage = $stage.getBoundingClientRect();

    //console.log(limitsBall, limitsStage);

    switch (e.keyCode) {
        //Izquierda
        case 37:
            e.preventDefault();
            if( limitsBall.left > (limitsStage.left + 10) ){
                x--;
            }
            break;
        //Derecha
        case 39:
            e.preventDefault();    
            if( limitsBall.right < (limitsStage.right - 10) ){
                x++;
            }
            break;
        //Arriba
        case 38:
            e.preventDefault();
            if( limitsBall.top > (limitsStage.top + 10) ){
                y--;
            }
            break;
        //Abajo
        case 40:
            e.preventDefault();
            if( limitsBall.bottom < (limitsStage.bottom - 10) ){
                y++;
            }
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;

}

export function shortcuts(e){
    /*
    console.log(e.type)
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e);
    */
 
    if( e.key === "a" && e.altKey ){
        alert(`Realizaste el Shortcut Alt + "a". ¡Alert!`);
    }
    if( e.key === "c" && e.altKey ){
        confirm(`Realizaste el Shortcut Alt + "c". Confirm.`);
    }
    if( e.key === "t" && e.altKey ){
        prompt(`Realizaste el Shortcut Alt + "t". Prompt`);
    }

}