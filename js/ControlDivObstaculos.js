class ControlDivObstaculos{
    constructor(arrayDivSuelo, arrayDivAire, tiempoAnimacion){
        this.tiempoAnimacion = tiempoAnimacion*1000;
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
            /*this.divAire2 = arrayDivAire[1];
            this.animadoAire2 = false;*/
        }
    }

    secuenciaAnimacion(){
        ////////////////SUELO///////////////////
        //primer obstaculo de suelo
            //aplica la animación y esta inicia
            setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divSuelo1, this.tiempoAnimacion)}, 0);
            //remueve la animacion para poder aplicarse devuelta más tarde
            setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divSuelo1);}, this.tiempoAnimacion);//4000 tiempoAnimacion->4
        ////////////////SUELO///////////////////
        //segundo obstaculo de suelo
            //aplica la animación y esta inicia
            setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divSuelo2, this.tiempoAnimacion);}, this.tiempoAnimacion/2);//2000 tiempoAnimacion->4
            //remueve la animacion para poder aplicarse devuelta más tarde
            setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divSuelo2);}, this.tiempoAnimacion+(1000*2));//6000 tiempoAnimacion->4
        ////////////////AIRE///////////////////
        //tercer obstaculo de aire
            //aplica la animación y esta inicia
            setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divAire1, this.tiempoAnimacion)}, this.tiempoAnimacion);//4000 tiempoAnimacion->4
            //remueve la animación para poder aplicarse devuelta más tarde
            setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divAire1);}, this.tiempoAnimacion*2);//8000 tiempoAnimacion->4
        ////////////////SUELO///////////////////
        //cuarto obstaculo de suelo
            //aplica la animación y esta inicia
            setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divSuelo1, this.tiempoAnimacion);}, (this.tiempoAnimacion*2)-1000);//7000 tiempoAnimacion->4
            //remueve la animacion para poder aplicarse devuelta más tarde
            setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divSuelo1);}, (this.tiempoAnimacion*3)-1000);//11000 tiempoAnimacion->4
        ////////////////AIRE///////////////////
        //quinto obstaculo de aire
            //aplica la animación y esta inicia
            setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divAire1, this.tiempoAnimacion);}, (this.tiempoAnimacion*2)+1000);//9000 tiempoAnimacion->4
            //remueve la animacion para poder aplicarse devuelta más tarde
            setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divAire1);
                //vuelve a ejecutar la misa secuencia de animación
                this.secuenciaAnimacion();}, (this.tiempoAnimacion*3)+1000);//13000 tiempoAnimacion->4
    }


}