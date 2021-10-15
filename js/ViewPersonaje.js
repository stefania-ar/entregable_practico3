class ViewPersonaje {
    constructor(personaje){
        this.personaje = personaje;
    }
    salta(){
        this.personaje.classList.remove("caminar");
        this.personaje.classList.add("saltar");
    }
    camina(){
        this.personaje.classList.remove("saltar");
        this.personaje.classList.add("caminar");
    }
}