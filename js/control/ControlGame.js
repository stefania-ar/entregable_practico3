class ControlGame{

    constructor(player, viewDivObstaculos, controlDivObs){
        //MOSTRAR EL GAME OVER CON RESULTADOS, RESTART, OPCION DE HACER CAMBIOS
        this.personaje= player;
        this.viewDivObstaculos = viewDivObstaculos;
        this.controlDivObs= controlDivObs;
    }

    disablePlayer(){
        //desabilita movimientos delpersonaje
        this.personaje.setAvailableToMove(false);
    }

    disableObstaculos(){
        //detiene la secuencia de settimeOut de animación
        this.controlDivObs.detenerAnimacion();
    }

    detainAll() {
        this.disablePlayer();
        this.disableObstaculos();
    }

    StartAll(){
        this.personaje.setAvailableToMove(true);
        this.controlDivObs.animarObstaculos();
    }

}