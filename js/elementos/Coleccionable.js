class Coleccionable extends ElementoAnimado{

    constructor(div){
        super(div);
        this.sumado= false;
    }

    esColeccionable(){
        return true;
    }

    chocaConPersonaje(personaje){
        let pYInicial = personaje.getPosicion().yInicial;
        let pYFinal = personaje.getPosicion().yFinal;
        if(pYInicial < this.yFinal && pYFinal > this.yFinal){//AIRE
            return true;
        } else if(pYInicial < this.yInicial && pYFinal > this.yInicial){//TIERRA
            return true;
        }else return false;
    }

    setSumado(bool){
        this.sumado = bool;
    }

    getSumado(){
        return this.sumado;
    }
}