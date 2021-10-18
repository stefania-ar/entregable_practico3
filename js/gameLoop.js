class GameLoop {
    constructor(divPersonaje, arrayObs, arrayObsAire) {
        this.personaje = new Personaje(divPersonaje);
        this.obstaculos = this.crearObstaculos(arrayObs, arrayObsAire);
        this.end = false;
        this.xPantalla= window.innerWidth /3 ;
    }

    //Probar que salte bien despues de rodar
    gameLoop() {
        //chequea posiciones de los divs
        let game = setInterval(() => {
            if (this.end) {
                clearInterval(game);
            }
            //console.log(personaje.getPosicion());
           // console.log(" ");
            this.personaje.setPosicion();
            this.setearPosicionesObstaculos();
            let obs= this.obstaculos[0];
            if(obs.getEnRango()){
                if(obs.getTipo() === "suelo"){
                    console.log("choca? "+this.personaje.chocaObstaculoXSuelo(obs.getPosicion()));
                }//else
            }
            //console.log(this.obstaculo1.getPosicion());

            /**if (this.rangoJuego() != null) {
                console.log(this.rangoJuego());
                 if (this.personaje.choca(this.obstaculo1.getPosicion())) {
                    this.end = true;
                }
            } */
        }, 100);
    }


    crearObstaculos(arrayObs, arrayObsAire){
        let obstaculos= [];
        arrayObs.forEach(element => {
            obstaculos.push( new Obstaculo(element, "suelo"));
        });
        arrayObsAire.forEach(element => {
            obstaculos.push( new Obstaculo(element, "aire"));
        });
        return obstaculos;
    }

    setearPosicionesObstaculos(){
        this.obstaculos.forEach(element => {
            element.setPosicion();
            element.setEnRango(this.personaje, this.xPantalla);
        });
    }

}