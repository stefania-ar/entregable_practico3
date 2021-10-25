class ViewPantalla{

    constructor(div, pPuntos, pFinalPuntos, pTiempo, pFinalTiempo, pantallaPrin, pantallaSecundaria, btn){
        this.div = div;
        this.pantallaActiva = false;
        this.pPuntos = pPuntos;
        this.pFinalPuntos = pFinalPuntos;
        this.pTiempo = pTiempo;
        this.pFinalTiempo = pFinalTiempo;
        this.pantallaPrin= pantallaPrin;
        this.pantallaSecundaria= pantallaSecundaria;
        this.btn= btn;
    }

    mostrarPantalla(){
        this.div.classList.remove("hiden");
        this.div.classList.add("show");
        this.pantallaActiva = true;
    }

    ocultarPantalla(){
        this.div.classList.remove("show");
        this.div.classList.add("hiden");
        this.pantallaActiva = false;
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

    getPantallaActiva(){
        return this.pantallaActiva;
    }

    mostrarSegundaPantalla(){
        this.pantallaPrin.classList.add("hideClass");
        this.pantallaPrin.classList.remove("pantalla-main");

        this.btn.classList.add("hideClass");

        this.pantallaSecundaria.classList.replace("hideClass", "pantalla-secundaria");
        this.pantallaActiva = true;
    }

    cambiarAFondo1(arrayFondos){
        let i = 9;
        arrayFondos.forEach(fondo => {
            fondo.classList.remove("fondo"+i+"_cambio_2");
            fondo.classList.add("fondo"+i+"_cambio_1");
            i = i-1;
        });
    }

    cambiarAFondo2(arrayFondos){
        let i = 9;
        arrayFondos.forEach(fondo => {
            fondo.classList.remove("fondo"+i+"_cambio_1");
            fondo.classList.add("fondo"+i+"_cambio_2");
            i = i-1;
        });
    }

}