class ControlDivObstaculos{
    constructor(arrayDivSuelo, arrayDivAire){
        this.crearAtributos(arrayDivSuelo, arrayDivAire);
        this.ViewAnimacion = new ViewDivObstaculo();
    }

    animarObstaculos(){
        this.secuenciaAnimacion();
    }

    crearAtributos(arrayDivSuelo, arrayDivAire){
        if(arrayDivSuelo.length > 0){
            this.divSuelo1 = arrayDivSuelo[0];
            this.animadoSuelo1 = false;
            this.divSuelo2 = arrayDivSuelo[1];
            this.animadoSuelo2 = false;
        }
        if(arrayDivAire.length > 0){
            this.divAire1 = arrayDivAire[0];
            this.animadoAire1 = false;
            this.divAire2 = arrayDivAire[1];
            this.animadoAire2 = false;
        }
    }

    secuenciaAnimacion(){
        ////////////////SUELO///////////////////
        //primer obstaculo de suelo
            //aplica la animación y esta inicia
            setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divSuelo1)}, 0);
            //remueve la animacion para poder aplicarse devuelta más tarde
            setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divSuelo1);}, 4000);
        ////////////////SUELO///////////////////
        //segundo obstaculo de suelo
            //aplica la animación y esta inicia
            setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divSuelo2);}, 2000);
            //remueve la animacion para poder aplicarse devuelta más tarde
            setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divSuelo2);}, 6000);
        ////////////////AIRE///////////////////
        //tercer obstaculo de aire
            //aplica la animación y esta inicia
            setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divAire1)}, 4000);
            //remueve la animación para poder aplicarse devuelta más tarde
            setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divAire1);}, 8000);
        ////////////////SUELO///////////////////
        //cuarto obstaculo de suelo
            //aplica la animación y esta inicia
            setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divSuelo1);}, 7000);
            //remueve la animacion para poder aplicarse devuelta más tarde
            setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divSuelo1);}, 11000);
        ////////////////AIRE///////////////////
        //quinto obstaculo de aire
            //aplica la animación y esta inicia
            setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divAire1);}, 9000);
            //remueve la animacion para poder aplicarse devuelta más tarde
            setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divAire1);
                //vuelve a ejecutar la misa secuencia de animación
                this.secuenciaAnimacion();}, 13000);
    }


}