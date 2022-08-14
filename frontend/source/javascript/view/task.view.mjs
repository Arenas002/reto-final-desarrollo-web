import { indexTask } from "../controller/index.task.controller.mjs"
/**
 * clase para crear la parte visual de las tareas por medio del DOM
 * @class TaskView
 * @author Cristian David Arenas - Julio César Torres
 * @version 1.0.0
 */
export class TaskView{
    #body;
/**
 * contructor de la clase TaskView
 */
    constructor(){
        document.title = "krello";
        this.#body = document.querySelector('body');
    
    }

/**
     * metodo donde se llaman los metodos de la vista de las tareas
     * @param {object} data  
     * @param {object} createBoard objeto donde se pide el body de la consulta 
     */

    init(data,boardid){
    this.#callColumn(data)
    this.#modalCreateTask(boardid)
    this.#modalTaskEdit()
    this.#deleteModal()
    
    }
/**
 * funcion que crea la parte visual de las tareas como las columnas y las tareas
 * @param {object} data objeto de la peticion 
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
        const section = document.createElement("section");
        section.className = "container";
        const buttonCreate = document.createElement("button");
        buttonCreate.classList = "button-Create";
        buttonCreate.innerHTML = "Crear Tarea"
        buttonCreate.addEventListener("click", function () {
            
            document.getElementById("modalCreateTask").classList.add("is-visible");
        })


        this.#body.append(section)

        data.forEach((element) => {
            const divColumn = document.createElement("div");
            divColumn.className = "classbar"
            const div_tres = document.createElement("div");
            div_tres.className = "div_tres";
            const h3 = document.createElement("h3");
            h3.className = "tabla"
            h3.innerHTML=element.name;
            div_tres.append(h3)
            const elementos  = element.tasks;
            elementos.forEach((evet) =>{
                const div_cuatro = document.createElement("div");
                div_cuatro.className = "tareas";
                div_cuatro.innerHTML = evet.name;
                div_tres.append( div_cuatro)
                const div_botones = document.createElement("div");
                div_botones.className = "div_botones";
                const boton1 = document.createElement("button")
                boton1.className = "botones"
                boton1.innerHTML ="<"
                boton1.addEventListener("click", ()=>{

                    indexTask.moveTask(evet.id,"left");
                })
                const boton2 = document.createElement("button")
                boton2.className = "botones_img"
                
                const imgEditar = document.createElement("img")
                imgEditar.src = "iconos/editar.png"
                boton2.addEventListener("click", () =>{
                    const editModal = document.getElementById("modalTask")
                    editModal.classList.add("is-visible");
                    const button = document.getElementById("confirmar-edit-task");
                    const input = document.getElementById("edit-input_I2")
                    const inputDescripcion = document.getElementById("edit-input_I1")
                    inputDescripcion.setAttribute("value", evet.description)
                     input.setAttribute("value",evet.name);
                     button.setAttribute("data-taskid",evet.id);

                    
                });
               
                const boton3 = document.createElement("button")
                boton3.className = "botones_img"
                const imgDelete = document.createElement("img")
                imgDelete.src = "iconos/eliminar.png"
                boton3.addEventListener("click", () =>{
                    const modal = document.getElementById("modalDelete")
                    modal.classList.add("is-visible");
                    const button = document.getElementById("confirmar");
                    button.setAttribute("data-taskid",evet.id);
              
                });

                const boton4 = document.createElement("button")
                boton4.className = "botones"
                boton4.innerHTML =">"
                boton4.addEventListener("click",() => {

                indexTask.moveTask(evet.id,"right");


                });
                
                div_botones.append( evet.column == 1?"":boton1,boton2,boton3,evet.column == 3?"":boton4);
                div_cuatro.append(div_botones)
                boton2.append(imgEditar)
                boton3.append(imgDelete)
            })
                
        
            
            section.append(divColumn,buttonCreate)
            header.append(div, div_dos)
            
            divColumn.append(div_tres)
            div_dos.append(a)
            div.append(p,b)
            p.append(b)
           })
 
  
        }


       
  /**
   *  Creacion de el html del modal de edit
   * */     
        #modalTaskEdit() {

        const div = document.createElement("div");
        div.className = "modal Edit";
        div.id = "modalTask";
        const div2 = document.createElement("div");
        div2.className = "modal-dialog";
        const header = document.createElement("header");
        header.className = "modal-header";
        const section = document.createElement("section");
        section.className = "modal-content";
        const form = document.createElement("form");
        form.id = "createBoard";
        const form2 = document.createElement("form");
        form2.id = "createBoard";
        
        const input = document.createElement("input")
        input.type = "text";
        input.placeholder = "Nombre de la atrea";
        input.id = "edit-input_I1";
        input.required = true;
        
        const label2 = document.createElement("label");
        label2.innerHTML = "Nombre de la tarea"
        
