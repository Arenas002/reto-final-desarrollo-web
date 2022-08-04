import { indexTask } from "../controller/index.task.controller.mjs"
/**
 * clase para mostrar la vista de las tareas
 * @class TaskView
 * @authores
 * @version 1.0.0
 */
export class TaskView{
    #body;
    #columnOne;
    #columnTwo;
    #columnThree
/**
 * contructor de la clase TaskView
 */
    constructor(){
        document.title = "krello";
        this.#body = document.querySelector('body');
    
    }



     init(data){
    this.#callColumn(data)

    }
/**
 * creacion del HTML a travez del DOM para creacion de los t
 */
    #callColumn(data){

       
            
        const header = document.createElement("header");
        const div = document.createElement("div");
        const p = document.createElement("p")
        p.className = "trellor"
        const b = document.createElement("b")
        b.className = "ktrellor"
        b.innerHTML = "rellor"
        p.innerHTML = "k"

        this.#body.append(header)
        
        const div_dos = document.createElement("div");
        div_dos.className = "volver"
        const a = document.createElement("a");
        a.href = "index.html"
        a.innerHTML = "Volver al menu"
        // const omg =element.columnsForBoard;
        const section = document.createElement("section");
        section.className = "container";

        this.#body.append(section)

        data.forEach((element) => {
           console.log(element) 
            const divColumn = document.createElement("div");
            divColumn.className = "classbar"
            const div_tres = document.createElement("div");
            div_tres.className = "div_tres";
            const h3 = document.createElement("h3");
            h3.className = "tabla"
            h3.innerHTML=element.column.name;
            div_tres.append(h3)
            const elementos  = element.column.taskDomainList
            elementos.forEach((evet) =>{
                const div_cuatro = document.createElement("div");
                console.log(evet.name)
                div_cuatro.innerHTML = evet.name;
                div_tres.append( div_cuatro)
            })
            
        
            
            section.append(divColumn)
            header.append(div, div_dos)
            
            divColumn.append(div_tres)
            div_dos.append(a)
            div.append(p,b)
            p.append(b)
           })
           
        

        
        

       
        
  
        }

}
// <!-- <header>
//         <div>
//             <p class="trellor"><b class="ktrellor">k</b>rellor</p>
//         </div>
//         <div class="volver"><a href="index.html">Volver al menu </a></div>
//     </header>
   
//     <section class="classbar">
//         <div>
//             <h3 class="columna-pendiente">Lista de tareas por hacer</h3>
//             <div></div>
//         </div>
//         <div>
//             <h3 class="columna-proceso">En proceso</h3>
//             <div></div>
//         </div>
//         <div>
//             <h3 class="echo">Hecho</h3>
//             <div></div>
//         </div>
//     </section> -->






// const div_cinco = document.createElement("div_cinco");
        // const h3_dos = document.createElement("h3");
        // h3_dos.className = "proceso";
        // const div_seis = document.createElement("div_seis");
        
        
        // const div_siete = document.createElement("div_siete");
        // const h3_tres = document.createElement("h3_tres");
        // h3_tres.className = document.createElement("Hecho");
        // const div_ocho = document.createElement("div_ocho");