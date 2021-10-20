class ElementoAnimado{

    constructor(div){
        this.div = div;
        this.setPosicion();
        this.enRangodeJuego= false;
    }

    setPosicion(){
        let posicion = this.div.getBoundingClientRect();
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

    setEnRango(personaje){
        if(this.xInicial < personaje.getPosicion().xFinal -50 &&
        this.xInicial > personaje.getPosicion().xInicial ){
            this.enRangodeJuego = true;
        }else this.enRangodeJuego= false;
    }

    getEnRango(){
        return this.enRangodeJuego;
    }

    getDiv(){
        return this.div;
    }

    chocaConPersonaje(personaje){};

    esColeccionable(){};
}