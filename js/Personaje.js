class Personaje{

    constructor(div){
        this.personaje = div;
        this.setPosicion();
    }

    setPosicion(){
        let posicion = this.personaje.getBoundingClientRect();
        this.width = posicion.width;
        this.height = posicion.height;
        this.xInicial = posicion.x;//posicion.left;
        this.xFinal = posicion.right;
        this.yInicial = posicion.y;//posicion.top
        this.yFinal = posicion.bottom;
    }

    getPosicion(){
        return { xInicial : this.xInicial, xFinal : this.xFinal, yInicial : this.yInicial,  yFinal : this.yFinal};
    }

    //esto chequea en forma vertical
    chocaObstaculoXSuelo(posicionObs){
        if( this.yFinal -30 > posicionObs.yInicial ){
            return true;
        } else return false;
    }
}