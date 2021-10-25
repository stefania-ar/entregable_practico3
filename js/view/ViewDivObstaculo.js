class ViewDivObstaculo{

    aplicarAnimacion(divObstaculo, tiempoAnimacion){
        divObstaculo.classList.add("animar");
        divObstaculo.style.animationDuration = tiempoAnimacion/1000+"s";
    }

    detenerAnimacion(divObstaculo){
        divObstaculo.classList.remove("animar");
    }

    animarColeccionable(divColeccionable){
        //obtiene x del div en la pos actual
        let posXActual = divColeccionable.getBoundingClientRect().x;
        this.detenerAnimacion(divColeccionable);
        divColeccionable.style.transform = "translateX("+posXActual+"px)";
        divColeccionable.classList.add("animarColeccionable");
        divColeccionable.style.animationDuration = "0.5s";
    }

    desanimarColeccionable(divColeccionable){
        divColeccionable.classList.remove("animarColeccionable");
    }

    hiden(div){
        div.classList.remove("show");
        div.classList.add("hiden");
    }

    show(div){
        div.classList.add("show");
    }
    //para ubicar el obtaculo exactamente al finade la pantalla
    //sin importar el tamaño de la pantalla
    setTranslateX(arrayDivs, widthPantalla){
        let div;
        arrayDivs.forEach(element => {
            div = element.getDiv();
            //muestro el elemento para que el DOM me tome el ancho de este
            this.show(div);
            let posX = widthPantalla - (div.getBoundingClientRect().width+100);
            div.style.transform = "translateX("+posX+"px)";
            //lo oculto una vez calculado todo
            this.hiden(div);
        });
    }
}