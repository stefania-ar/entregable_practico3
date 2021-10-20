class ViewDivObstaculo{

    aplicarAnimacion(divObstaculo, tiempoAnimacion){
        divObstaculo.classList.add("animar");
        divObstaculo.style.animationDuration = tiempoAnimacion/1000+"s";
    }

    detenerAnimacion(divObstaculo){
        divObstaculo.classList.remove("animar");
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
        arrayDivs.forEach(element => {
            //muestro el elemento para que el DOM me tome el ancho de este
            this.show(element);
            let posX = widthPantalla - (element.getBoundingClientRect().width+100);
            element.style.transform = "translateX("+posX+"px)";
            //lo oculto una vez calculado todo
            this.hiden(element);
        });
    }
}