class ViewPantalla{

    constructor(div, pPuntos, pFinalPuntos, pTiempo, pFinalTiempo){
        this.div = div;
        this.pPuntos = pPuntos;
        this.pFinalPuntos = pFinalPuntos;
        this.pTiempo = pTiempo;
        this.pFinalTiempo = pFinalTiempo;
    }

    mostrarPantalla(){
        this.div.classList.remove("hiden");
        this.div.classList.add("show");
    }

    ocultarPantalla(){
        this.div.classList.remove("show");
        this.div.classList.add("hiden");
    }

    mostrarPuntos(puntos){
        let puntosString;
        if(puntos < 10 && puntos >= 0){
            puntosString = "000"+puntos;
        }else if(puntos < 100 && puntos >= 10){
            puntosString = "00"+puntos;
        }else if(puntos < 1000 && puntos >= 100){
            puntosString = "0"+puntos;
        }else{
            puntosString = puntos;
        }
        this.pPuntos.innerHTML = puntosString;
    }

    ponerDatosEnPantalla(){
        this.pFinalPuntos.innerHTML = this.pPuntos.innerHTML;
        this.pFinalTiempo.innerHTML = this.pTiempo.innerHTML;
    }

    limpiarPuntosYTiempo(){
        this.pPuntos.innerHTML = "0000";
        this.pTiempo.innerHTML = "5:00";
    }

}