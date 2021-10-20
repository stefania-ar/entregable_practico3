class ViewPersonaje {
    constructor(personaje){
        this.personaje = personaje;
    }
    salta(){
        this.personaje.classList.remove("agachar");
        this.personaje.classList.remove("rodar");
        this.personaje.classList.remove("caminar");
        this.personaje.classList.add("saltar");
    }

    camina(){
        this.personaje.classList.remove("levantar");
        this.personaje.classList.remove("saltar");
        this.personaje.classList.remove("agachar");
        this.personaje.classList.remove("rodar");
        this.personaje.classList.add("caminar");
    }

    down(){
        this.personaje.classList.remove("saltar");
        this.personaje.classList.remove("rodar");
        this.personaje.classList.remove("caminar");
        this.personaje.classList.add("agachar");
    }

    rodar(){
        this.personaje.classList.remove("saltar");
        this.personaje.classList.remove("agachar");
        this.personaje.classList.remove("caminar");
        this.personaje.classList.add("rodar");
    }

    rollUp(){
        this.personaje.classList.remove("saltar");
        this.personaje.classList.remove("agachar");
        this.personaje.classList.remove("caminar");
        this.personaje.classList.remove("rodar");
        this.personaje.classList.add("levantar");
    }
}