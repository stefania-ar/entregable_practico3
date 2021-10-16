document.addEventListener("DOMContentLoaded", function(){
    let personaje= document.getElementById("personaje");
    let viewPersonaje = new ViewPersonaje(personaje);

    document.addEventListener('keydown',movimiento);
    //document.addEventListener('keypresed',rodar);
    //document.addEventListener('keyup',caminar);

    let salta = true;
    let down = true;
    let roll = false;

    function movimiento(e) {
        if(e.key == "ArrowUp" && salta){
            if(roll){
                //se levanta de rodar
                roll = false;
                viewPersonaje.rollUp();
                setTimeout(caminar,300);
                //no está rodando
            }else{
                //salta
                salta = false;
                viewPersonaje.salta();
                setTimeout(caminar,1000);
            }
        }else if(e.key == "ArrowDown" && down && salta){//se pregunta por si está abilitado para saltar si no lo está que no se agache
            //se agacha
            down = false;
            viewPersonaje.down();
            //empieza a rodar
            setTimeout(rodar,250);
        }
    }

    function rodar(){
        if(!down){
            roll = true;
            viewPersonaje.rodar();
        }
    }

    function caminar(){
        salta = true;
        down = true;
        viewPersonaje.camina();
    }
});

