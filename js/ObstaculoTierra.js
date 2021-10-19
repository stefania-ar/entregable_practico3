class ObstaculoTierra extends Obstaculo{

    constructor(div){
        super(div);
    }

    //SOLO HACEMOS CHEQUEO DE FORMA VERTICAL
    chocaConPersonaje(personaje){
        if( personaje.getPosicion().yFinal -30 > this.yInicial ){
            return true;
        } else return false;
    }

        

}