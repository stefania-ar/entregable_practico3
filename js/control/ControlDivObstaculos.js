class ControlDivObstaculos{
    constructor(arrayDivSuelo, arrayDivAire, tiempoAnimacion, viewDivObstaculo, widthPantalla){
        this.widthPantalla = widthPantalla;
        this.tiempoAnimacion = tiempoAnimacion*1000;
        this.viewDivObstaculo = viewDivObstaculo;
        //crea atributos para cada uno de los divs de forma individual
        //se usan en la animación
        this.crearAtributos(arrayDivSuelo, arrayDivAire);
        //junto todos los divs para luego recorrerlos y aplicar algo a todos por igual
        //se usa cuando se quiere desabilitar todo
        this.joinObstaculos(arrayDivSuelo, arrayDivAire);
        this.ubicarDivsEnPantalla();
        this.secuenciaDivs = null;
        this.time1=null;
        this.time2=null;
        this.time3=null;
        this.time4=null;
        this.time5=null;

        this.timeFinal1=null;
        this.timeFinal2=null;
        this.timeFinal3=null;
        this.timeFinal4=null;
        this.timeFinal5=null;
    }

    ubicarDivsEnPantalla(){
        this.viewDivObstaculo.setTranslateX(this.obstaculos, this.widthPantalla);
    }

    crearAtributos(arrayDivSuelo, arrayDivAire){
        if(arrayDivSuelo.length > 0){
            this.divSuelo1 = arrayDivSuelo[0];
            this.divSuelo2 = arrayDivSuelo[1];
        }
        if(arrayDivAire.length > 0){
            this.divAire1 = arrayDivAire[0];
        }
    }

    joinObstaculos(arrayDivSuelo, arrayDivAire){
        this.obstaculos= arrayDivSuelo.concat(arrayDivAire);
    }

    animarObstaculos(){
        this.secuenciaDivs = setTimeout( this.secuenciaAnimacion(), 0);
    }

    detenerAnimacion(){
        clearTimeout(this.secuenciaDivs);
        clearTimeout(this.time1);
        clearTimeout(this.time2);
        clearTimeout(this.time3);
        clearTimeout(this.time4);
        clearTimeout(this.time5);
        clearTimeout(this.timeFinal1);
        clearTimeout(this.timeFinal2);
        clearTimeout(this.timeFinal3);
        clearTimeout(this.timeFinal4);
        clearTimeout(this.timeFinal5);
        //la vista le saca la clase de animación a todos los obstaculos
        this.obstaculos.forEach(element => {
            this.viewDivObstaculo.detenerAnimacion(element);
        });
    }

    secuenciaAnimacion(){
        ////////////////SUELO///////////////////
        //primer obstaculo de suelo
            //aplica la animación y esta inicia
        this.time1 = setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.divSuelo1, this.tiempoAnimacion)}, 0);
            //remueve la animacion para poder aplicarse devuelta más tarde
        this.timeFinal1 = setTimeout(()=> {this.viewDivObstaculo.detenerAnimacion(this.divSuelo1);}, this.tiempoAnimacion);//4000 tiempoAnimacion->4
        ////////////////SUELO///////////////////
        //segundo obstaculo de suelo
            //aplica la animación y esta inicia
        this.time2 = setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.divSuelo2, this.tiempoAnimacion);}, this.tiempoAnimacion/2);//2000 tiempoAnimacion->4
            //remueve la animacion para poder aplicarse devuelta más tarde
        this.timeFinal2 = setTimeout(()=> {this.viewDivObstaculo.detenerAnimacion(this.divSuelo2);}, this.tiempoAnimacion + 1500);//5500 tiempoAnimacion->4
        ////////////////AIRE///////////////////
        //tercer obstaculo de aire
            //aplica la animación y esta inicia
        this.time3=    setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.divAire1, this.tiempoAnimacion)}, this.tiempoAnimacion);//4000 tiempoAnimacion->4
            //remueve la animación para poder aplicarse devuelta más tarde
        this.timeFinal3 = setTimeout(()=> {this.viewDivObstaculo.detenerAnimacion(this.divAire1);}, this.tiempoAnimacion*2);//8000 tiempoAnimacion->4
        ////////////////SUELO///////////////////
        //cuarto obstaculo de suelo
            //aplica la animación y esta inicia
        this.time4 = setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.divSuelo1, this.tiempoAnimacion);}, (this.tiempoAnimacion*2)-1000);//7000 tiempoAnimacion->4
            //remueve la animacion para poder aplicarse devuelta más tarde
        this.timeFinal4 = setTimeout(()=> {this.viewDivObstaculo.detenerAnimacion(this.divSuelo1);}, (this.tiempoAnimacion*3)-1000);//11000 tiempoAnimacion->4
        ////////////////AIRE///////////////////
        //quinto obstaculo de aire
            //aplica la animación y esta inicia
        this.time5 = setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.divAire1, this.tiempoAnimacion);}, (this.tiempoAnimacion*2)+1000);//9000 tiempoAnimacion->4
            //remueve la animacion para poder aplicarse devuelta más tarde
        this.timeFinal5 = setTimeout(()=> {this.viewDivObstaculo.detenerAnimacion(this.divAire1);
                //vuelve a ejecutar la misa secuencia de animación
            this.secuenciaAnimacion();}, (this.tiempoAnimacion*3)+1000);//13000 tiempoAnimacion->4
        }


}