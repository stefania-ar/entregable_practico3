class ObstaculoAire extends ElementoAnimado{

    constructor(div){
        super(div);
    }

    chocaConPersonaje(personaje){
        if( personaje.getPosicion().yInicial < this.yFinal ){
            return true;
        } else return false;
    }

    esColeccionable(){
        return false;
    }


}