document.addEventListener("DOMContentLoaded", function(){
    let personaje= document.getElementById("personaje");
    let viewPersonaje = new ViewPersonaje(personaje);

    document.addEventListener('keydown',saltar);

    let salta = true;
    function saltar(e) {
        if(e.key == "ArrowUp" && salta){
            salta = false;
            viewPersonaje.salta();
            setTimeout(caminar,1000);
        }
    }

    function caminar(){
        salta = true;
        viewPersonaje.camina();
    }
});

