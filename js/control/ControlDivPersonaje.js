class ControlDivPersonaje{
    constructor(divPersonaje, viewPersonaje){
        this.divPersonaje = divPersonaje;
        this.viewPersonaje = viewPersonaje;
        this.listoParaSaltar = true;
        this.down = true;
        this.roll = false;
        this.setTimeSalta = null;
        this.seTimeOutcaminarDespuesRoll = null;
        this.setTimeAgachar = null;

    }

    saltar(){
        if(this.listoParaSaltar){
            //salta
            //false quiere decir que ya está saltando
            this.listoParaSaltar = false;
            clearTimeout(this.setTimeAgachar);
            clearTimeout(this.seTimeOutcaminarDespuesRoll);
            this.viewPersonaje.salta();
            this.setTimeSalta = setTimeout(()=>{this.listoParaSaltar= true; this.caminar();},1000);
            
        }
    }

    agachar(){
        if(this.down && this.listoParaSaltar){
            this.down = false;
            clearTimeout(this.setTimeSalta);
            this.viewPersonaje.down();
            //empieza a rodar
           this.setTimeAgachar= setTimeout(()=>{this.rodar();},250);
           this.listoParaSaltar= true;
           //poner que este listo pa saltar
        }
    }

    rodar(){
        //pregunta que esté agachado
        if(!this.down){
            this.roll = true;
            this.listoParaSaltar = true; //listo para saltar
            this.viewPersonaje.rodar();
        }
    }

    caminar(){
        //listo para saltar
        this.listoParaSaltar = true;
        //listo para agacharse
        this.down = true;
        //no está rodando
        this.roll = false;
        this.viewPersonaje.camina();
    }

    caminarDespuesRoll(){
        this.listoParaSaltar= true;
        this.viewPersonaje.rollUp();
        clearTimeout(this.setTimeAgachar);
        this.seTimeOutcaminarDespuesRoll= setTimeout(()=>{this.caminar();},300);
    }

    choca(){
        this.viewPersonaje.choca();
        clearTimeout(this.setTimeSalta);
        clearTimeout(this.seTimeOutcaminarDespuesRoll);
        setTimeout(()=>{this.caminar();}, 1000);
    }
}