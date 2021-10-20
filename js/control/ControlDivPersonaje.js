class ControlDivPersonaje{
    constructor(divPersonaje){
        this.divPersonaje = divPersonaje;
        this.viewPersonaje = new ViewPersonaje(divPersonaje);
        this.salta = true;
        this.down = true;
        this.roll = false;
    }

    movimiento(e) {
        if(e.key == "ArrowUp" && this.salta){
            //salta
            //false quiere decir que ya está saltando
            this.salta = false;
            this.viewPersonaje.salta();
            console.log(this.viewPersonaje);
            setTimeout(this.caminar,1000);
        }else if(e.key == "ArrowDown" && this.down && this.salta){//se pregunta por si está abilitado para saltar si no lo está que no se agache
            //corto la caminata despues de saltar
            //se agacha
            this.down = false;
            this.viewPersonaje.down();
            console.log(this.viewPersonaje);
            //empieza a rodar
            setTimeout(this.rodar,250);
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
        console.log(this.viewPersonaje);
        this.viewPersonaje.camina();
    }

    caminarDespuesRoll(e){
        if(e.key == "ArrowDown"){
            this.viewPersonaje.rollUp();
            setTimeout(this.caminar,300);
        }
    }
}