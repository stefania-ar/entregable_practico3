class ControlGame{

    constructor(player, viewDivObstaculos, controlDivObs, pTiempo){
        //MOSTRAR EL GAME OVER CON RESULTADOS, RESTART, OPCION DE HACER CAMBIOS
        this.personaje= player;
        this.viewDivObstaculos = viewDivObstaculos;
        this.controlDivObs= controlDivObs;
        this.minutos = 0;
        this.segundos = 10;
        this.m=this.minutos;
        this.s=this.segundos;
        this.txt = pTiempo;
        this.timer;
        this.endTimer = false;
    }

    disablePlayer(){
        //desabilita movimientos del personaje
        this.personaje.setAvailableToMove(false);
    }

    disableObstaculos(){
        //detiene la secuencia de settimeOut de animación
        this.controlDivObs.detenerAnimacion();
    }

    detainAll() {
        this.disablePlayer();
        this.disableObstaculos();
        this.limpiarTimer();
        this.setTimer();
        this.endTimer = false;
    }

    StartAll(){
        this.personaje.setAvailableToMove(true);
        this.controlDivObs.animarObstaculos();
    }

    startTimer() {
        this.timer = setInterval(()=>{
            if(this.m ==0 && this.s==0){
                this.endTimer = true;
                clearInterval(this.timer);
            }else{
                this.endTimer = false;
                if(this.m>=0){
                    if(this.s== 0){
                        this.m = this.m-1;
                        this.s= 60;
                    }
                    this.s= this.s-1;
                    if (this.s < 10) {
                        this.txt.innerHTML = this.m+ ":" + "0"+this.s;
                    }else{
                        this.txt.innerHTML =  this.m + ":" + this.s;
                    }
                }
            }
        }, 1300);
    };

    setTimer(){
        this.m = this.minutos;
        this.s = this.segundos;
    }

    limpiarTimer(){
        clearInterval(this.timer);
    }
    getEndTimer(){
        return this.endTimer;
    }

}