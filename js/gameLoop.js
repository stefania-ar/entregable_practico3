class GameLoop {
    constructor(personaje, arrayObs, arrayObsAire) {
        this.personaje = personaje;
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

            //SI HACEMOS UN FOR / WHILE SE SOBRECARGA LA CAPACIDAD DE MI POBRE COMPUTADORA Y ESTALLA TODO POR LOS AIRES
            let obstaculoEnRango = this.getObstaculoEnRango();

            if(obstaculoEnRango != null){
                if(obstaculoEnRango.chocaConPersonaje(this.personaje)){
                    this.end= true;
                    console.log("es el fin? "+ this.end);
                }
            }
        }, 100);
    }


    crearObstaculos(arrayObs, arrayObsAire){
        let obstaculos= [];
        arrayObs.forEach(element => {
            obstaculos.push( new ObstaculoTierra(element));
        });
        arrayObsAire.forEach(element => {
            obstaculos.push( new ObstaculoAire(element));
        });
        return obstaculos;
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
        if(obs.getEnRango()){
            return obs;
        }else if(obs1.getEnRango()){
            return obs1;
        }else if(obs2.getEnRango()){
            return obs2;
        }else return null;
    }



}