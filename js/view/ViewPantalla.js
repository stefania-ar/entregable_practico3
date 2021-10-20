class ViewPantalla{

    constructor(div){
        this.div =div;
    }

    mostrarPantalla(){
        this.div.classList.remove("hiden");
        this.div.classList.add("show");
    }

    ocultarPantalla(){
        this.div.classList.remove("show");
        this.div.classList.add("hiden");
    }



}