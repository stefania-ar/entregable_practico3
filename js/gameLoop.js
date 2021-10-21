class GameLoop {
    constructor(personaje, controlGame, viewPantalla, controlObs) {
        this.personaje = personaje;
        this.obstaculos = controlObs.getObstaculos();
        this.end = false;
        this.xPantalla= window.innerWidth /3 ;
        this.controlGame = controlGame;
        this.viewPantalla = viewPantalla;
        this.puntos =0;
        this.puntosPorColeccionable =5;
        this.controlObs = controlObs;
    }

    //Probar que salte bien despues de rodar
    gameLoop() {
        //chequea posiciones de los divs
        let game = setInterval(() => {
            if (this.end) {
                clearInterval(game);
                this.controlGame.detainAll();
                this.viewPantalla.mostrarPantalla();
                this.puntos = 0;
            }
            this.personaje.setPosicion();
            this.setearPosicionesObstaculos();

            let obstaculoEnRango = this.getObstaculoEnRango();

            if(obstaculoEnRango != null){
                if(obstaculoEnRango.chocaConPersonaje(this.personaje)){
                    if(obstaculoEnRango.esColeccionable()){
                        if(!obstaculoEnRango.getSumado()){
                            this.puntos= this.puntos +this.puntosPorColeccionable;
                            console.log(this.puntos);
                            obstaculoEnRango.setSumado(true);
                            this.controlObs.animarColeccionable(obstaculoEnRango);
                        }
                    }
                    else{
                        this.end= true;
                        console.log("es el fin del juego? "+ this.end);
                    }
                }
            }
        }, 100);
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
}