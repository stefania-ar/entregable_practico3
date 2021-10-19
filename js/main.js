document.addEventListener("DOMContentLoaded", function(){
    let divPersonaje = document.getElementById("personaje");
    //controla clases del divPersonaje
    let viewPersonaje = new ViewPersonaje(divPersonaje);
    //elementos obstaculo tipo suelo
    let clasesObs= document.getElementsByClassName("obstaculo_suelo");
    let arrayObsSuelo= Array.from(clasesObs);
    // elementos obstaculo tipo aire
    let clasesObsA= document.getElementsByClassName("obstaculo_aire");
    let arrayObsAire= Array.from(clasesObsA);

    //console.log(arrayObsAire);
    let gameLoop = new GameLoop(divPersonaje, arrayObsSuelo, arrayObsAire);
    //creo objeto para controlar movimiento de presonaje
    ///////////NO ME TOMA EL VIEWPERSONAJE :|
    let controlDivPersonaje = new ControlDivPersonaje(divPersonaje);
    //creo objeto para controlar el tiempo de animación de los DIVS de obstaculos
    //controla la velocidad en el que corren los obstaculos
    let tiempoAnimacion = 3;
    let controlDivObst = new ControlDivObstaculos(arrayObsSuelo, arrayObsAire, tiempoAnimacion);
    //animo los obstaculos
    controlDivObst.animarObstaculos();
    //ejecuto función de control constante del juego
    //si el personaje se choca con algún obstaculo
    gameLoop.gameLoop();
    //document.addEventListener('keypress',rodar);
    //document.addEventListener('keyup',caminar);


///////////PANTALLA DE INICIO///////////////////////
    ///AGREGAR QUE TAMBIÉN TOME COMO EVENTO CUANDO SE APRIETA LA TECLA ENTER
    document.getElementById("btn_start").addEventListener("click", ()=>{
        divPantallaInicio.classList.remove("show");
        divPantallaInicio.classList.add("hiden");
    });




    ///////////MOVIMIENTOS DEL PERSONAJE///////////////////////
    document.addEventListener('keydown',movimiento);
    document.addEventListener('keyup',caminarDespuesRoll);

    /*function movimiento(e){
        controlDivPersonaje.movimiento(e);
    }

    function caminarDespuesRoll(e){
        controlDivPersonaje.caminarDespuesRoll(e);
    }*/

    let salta = true;
    let down = true;
    let roll = false;

    function movimiento(e) {
        if(e.key == "ArrowUp" && salta){
            //salta
            //false quiere decir que ya está saltando
            salta = false;
            viewPersonaje.salta();
            setTimeout(caminar,1000);
        }else if(e.key == "ArrowDown" && down && salta){//se pregunta por si está abilitado para saltar si no lo está que no se agache
            //corto la caminata despues de saltar
            //se agacha
            down = false;
            viewPersonaje.down();
            //empieza a rodar
            setTimeout(rodar,250);
        }
    }

    function rodar(){
        //pregunta que esté agachado
        if(!down){
            roll = true;
            viewPersonaje.rodar();
        }
    }

    function caminar(){
            //listo para saltar
            salta = true;
            //listo para agacharse
            down = true;
            //no está rodando
            roll = false;
            viewPersonaje.camina();
    }

    function caminarDespuesRoll(e){
        if(e.key == "ArrowDown"){
            viewPersonaje.rollUp();
            setTimeout(caminar,300);
        }
    }

    let divPantallaInicio = document.getElementById("div_pantalla_inicio");

});

