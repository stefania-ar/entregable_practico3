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
            }
            //console.log(personaje.getPosicion());
           // console.log(" ");
            this.personaje.setPosicion();
            this.setearPosicionesObstaculos();

            //SI HACEMOS UN FOR / WHILE SE SOBRECARGA LA CAPACIDAD DE MI POBRE COMPUTADORA Y ESTALLA TODO POR LOS AIRES
            let obstaculoEnRango = this.getObstaculoEnRango();

            if(obstaculoEnRango != null){
                if(obstaculoEnRango.chocaConPersonaje(this.personaje)){
                    if(obstaculoEnRango.esColeccionable()){
                        if(!obstaculoEnRango.getSumado()){
                            this.puntos= this.puntos +this.puntosPorColeccionable;
                            console.log(this.puntos);
                            obstaculoEnRango.setSumado(true);
                            //HAY QUE HACER: ANIMAR COLECCIONABLE, TIENE QUE DESAPARECER
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
        let obs= this.obstaculos[0];
        let obs1= this.obstaculos[1];
        let obs2 = this.obstaculos[2];
        let col1 =this.obstaculos[3];
        let col2 =this.obstaculos[4];
        if(obs.getEnRango()){
            return obs;
        }else if(obs1.getEnRango()){
            return obs1;
        }else if(obs2.getEnRango()){
            return obs2;
        }else if(col1.getEnRango()){
            return col1;
        }else if (col2.getEnRango()){
            return col2;
        }
        else return null;
    }



}