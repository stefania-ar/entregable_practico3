class ViewDivObstaculo{

    aplicarAnimacion(obstaculo, tiempoAnimacion){
        let divObstaculo = obstaculo.getDiv();
        let duracion = tiempoAnimacion;
        let tiempoIterador = 50;
        let cantDeSaltos = duracion/tiempoIterador;
        this.show(divObstaculo);
        let posInicial = divObstaculo.getBoundingClientRect().x;
        let distanciaARecorrer = posInicial+100;//tiene que moverse esta cantidad de pixels
        let pixels = distanciaARecorrer/cantDeSaltos;
        let posActual = posInicial;
        let pos;
        let animacion = setInterval(()=>{
            if(cantDeSaltos != 0){
                this.show(divObstaculo);
                cantDeSaltos = cantDeSaltos - 1;
                posActual = divObstaculo.getBoundingClientRect().x;
                pos = posActual-pixels;
                divObstaculo.style.transform = "translateX("+pos+"px)";
            }
            if(cantDeSaltos <= 0){
                this.hiden(divObstaculo);
                divObstaculo.style.transform = "translateX("+posInicial+"px)";
                clearInterval(animacion);
            }
        }, tiempoIterador);
        //guarda el intervan anterior dentro del objeto
        //para poder limpiarla en caso que el juego deba ser cortado
        obstaculo.setAnimacion(animacion);
    }

    detenerAnimacion(divObstaculo){
        divObstaculo.classList.remove("animar");
    }

    animarColeccionable(divColeccionable){
        /*let posInicial = divObstaculo.getBoundingClientRect().y;
        let pos = posInicial-100;
        divColeccionable.style.transform = "translateY("+pos+"px)";*/
       divColeccionable.classList.add("animarColeccionableTocado");
    }

    desanimarColeccionable(divColeccionable){
        divColeccionable.classList.remove("animarColeccionableTocado");
    }

    hiden(div){
        div.classList.remove("show");
        div.classList.add("hiden");
    }

    show(div){
        div.classList.remove("hiden");
        div.classList.add("show");
    }
    //para ubicar el obtaculo exactamente al finade la pantalla
    //sin importar el tamaño de la pantalla
    setTranslateX(arrayObstaculos, widthPantalla){
        let div;
        arrayObstaculos.forEach(element => {
            div = element.getDiv();
            //muestro el elemento para que el DOM me tome el ancho de este
            this.show(div);
            let posX = widthPantalla - div.getBoundingClientRect().width;
            div.style.transform = "translateX("+posX+"px)";
            //lo oculto una vez calculado todo
            this.hiden(div);
        });
    }
}