        const input2  = document.createElement("input")
        input2.type = "text";
        input2.placeholder = "Nombre del tablero";
        input2.id = "edit-input_I2";
        input2.required = true;
        
        const historial = document.createElement("p");
        historial.className = "historial";
        historial.innerHTML = "historial";

        const label = document.createElement("label");
        label.innerHTML = "Descripcion";

        const footer = document.createElement("footer");
        footer.className = "modal-footer";
        const buttonSend = document.createElement("button");
        buttonSend.type = "submit"
        buttonSend.innerHTML = "Editar"
        buttonSend.id = "confirmar-edit-task";
        buttonSend.addEventListener("click", (event)=>{
            indexTask.editTask(event.target.dataset.taskid,input2.value,input.value );

        })

        /**
         * Boton para cancelar la operacion del modal
         */
        const buttonCancelar = document.createElement("button");
        buttonCancelar.innerHTML = "Cancelar"
        buttonCancelar.addEventListener("click", function () {
            document.getElementById("modalTask").classList.remove("is-visible");
        })

        form2.append(input2)
        form.append(input,buttonSend, buttonCancelar)
        section.append(label2,form2,label,form,historial);
        div2.append(header, section, footer, buttonSend, buttonCancelar);
        div.append(div2);
        this.#body.append(div);
    }


    /**
     * Creacion de el html del modal de delete
     */
        #deleteModal(){
            const div = document.createElement("div");
        div.className = "modal";
        div.id = "modalDelete";
        const div2 = document.createElement("div");
        div2.className = "modal-dialog";
        const header = document.createElement("header");
        header.className = "modal-header";
        const section = document.createElement("section");
        section.className = "modal-content";
        const form = document.createElement("div")
        form.innerHTML = "¿Seguro que desea eliminar la tarea?"
        const footer = document.createElement("footer");
        footer.className = "modal-footer";
        const buttonSend = document.createElement("button");
        buttonSend.type = "submit"
        buttonSend.innerHTML = "Eliminar"
        buttonSend.id = "confirmar";
        buttonSend.addEventListener("click", (event)=>{
            console.log(event.target.dataset.taskid);
             indexTask.deleteTask(event.target.dataset.taskid);
            location.reload();
        })

        /**
         * Boton para cancelar la operacion del modal
         */

        const buttonCancelar = document.createElement("button");
        buttonCancelar.innerHTML = "Cancelar"
        buttonCancelar.addEventListener("click", function () {
            document.getElementById("modalDelete").classList.remove("is-visible");
        })

        form.append(buttonSend, buttonCancelar)
        section.append(form);
        div2.append(header, section, footer, buttonSend, buttonCancelar);
        div.append(div2);
        this.#body.append(div);
        }
        /**
         * funcion para crear un modal nonde se agrege una nueva tareas por medio del DOM
         */

        #modalCreateTask(boardid) {
            const div = document.createElement("div");
            div.className = "modal Edit";
            div.id = "modalCreateTask";
            const div2 = document.createElement("div");
            div2.className = "modal-dialog";
            const header = document.createElement("header");
            header.className = "modal-header";
            const section = document.createElement("section");
            section.className = "modal-content";
            const form = document.createElement("form");
            form.id = "createtask";
            form.action = "";
            form.addEventListener("submit", (event) => {
                
                console.log("hola");
                const payload = {
    
                    "name": form.elements["0"].value,
                    "column":1,
                     "board": parseInt(boardid),
                    "description": form.elements["1"].value,
                }
                 console.log(payload)
                indexTask.createTask(payload);
                    
                event.preventDefault();
                console.log(boardid)
    
            })
           
            
            const input = document.createElement("input")
            input.type = "text";
            input.placeholder = "Nombre de la tarea";
            input.id = "name-task";
            input.required = true;
            
            const label2 = document.createElement("label");
            label2.innerHTML = "Nombre de la tarea"
            
            const input2  = document.createElement("input")
            input2.type = "text";
            input2.placeholder = "Nombre del tablero";
            input2.id = "task-input_I2";
            input2.required = true;
    
            const label = document.createElement("label");
            label.innerHTML = "Descripcion";
    
            const footer = document.createElement("footer");
            footer.className = "modal-footer";
            const buttonSend = document.createElement("button");
            buttonSend.type = "submit"
            buttonSend.innerHTML = "agregar"


           
    
         /**
         * Boton para cancelar la operacion del modal
         */

            const buttonCancelar = document.createElement("button");
            buttonCancelar.innerHTML = "Cancelar"
            buttonCancelar.addEventListener("click", function () {
                document.getElementById("modalCreateTask").classList.remove("is-visible");
            })
            footer.append(buttonSend)
            form.append(label2,input,label,input2,buttonSend, buttonCancelar)
            section.append(form);
            div2.append(header, section, footer);
            div.append(div2);
            this.#body.append(div);
        
        
    
        }


}
