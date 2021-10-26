class ControlDivPersonaje{
    constructor(divPersonaje, viewPersonaje){
        this.divPersonaje = divPersonaje;
        this.viewPersonaje = viewPersonaje;
        this.salta = true;
        this.down = true;
        this.roll = false;
        this.setTimeSalta = null;
        this.seTimeOutcaminarDespuesRoll = null;
    }

    saltar(){
        if(this.salta){
            //salta
            //false quiere decir que ya está saltando
            this.salta = false;
            this.viewPersonaje.salta();
            this.setTimeSalta = setTimeout(()=>{this.caminar();},1000);
        }
    }

    agachar(){
        if(this.down && this.salta){
            this.down = false;
            this.viewPersonaje.down();
            //empieza a rodar
            setTimeout(()=>{this.rodar();},250);
        }
    }

    rodar(){
        //pregunta que esté agachado
        if(!this.down){
            this.roll = true;
            this.viewPersonaje.rodar();
        }
    }

    caminar(){
        //listo para saltar
        this.salta = true;
        //listo para agacharse
        this.down = true;
        //no está rodando
        this.roll = false;
        this.viewPersonaje.camina();
    }

    caminarDespuesRoll(){
        this.viewPersonaje.rollUp();
        setTimeout(()=>{this.caminar();},300);
    }

    choca(){
        this.viewPersonaje.choca();
        clearInterval(this.setTimeSalta);
        clearInterval(this.seTimeOutcaminarDespuesRoll);
        setTimeout(()=>{this.caminar();}, 1000);
    }
}