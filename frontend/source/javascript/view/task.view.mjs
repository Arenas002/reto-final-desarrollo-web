
export TaskView(){


    #body;

    constructor(){
        document.title = "krello";
        this.#body = document.querySelector('body');
    
    }

    #createSection2(){
        const header = document.createElement("header");
        const div = document.createElement("div");
        const p = document.createElement("p")
        p.className = "trellor"
        const b = document.createElement("b")
        b.className = "ktrellor"
        b.innerHTML = "k"
        p.innerHTML = "rellor"
        
        const div_dos = document.createElement("div");
        div_dos.className = "volver"
        const a = document.createElement("a");
        a.href = "index.html"
        a.innerHTML = "Volver al menu"
        
        const section = document.createElement("section");
        section.className = "classbar"
        const div_tres = document.createElement("div_tres");
        const h3 = document.createElement("h3");
        h3.className = "Lista de tareas por hacer"
        const div_cuatro = document.createElement("div_cuatro");
        
        
        const div_cinco = document.createElement("div_cinco");
        const h3_dos = document.createElement("h3");
        h3_dos.className = "proceso";
        const div_seis = document.createElement("div_seis");
        
        
        const div_siete = document.createElement("div_siete");
        const div_ocho = document.createElement("div_ocho");
        
        
        const h3_tres = document.createElement("h3_tres");
        h3_tres.className = document.createElement("Hecho");
        const div_nueve = document.createElement("div_nueve");
        

        this.body.append(header,section)
        header.append(div, p, div_dos,a)
        section.append(div_tres, div_cuatro, div_cinco)        
        }

}





//     <header>
//     <div>
//     <p class="trellor"><b class="ktrellor">k</b>rellor</p>
//     </div>
//     <div class="volver"><a href="index.html">Volver al menu </a></div>
// </header>

// <section class="classbar" >
//     <div>
//         <h3>Lista de tareas por hacer</h3>
//         <div></div>
//     </div>
//     <div>
//         <h3>En proceso</h3>
//         <div></div>
        
//     </div>
//     <div>
//         <h3>Hecho</h3>
//         <div></div>
//     </div>
// </section>

