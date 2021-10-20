class ControlDivObstaculos{
    constructor(arrayDivSuelo, arrayDivAire, tiempoAnimacion, viewDivObstaculo){
        this.tiempoAnimacion = tiempoAnimacion*1000;
        this.crearAtributos(arrayDivSuelo, arrayDivAire);
        this.ViewAnimacion = viewDivObstaculo;
        //this.secuenciaDivs = this.secuenciaAnimacion();
        //clearTimeout(this.secuenciaDivs);
        this.secuenciaDivs = null;
        this.empezarAnimacion= null;
        this.time1=null;
        this.time2=null;
        this.time3=null;
        this.time4=null;
        this.time5=null;
        this.timeFinal =null;
    }

    animarObstaculos(){
        this.secuenciaDivs = setTimeout( this.secuenciaAnimacion(), 0);
        console.log(this.secuenciaDivs);
    }

    detenerAnimacion(){
        //console.log(this.secuenciaDivs);
        clearTimeout(this.secuenciaDivs);
        clearTimeout(this.time1);
        clearTimeout(this.time2);
        clearTimeout(this.time3);
        clearTimeout(this.time4);
        clearTimeout(this.time5);
        clearTimeout(this.timeFinal);
    }
    
    crearAtributos(arrayDivSuelo, arrayDivAire){
        if(arrayDivSuelo.length > 0){
            this.divSuelo1 = arrayDivSuelo[0];
            this.divSuelo2 = arrayDivSuelo[1];
        }
        if(arrayDivAire.length > 0){
            this.divAire1 = arrayDivAire[0];
            /*this.divAire2 = arrayDivAire[1];
            this.animadoAire2 = false;*/
        }
    }

    cleanTimesOut(){}

    secuenciaAnimacion(){
        ////////////////SUELO///////////////////
        //primer obstaculo de suelo
            //aplica la animación y esta inicia
        this.time1=  setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divSuelo1, this.tiempoAnimacion)}, 0);
            //remueve la animacion para poder aplicarse devuelta más tarde
            setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divSuelo1);}, this.tiempoAnimacion);//4000 tiempoAnimacion->4
        ////////////////SUELO///////////////////
        //segundo obstaculo de suelo
            //aplica la animación y esta inicia
        this.time2=    setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divSuelo2, this.tiempoAnimacion);}, this.tiempoAnimacion/2);//2000 tiempoAnimacion->4
            //remueve la animacion para poder aplicarse devuelta más tarde
            setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divSuelo2);}, this.tiempoAnimacion + 1500);//5500 tiempoAnimacion->4
        ////////////////AIRE///////////////////
        //tercer obstaculo de aire
            //aplica la animación y esta inicia
        this.time3=    setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divAire1, this.tiempoAnimacion)}, this.tiempoAnimacion);//4000 tiempoAnimacion->4
            //remueve la animación para poder aplicarse devuelta más tarde
            setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divAire1);}, this.tiempoAnimacion*2);//8000 tiempoAnimacion->4
        ////////////////SUELO///////////////////
        //cuarto obstaculo de suelo
            //aplica la animación y esta inicia
            this.time4=    setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divSuelo1, this.tiempoAnimacion);}, (this.tiempoAnimacion*2)-1000);//7000 tiempoAnimacion->4
            //remueve la animacion para poder aplicarse devuelta más tarde
            setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divSuelo1);}, (this.tiempoAnimacion*3)-1000);//11000 tiempoAnimacion->4
        ////////////////AIRE///////////////////
        //quinto obstaculo de aire
            //aplica la animación y esta inicia
            this.time5=    setTimeout(()=> {this.ViewAnimacion.aplicarAnimacion(this.divAire1, this.tiempoAnimacion);}, (this.tiempoAnimacion*2)+1000);//9000 tiempoAnimacion->4
            //remueve la animacion para poder aplicarse devuelta más tarde
        this.timeFinal=    setTimeout(()=> {this.ViewAnimacion.detenerAnimacion(this.divAire1);
                //vuelve a ejecutar la misa secuencia de animación
            this.secuenciaAnimacion();}, (this.tiempoAnimacion*3)+1000);//13000 tiempoAnimacion->4
            
        }


}