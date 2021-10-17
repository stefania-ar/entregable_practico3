document.addEventListener("DOMContentLoaded", function(){
    let divPersonaje = document.getElementById("personaje");
    let viewPersonaje = new ViewPersonaje(divPersonaje);


    document.addEventListener('keydown',movimiento);
    //document.addEventListener('keypress',rodar);
    //document.addEventListener('keyup',caminar);
    document.addEventListener('keyup',caminarDespuesRoll);

    let salta = true;
    let down = true;
    let roll = false;
    let timeCaminar;

    function movimiento(e) {
        if(e.key == "ArrowUp" && salta){
            //salta
            //false quiere decir que ya está saltando
            salta = false;
            viewPersonaje.salta();
            setTimeout(caminar,1000);
        }else if(e.key == "ArrowDown" && down && salta){//se pregunta por si está abilitado para saltar si no lo está que no se agache
            //corto la caminata despues de saltar
            //se agacha
            down = false;
            viewPersonaje.down();
            //empieza a rodar
            setTimeout(rodar,250);
        }
    }

    function rodar(){
        //pregunta que esté agachado
        if(!down){
            roll = true;
            viewPersonaje.rodar();
        }
    }

    function caminar(){
            //listo para saltar
            salta = true;
            //listo para agacharse
            down = true;
            //no está rodando
            roll = false;
            viewPersonaje.camina();
    }

    function caminarDespuesRoll(e){
        if(e.key == "ArrowDown"){
            viewPersonaje.rollUp();
            setTimeout(caminar,300);
        }
    }

});

