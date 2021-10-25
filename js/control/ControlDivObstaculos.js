class ControlDivObstaculos{
    constructor(arrayDivSuelo, arrayDivAire, tiempoAnimacion, viewDivObstaculo, widthPantalla, divsSuelo, divsAire){
        this.widthPantalla = widthPantalla;
        this.tiempoAnimacion = tiempoAnimacion*1000;
        this.viewDivObstaculo = viewDivObstaculo;
        //junto todos los divs para luego recorrerlos y aplicar algo a todos por igual
        //se usa cuando se quiere desabilitar todo
        this.obstaculos  = this.crearObjetoObstaculos(arrayDivSuelo, arrayDivAire, divsSuelo, divsAire);
        this.ubicarDivsEnPantalla();
        this.secuenciaDivs = null;
        this.time1=null;
        this.time2=null;
        this.time3=null;
        this.time4=null;
        this.time5=null;
        this.time6=null;
        this.time7= null;
        this.time8 = null;

        this.timeFinal1=null;
        this.timeFinal2=null;
        this.timeFinal3=null;
        this.timeFinal4=null;
        this.timeFinal5=null;
        this.timeFinal6=null;
        this.timeFinal7= null;
        this.timeFinal8= null;
    }

    getObstaculos(){
        return this.obstaculos;
    }

    crearObjetoObstaculos(arrayObs, arrayObsAire, arrayColSuelo, arrayColAire){
        let obstaculos= [];
        arrayObs.forEach(element => {
            obstaculos.push( new ObstaculoTierra(element));
        });
        arrayObsAire.forEach(element => {
            obstaculos.push( new ObstaculoAire(element));
        });
        arrayColSuelo.forEach(element => {
            obstaculos.push( new Coleccionable(element));
        });
        arrayColAire.forEach(element => {
            obstaculos.push( new Coleccionable(element));
        });
        return obstaculos;
    }

    ubicarDivsEnPantalla(){
        this.viewDivObstaculo.setTranslateX(this.obstaculos, this.widthPantalla);
    }

    ubicarDivEnPantalla(div){
        let div2 = [];
        div2.push(div);
        this.viewDivObstaculo.setTranslateX(div2, this.widthPantalla);
    }

    animarObstaculos(){
        this.secuenciaDivs = setTimeout( this.secuenciaAnimacion(), 0);
    }

    animarColeccionable(coleccionable){
        this.viewDivObstaculo.animarColeccionable(coleccionable.getDiv());
        setTimeout(()=>{this.viewDivObstaculo.desanimarColeccionable(coleccionable.getDiv());
                        this.ubicarDivEnPantalla(coleccionable);
                        coleccionable.setSumado(false);
        }, 1000);
    };

    detenerAnimacion(){
        clearTimeout(this.secuenciaDivs);
        clearTimeout(this.time1);
        clearTimeout(this.time2);
        clearTimeout(this.time3);
        clearTimeout(this.time4);
        clearTimeout(this.time5);
        clearTimeout(this.time6);
        clearTimeout(this.time7);
        clearTimeout(this.time8);
        clearTimeout(this.timeFinal1);
        clearTimeout(this.timeFinal2);
        clearTimeout(this.timeFinal3);
        clearTimeout(this.timeFinal4);
        clearTimeout(this.timeFinal5);
        clearTimeout(this.timeFinal6);
        clearTimeout(this.timeFinal7);
        clearTimeout(this.timeFinal8);
        //la vista le saca la clase de animación a todos los obstaculos
        this.obstaculos.forEach(element => {
            this.viewDivObstaculo.detenerAnimacion(element.getDiv());
        });
    }

    secuenciaAnimacion(){
        ////////////////SUELO///////////////////
        //primer obstaculo de suelo
            //aplica la animación y esta inicia
        this.time1 = setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[0].getDiv(), this.tiempoAnimacion)}, 0);
            //remueve la animacion para poder aplicarse devuelta más tarde
        this.timeFinal1 = setTimeout(()=> {this.viewDivObstaculo.detenerAnimacion(this.obstaculos[0].getDiv());}, 3000);//4000 tiempoAnimacion->4
        ////////////////SUELO///////////////////
        //segundo obstaculo de suelo
            //aplica la animación y esta inicia
        this.time2 = setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[1].getDiv(), this.tiempoAnimacion);}, 1500);//2000 tiempoAnimacion->4
            //remueve la animacion para poder aplicarse devuelta más tarde
        this.timeFinal2 = setTimeout(()=> {this.viewDivObstaculo.detenerAnimacion(this.obstaculos[1].getDiv());}, 4500);//5500 tiempoAnimacion->4
        //////COLECCIONABLE SUELO//////
        this.time3 =setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[3].getDiv(), this.tiempoAnimacion);}, 3000);
        this.timeFinal3 = setTimeout(()=> {this.viewDivObstaculo.detenerAnimacion(this.obstaculos[3].getDiv());}, 6000);
        ////////////////AIRE///////////////////
        //tercer obstaculo de aire
            //aplica la animación y esta inicia
        this.time4=    setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[2].getDiv(), this.tiempoAnimacion)}, 5500);//4000 tiempoAnimacion->4
            //remueve la animación para poder aplicarse devuelta más tarde
        this.timeFinal4 = setTimeout(()=> {this.viewDivObstaculo.detenerAnimacion(this.obstaculos[2].getDiv());}, 8500);//8000 tiempoAnimacion->4
        //////COLECCIONABLE AIRE//////
        this.time5 =setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[4].getDiv(), this.tiempoAnimacion);}, 6500);
        this.timeFinal5 = setTimeout(()=> {this.viewDivObstaculo.detenerAnimacion(this.obstaculos[4].getDiv());}, 9500);
        ////////////////SUELO///////////////////
        //cuarto obstaculo de suelo
            //aplica la animación y esta inicia
        this.time6 = setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[0].getDiv(), this.tiempoAnimacion);}, 8000);//7000 tiempoAnimacion->4
            //remueve la animacion para poder aplicarse devuelta más tarde
        this.timeFinal6 = setTimeout(()=> {this.viewDivObstaculo.detenerAnimacion(this.obstaculos[0].getDiv());}, 11000);//11000 tiempoAnimacion->4
        ////////////////AIRE///////////////////
        //quinto obstaculo de aire
            //aplica la animación y esta inicia
        this.time7 = setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[2].getDiv(), this.tiempoAnimacion);}, 10000);//9000 tiempoAnimacion->4
            //remueve la animacion para poder aplicarse devuelta más tarde
        this.timeFinal7 = setTimeout(()=> {this.viewDivObstaculo.detenerAnimacion(this.obstaculos[2].getDiv());}, 13000); //(this.tiempoAnimacion*3)+1000);//13000 tiempoAnimacion->4
        //////COLECCIONABLE AIRE//////
        this.time8 =setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[4].getDiv(), this.tiempoAnimacion);}, 12000);
        this.timeFinal8 = setTimeout(()=> {this.viewDivObstaculo.detenerAnimacion(this.obstaculos[4].getDiv());
                //vuelve a ejecutar la misa secuencia de animación
                this.secuenciaAnimacion();}, 15000);
        }


}