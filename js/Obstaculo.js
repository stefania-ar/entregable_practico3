class Obstaculo{
    constructor(div){
        this.obstaculo = div;
        this.setposicion();
    }

    asignarAnimacion(){
        this.div.amination;
    }

    setposicion(){
        var posicion = this.obstaculo.getBoundingClientRect();
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
}