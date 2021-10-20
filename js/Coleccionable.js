class Coleccionable extends ElementoAnimado{
    
    constructor(div){
        super(div);
    }

    esColeccionable(){
        return true;
    }

    chocaConPersonaje(personaje){
        if( personaje.getPosicion().yInicial < this.yFinal || personaje.getPosicion().yFinal -30 > this.yInicial){
            return true;
        } else return false;
    }
  
}