class ControlGame{

    constructor(player){
        //DEBE BLOQUEAR LOS MOVIMIENTOS DEL JUGADOR, QUE NO SE PUEDA AGACHAR, SALTAR PERO SÍ SALTAR
        //MOSTRAR EL GAME OVER CON RESULTADOS, RESTART, OPCION DE HACER CAMBIOS
        //DESAPARECER LOS OBSTACULOS, QUE NO CORRAN
        //ESTO MISMO (QUE NO SE MUEVA) TIENE QUE PASAR AL PRINCIPIO DEL JUEGO
        this.personaje= player;
    }


    disablePlayer(){
        this.personaje.setAvailableToMove(false);
    }

    disableObstaculos(){
        //hacer esto
    }

    //reiniciar puntos y tiempo.


}