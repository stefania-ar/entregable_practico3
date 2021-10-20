class ControlGame{

    constructor(player, obsTierra, obsAire, viewDivObstaculos, controlDivObs){
        //MOSTRAR EL GAME OVER CON RESULTADOS, RESTART, OPCION DE HACER CAMBIOS
        this.personaje= player;
        this.obstaculos = this.joinObstaculos(obsAire, obsTierra);
        this.viewDivObstaculos = viewDivObstaculos;
        this.controlDivObs= controlDivObs;
    }


    disablePlayer(){
        this.personaje.setAvailableToMove(false);
    }

    disableObstaculos(){
        //detiene la secuencia de settimeOut de animación
        this.controlDivObs.detenerAnimacion();

        //la vista le saca la clase de animación
        console.log("entra en control");
        this.obstaculos.forEach(element => {
            this.viewDivObstaculos.detenerAnimacion(element);
            
        });
            
    }

    joinObstaculos(obsAire, obsTierra){
        let obstaculos= obsTierra.concat(obsAire);
        return obstaculos;
    }

    detainAll() {
        this.disablePlayer();
        this.disableObstaculos();
    }

}