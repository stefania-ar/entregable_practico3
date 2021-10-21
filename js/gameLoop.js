class GameLoop {
    constructor(personaje, arrayObs, arrayObsAire, controlGame, viewPantalla) {
        this.personaje = personaje;
        this.obstaculos = this.crearObjetoObstaculos(arrayObs, arrayObsAire);
        this.end = false;
        this.xPantalla= window.innerWidth /3 ;
        this.controlGame = controlGame;
        this.viewPantalla = viewPantalla;
    }

    crearObjetoObstaculos(arrayObs, arrayObsAire){
        let obstaculos= [];
        arrayObs.forEach(element => {
            obstaculos.push( new ObstaculoTierra(element));
        });
        arrayObsAire.forEach(element => {
            obstaculos.push( new ObstaculoAire(element));
        });
        return obstaculos;
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
                    this.end= true;
                    console.log("es el fin? "+ this.end);
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
        if(obs.getEnRango()){
            return obs;
        }else if(obs1.getEnRango()){
            return obs1;
        }else if(obs2.getEnRango()){
            return obs2;
        }else return null;
    }



}