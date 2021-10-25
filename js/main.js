document.addEventListener("DOMContentLoaded", function(){
    ///////////ELEMENTOS DEL DOM////////////////
    //DIVS de fondos
    let divsFondos = document.getElementsByClassName("fondos");
    //BOTÓN que cambia a fondo 1
    let btnFondo1 = document.getElementById("btn_fondo_1");
    //BOTÓN que cambia a fondo 2
    let btnFondo2 = document.getElementById("btn_fondo_2");
    //DIV en el que e muestra el presonaje
    let divPersonaje = document.getElementById("personaje");
    //DIV en el que se muestra la pantalla de inicio y final
    let divPantalla = document.getElementById("div_pantalla_inicio");
    //PARRAFO de los puntos
    let pPuntos = document.getElementById("parrafo_puntos");
    //PARRAFO puntos finales
    let pFinalPuntos = document.getElementById("parrafo_puntos_finales");
    //PARRAFO donde se muestra el tiempo
    let pTiempo = document.getElementById("p_tiempo");
    //PARRAFO donde se muestra el tiempo final
    let pFinalTiempo = document.getElementById("p_tiempo_final");
    //Boton entendio que da paso a la pantalla secundaria
    const btn_entendido = document.getElementById("btn_entendido");
    //DIVS en el que se muestran obstaculos de tipo SUELO
    let clasesObs= document.getElementsByClassName("obstaculo_suelo");
    //DIVS en el que se muestran obstaculos de tipo AIRE
    let clasesObsA= document.getElementsByClassName("obstaculo_aire");
    //DIVS coleccionables que son tipo Suelo
    let divsSuel = document.getElementsByClassName("col_tierra");
    //DIVS coleccionables que son de tipo Aire
    let divsAir = document.getElementsByClassName("col_aire");
    //MOSTRAR PANTALLA SECUNDARIA
    const pantallaPrin= document.getElementById("pantalla-main");
    const pantallaSecundaria = document.getElementById("pant_secun");

    //SUS ARRAYS
    let divsAire= Array.from(divsAir);
    let divsSuelo = Array.from(divsSuel);

    //creación de arrays con DIVS de obtaculos
    let arrayObsSuelo= Array.from(clasesObs);
    let arrayObsAire= Array.from(clasesObsA);
    //Array de fondos
    let arrayFondos = Array.from(divsFondos);
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
    let viewPantalla = new ViewPantalla(divPantalla, pPuntos, pFinalPuntos, pTiempo, pFinalTiempo, pantallaPrin, pantallaSecundaria, btn_entendido);

    /////////////CONTROLS/////////////

    //creació de objeto para controlar el tiempo de ANIMACIÓN de los DIVS de OBSTACULOS
    //variable que controla la velocidad en el que corren los obstaculos
    let tiempoAnimacion = 3;
    let controlDivObst = new ControlDivObstaculos(arrayObsSuelo, arrayObsAire, tiempoAnimacion, viewObst, widthPantalla, divsSuelo, divsAire);
    //creación de CONTROLGAME para hacer lo que tenga que hacer cada vez que inicia o termina el juego
    let controlGame = new ControlGame(personaje, viewObst, controlDivObst, pTiempo);
    //creación de GAMELOOP para chequear continuamente si el personaje choca
    let gameLoop = new GameLoop(personaje, controlGame, viewPantalla, controlDivObst);

    //creo objeto para controlar movimiento de presonaje
    ///////////NO ME TOMA EL VIEWPERSONAJE :|
    //let controlDivPersonaje = new ControlDivPersonaje(divPersonaje);


    //variable con la que se controla la primer pantalla de instrucciones
    //para pasar a la siguiente pantalla
    let inicioUnico = false;

    btn_entendido.addEventListener("click", function(){
        viewPantalla.mostrarSegundaPantalla();
        inicioUnico = true;
    })
///////////INICIA JUEGO///////////////////////
    ///AGREGAR QUE TAMBIÉN TOME COMO EVENTO CUANDO SE APRIETA LA TECLA ENTER
    document.getElementById("btn_start").addEventListener("click", ()=>{
        iniciar();
    });

    function iniciar(){
        //oculta la pantalla de inicio
        viewPantalla.ocultarPantalla();
        //limpia los puntos del contador de los puntos
        viewPantalla.limpiarPuntosYTiempo();
        //animo los obstaculos y habilita movimiento de personaje
        controlGame.StartAll();
        //ejecuto función de control constante del juego.
        gameLoop.setGameFinished(false);
        gameLoop.iniciarTimer();
        gameLoop.gameLoop();
    }

    /////////CAMBIO DE FONDOS////////
    btnFondo1.addEventListener("click", ()=>{
        viewPantalla.cambiarAFondo1(arrayFondos);
    });
    btnFondo2.addEventListener("click", ()=>{
        viewPantalla.cambiarAFondo2(arrayFondos);
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
        if(e.key == "Enter"){
            if(viewPantalla.getPantallaActiva()){
               iniciar();
            }else if(!viewPantalla.getPantallaActiva()  && !inicioUnico){
                inicioUnico = true;
                viewPantalla.mostrarSegundaPantalla();
            }
        }else if(personaje.canMove()){
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

