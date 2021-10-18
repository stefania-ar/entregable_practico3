class ViewDivObstaculo{
    aplicarAnimacion(divObstaculo, tiempoAnimacion){
        divObstaculo.classList.add("animar");
        divObstaculo.style.animationDuration = tiempoAnimacion/1000+"s";
    }

    detenerAnimacion(divObstaculo){
        divObstaculo.classList.remove("animar");
    }
}