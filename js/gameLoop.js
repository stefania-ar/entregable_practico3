class GameLoop {
    constructor(personaje, controlGame, viewPantalla, controlObs, controlDivPersonaje) {
        this.personaje = personaje;
        this.obstaculos = controlObs.getObstaculos();
        this.end = false;
        this.xPantalla= window.innerWidth /3 ;
        this.controlGame = controlGame;
        this.viewPantalla = viewPantalla;
        this.puntos =0;
        this.puntosPorColeccionable =5;
        this.controlObs = controlObs;
        this.controlDivPersonaje = controlDivPersonaje;
    }

    //Probar que salte bien despues de rodar
    gameLoop() {
        //chequea posiciones de los divs
        let game = setInterval(() => {
            this.personaje.setPosicion();
            this.setearPosicionesObstaculos();

            let obstaculoEnRango = this.getObstaculoEnRango();

            if(obstaculoEnRango != null){
                if(obstaculoEnRango.chocaConPersonaje(this.personaje)){
                    if(obstaculoEnRango.esColeccionable()){
                        if(!obstaculoEnRango.getSumado()){
                            this.puntos= this.puntos +this.puntosPorColeccionable;
                            //cambiar en el DOM puntos
                            this.viewPantalla.mostrarPuntos(this.puntos);
                            obstaculoEnRango.setSumado(true);
                            this.controlObs.animarColeccionable(obstaculoEnRango);
                        }
                    }else{
                        this.end = true;
                    }
                }
            }
            if (this.end || this.controlGame.getEndTimer()) {
                this.controlDivPersonaje.choca();
                clearInterval(game);
                this.viewPantalla.ponerDatosEnPantallaGameOver(this.controlGame.calcularTiempoJugado());
                this.controlGame.detainAll();
                setTimeout(()=> {this.viewPantalla.mostrarPantallaGameOver()}, 1000);
                this.puntos = 0;
            }
        }, 100);
    }

    iniciarTimer(){
        this.controlGame.startTimer();
    }

    setGameFinished(bool){
        this.end= bool;
    }

    setearPosicionesObstaculos(){
        this.obstaculos.forEach(element => {
            element.setPosicion();
            element.setEnRango(this.personaje, this.xPantalla);
        });
    }

    getObstaculoEnRango(){
        let obsEnRango = null;
        for(let i = 0; i< this.obstaculos.length; i++){
            if(this.obstaculos[i].getEnRango()){
                obsEnRango = this.obstaculos[i];
                break;
            }
        }
        return obsEnRango;
    }

    getEnd(){
        return this.end;
    }
}