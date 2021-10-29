class ControlDivObstaculos{
    constructor(arrayDivSuelo, arrayDivAire, tiempoAnimacion, viewDivObstaculo, widthPantalla, divsSuelo, divsAire){
        this.widthPantalla = widthPantalla;
        console.log(widthPantalla);
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
        this.timeFinal= null;

        //this.incrementarVelocidad = null;
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
       /* this.incrementarVelocidad = setInterval(()=>{this.tiempoAnimacion = this.tiempoAnimacion*0.9;
            console.log(this.tiempoAnimacion);
        },15000);*/
    }

    animarColeccionable(coleccionable){
        coleccionable.limpiarAnimacion();
        this.viewDivObstaculo.animarColeccionable(coleccionable.getDiv());
        setTimeout(()=>{this.viewDivObstaculo.desanimarColeccionable(coleccionable.getDiv());
                        this.ubicarDivEnPantalla(coleccionable);
                        coleccionable.setSumado(false);
        }, 1000);
    };

    detenerAnimacion(){
        //clearInterval(this.incrementarVelocidad);
        clearTimeout(this.secuenciaDivs);
        clearTimeout(this.time1);
        clearTimeout(this.time2);
        clearTimeout(this.time3);
        clearTimeout(this.time4);
        clearTimeout(this.time5);
        clearTimeout(this.time6);
        clearTimeout(this.time7);
        clearTimeout(this.time8);
        clearTimeout(this.timeFinal);
        //limpia las animaciones individuales que creò el view para cada obstaculo
        this.obstaculos.forEach(element => {
            element.limpiarAnimacion();
        });
        this.ubicarDivsEnPantalla();
    }

    secuenciaAnimacion(){
        ////////////////SUELO///////////////////
        //primer obstaculo de suelo
        this.time1 = setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[0], this.tiempoAnimacion)}, 0);
        ////////////////SUELO///////////////////
        //segundo obstaculo de suelo
        this.time2 = setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[1], this.tiempoAnimacion);}, 1500);//2000 tiempoAnimacion->4
        //////COLECCIONABLE SUELO//////
        this.time3 =setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[3], this.tiempoAnimacion);}, 3000);
        ////////////////AIRE///////////////////
        //tercer obstaculo de aire
        this.time4 = setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[2], this.tiempoAnimacion)}, 5500);//4000 tiempoAnimacion->4
        //////COLECCIONABLE AIRE//////
        this.time5 =setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[4], this.tiempoAnimacion);}, 6500);
        ////////////////SUELO///////////////////
        //cuarto obstaculo de suelo
        this.time6 = setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[0], this.tiempoAnimacion);}, 8000);//7000 tiempoAnimacion->4
        ////////////////AIRE///////////////////
        //quinto obstaculo de aire
        this.time7 = setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[2], this.tiempoAnimacion);}, 10000);//9000 tiempoAnimacion->4
        //////COLECCIONABLE AIRE//////
        this.time8 =setTimeout(()=> {this.viewDivObstaculo.aplicarAnimacion(this.obstaculos[4], this.tiempoAnimacion);}, 12000);
        //////REINICIA TODA LASECUENCIA DE ANIMACIONES
        this.timeFinal = setTimeout(()=> {this.secuenciaAnimacion();}, 15000);
    }


}