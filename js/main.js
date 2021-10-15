document.addEventListener("DOMContentLoaded", function(){
let personaje= document.getElementById("personaje");
let url= "../img/personaje_salta.png";

    document.addEventListener('keydown',saltar);
    console.log("está");

    function saltar(e) {
        console.log("alo");
        if(e.key == "ArrowUp"){
            personaje.style.animation = "";
            personaje.style.animation = "jump 2s steps(5) 2s infinite";
            //console.log(personaje.backgroundImage);
            personaje.style.backgroundImage= "url(img/personaje_salta.png)";
        }
    }
});
