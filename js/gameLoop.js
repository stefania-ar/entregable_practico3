document.addEventListener("DOMContentLoaded", function(){
    let divPersonaje = document.getElementById("personaje");
    let divObstaculo1 = document.getElementById("obtaculo1");
    let personaje = new Personaje(divPersonaje);
    let obstaculo1 = new Obstaculo(divObstaculo1);
    //chequea posiciones de los divs
    let end = false;
    let game = setInterval(()=>{
        if(end){
            clearInterval(game);
        }
        //console.log(personaje.getPosicion());
        console.log(" ");
        obstaculo1.setposicion();
        console.log(obstaculo1.getPosicion());

    },500);
});
