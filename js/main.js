document.addEventListener("DOMContentLoaded", function(){
    ///////////ELEMENTOS DEL DOM////////////////
    //DIV en el que e muestra el presonaje
    let divPersonaje = document.getElementById("personaje");
    //DIV en el que se muestra la pantalla de inicio y final
    let divPantalla = document.getElementById("div_pantalla_inicio");
    //DIVS en el que se muestran obstaculos de tipo SUELO
    let clasesObs= document.getElementsByClassName("obstaculo_suelo");
    //DIVS en el que se muestran obstaculos de tipo AIRE
    let clasesObsA= document.getElementsByClassName("obstaculo_aire");

    //creación de arrays con DIVS de obtaculos
    let arrayObsSuelo= Array.from(clasesObs);
    let arrayObsAire= Array.from(clasesObsA);

    //VARIABLE PARA UBICAR LOS DIVS DE LOS OBSTÁCULOS AL FINAL DE LA PANTALLA
    //se la paso a ControlDivObstaculos();
    let widthPantalla = window.innerWidth;

    /////////////ELEMENTOS/////////////

    //creación de objeto PERSONJAE
    let personaje = new Personaje(divPersonaje);

    /////////////VIEWS/////////////

    //creación de objeto que controla vista el DIV del PERSONAJE
    let viewPersonaje = new ViewPersonaje(divPersonaje);
    //creación de objeto que controla vista el DIV de los OBSTACULOS
    let viewObst = new ViewDivObstaculo();
    //creación de objeto que controla vista el DIV de la PANTALLA
    let viewPantalla = new ViewPantalla(divPantalla);

    /////////////CONTROLS/////////////

    //creació de objeto para controlar el tiempo de ANIMACIÓN de los DIVS de OBSTACULOS
    //variable que controla la velocidad en el que corren los obstaculos
    let tiempoAnimacion = 3;
    let controlDivObst = new ControlDivObstaculos(arrayObsSuelo, arrayObsAire, tiempoAnimacion, viewObst, widthPantalla);
    //creación de CONTROLGAME para hacer lo que tenga que hacer cada vez que inicia o termina el juego
    let controlGame = new ControlGame(personaje, viewObst, controlDivObst);
    //creación de GAMELOOP para chequear continuamente si el personaje choca
    let gameLoop = new GameLoop(personaje, arrayObsSuelo, arrayObsAire, controlGame, viewPantalla);

    //creo objeto para controlar movimiento de presonaje
    ///////////NO ME TOMA EL VIEWPERSONAJE :|
    //let controlDivPersonaje = new ControlDivPersonaje(divPersonaje);

///////////INICIA JUEGO///////////////////////
    ///AGREGAR QUE TAMBIÉN TOME COMO EVENTO CUANDO SE APRIETA LA TECLA ENTER
    document.getElementById("btn_start").addEventListener("click", ()=>{
        //oculta la pantalla de inicio
        viewPantalla.ocultarPantalla();
        //animo los obstaculos y habilita movimiento de personaje
        controlGame.StartAll();
        //ejecuto función de control constante del juego.
        gameLoop.setGameFinished(false);
        gameLoop.gameLoop();
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
        if(personaje.canMove()){
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
        if(e.key == "ArrowDown" && personaje.canMove()){
            viewPersonaje.rollUp();
            setTimeout(caminar,300);
        }
    }

    //divMontanias.style.animationPlayState = 'paused';
});

