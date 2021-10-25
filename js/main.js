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
    let pantallaGameOver = document.getElementById("pantalla_game_over");

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
    let viewPantalla = new ViewPantalla(divPantalla, pPuntos, pFinalPuntos, pTiempo, pFinalTiempo, pantallaPrin, pantallaSecundaria, btn_entendido, pantallaGameOver);

    /////////////CONTROLS/////////////
    //creació de objeto para controlar el tiempo de ANIMACIÓN de los DIVS de OBSTACULOS
    //variable que controla la velocidad en el que corren los obstaculos
    //creo objeto para controlar movimiento de presonaje
    ///////////NO ME TOMA EL VIEWPERSONAJE :|
    let controlDivPersonaje = new ControlDivPersonaje(divPersonaje, viewPersonaje);

    let tiempoAnimacion = 3;
    let controlDivObst = new ControlDivObstaculos(arrayObsSuelo, arrayObsAire, tiempoAnimacion, viewObst, widthPantalla, divsSuelo, divsAire);
    //creación de CONTROLGAME para hacer lo que tenga que hacer cada vez que inicia o termina el juego
    let controlGame = new ControlGame(personaje, viewObst, controlDivObst, pTiempo);
    //creación de GAMELOOP para chequear continuamente si el personaje choca
    let gameLoop = new GameLoop(personaje, controlGame, viewPantalla, controlDivObst, controlDivPersonaje);



    //variable con la que se controla la primer pantalla de instrucciones
    //para pasar a la siguiente pantalla
    let inicioUnico = false;

    btn_entendido.addEventListener("click", function(){
        viewPantalla.mostrarSegundaPantalla();
        btnFondo1.click();
        inicioUnico = true;
    })
///////////INICIA JUEGO///////////////////////
    ///AGREGAR QUE TAMBIÉN TOME COMO EVENTO CUANDO SE APRIETA LA TECLA ENTER
    document.getElementById("btn_start").addEventListener("click", ()=>{
        iniciar();
    });

    let btnStartGameOver = document.getElementById("btn_start_gameOver");

    btnStartGameOver.addEventListener("click", ()=>{
        viewPantalla.ocultarPantallaGameOver();
        viewPantalla.mostrarSegundaPantalla();
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
        btnFondo2.classList.remove("enc_titulo_hover");
        btnFondo1.classList.add("enc_titulo_hover");
    });
    btnFondo2.addEventListener("click", ()=>{
        viewPantalla.cambiarAFondo2(arrayFondos);
        btnFondo1.classList.remove("enc_titulo_hover");
        btnFondo2.classList.add("enc_titulo_hover");
    });

    btnFondo1.addEventListener("mouseenter", ()=>{
        console.log("hover");
        btnFondo2.classList.remove("enc_titulo_hover");
        btnFondo1.classList.add("enc_titulo_hover");
    });
    btnFondo2.addEventListener("mouseenter", ()=>{
        btnFondo1.classList.remove("enc_titulo_hover");
        btnFondo2.classList.add("enc_titulo_hover");
    });
    ///////////MOVIMIENTOS DEL PERSONAJE///////////////////////
    document.addEventListener('keydown',accionesDeTeclas);
    document.addEventListener('keyup',caminarDespuesRoll);

    function accionesDeTeclas(e){
        if(e.key == "Enter"){
            if(viewPantalla.getPantallaActiva()){
               iniciar();
            }else if (viewPantalla.getPantallaGameOverActiva()){
                viewPantalla.ocultarPantallaGameOver();
            }else if(!viewPantalla.getPantallaActiva()  && !inicioUnico){
                inicioUnico = true;
                viewPantalla.mostrarSegundaPantalla();
                btnFondo1.click();
            }
        }else if(e.key == "ArrowUp" && viewPantalla.getPantallaActiva() ){
            btnFondo1.click();
        }else if(e.key == "ArrowDown" && viewPantalla.getPantallaActiva() ){
            btnFondo2.click();
        }else if(personaje.canMove()){
            if(e.key == "ArrowUp" ){
                controlDivPersonaje.saltar();
            }else if(e.key == "ArrowDown"){
                controlDivPersonaje.agachar();
            }
        }
    }

    function caminarDespuesRoll(e){
        if(e.key == "ArrowDown"){
            if(personaje.canMove()){
                controlDivPersonaje.caminarDespuesRoll(e);
            }
        }
    }

});

