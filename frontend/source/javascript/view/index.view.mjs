import { index } from "../controller/index.controller.mjs";

/**
 * Esta clase es la encargada de crear toda la parte visual que el usuario va a ver  por medio del DOM 
 * @class IndexView
 * @author Cristian David Arenas - Julio César Torres
 * @version 1.0.0
 */
export class IndexView {
    #body

    /**
     * constructor de la clase IndexView
     */
    constructor() {
        document.title = "krello";
        this.#body = document.querySelector('body');

    }
    /**
     * metodo donde se llaman los metodos de las vistas 
     * @param {object} data  
     * @param {object} createBoard objeto donde se pide el body de la consulta 
     */
    init(data, createBoard) {

        this.#createComponent();
        this.#llamarNombre(data);
        this.#createSection2();
        this.#modal(createBoard);
        this.#deleteModal();
        this.#editModal()
    }


    /**
     * Crea el HTML desde el DOM para mostrar los tableros
     * @param {object} data  objeto de la peticion 
     */
    #llamarNombre(data) {

        data.forEach((element) => {
            console.log(element);

            const section = document.createElement("section");
            section.className = "medio";
            const div = document.createElement("div");
            div.className = "nombres";
            const img = document.createElement("img");
            img.className = "logo";
            img.src = "iconos/logo1.png"
            const a = document.createElement("a");
            a.innerHTML = element.name
            a.href = "index_task.html?id="+ element.id;
            a.className = "a_new"

            const divIconos = document.createElement("div");
            divIconos.className = "C-iconos";
            const img2 = document.createElement("img");
            img2.src = "iconos/eliminar.png"
            img2.alt = "imagen";
            img2.type = "submit"
            img2.className = "basura";
            img2.setAttribute("data-idBoard", element.id)
            img2.addEventListener("click", () =>{
                const modal = document.getElementById("modal2")
                modal.classList.add("is-visible");
                const button = document.getElementById("confirmar");
                button.setAttribute("data-idBoard",element.id);
          
            });
            const iconoEditar = document.createElement("img");
            iconoEditar.className = "editar"
            iconoEditar.alt = "imagen editar";
            iconoEditar.src = "iconos/editar.png"
            iconoEditar.addEventListener("click", () =>{

            const editModal = document.getElementById("modal3")
            editModal.classList.add("is-visible");
            const button = document.getElementById("confirmar-edit");
            const input = document.getElementById("edit-input")
            input.setAttribute("value",element.name)
            button.setAttribute("data-board",element.id);

        });
            section.append(div)
            divIconos.append(iconoEditar,img2)
            div.append(img, a,divIconos);
            this.#body.append(section);

        });

    }



    /**
     * Crea el header de la pagina primcipal
     */
    #createComponent() {

        const header = document.createElement("header");
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.className = "trellor";

        const b = document.createElement("b");

        b.className = "ktrellor";
        b.innerHTML = "rellor"
        p.innerHTML = "k";

        header.append(div);
        div.append(p);
        p.append(b);
        this.#body.append(header);

    }

/**
 * metodo para crear section en el html
 */

    #createSection2() {
        const section = document.createElement("section");
        section.className = "crear";
        this.#body.append(section);

    }
    /**
     * metodo de creacion del modal para agregar tableros 
     * 
     */
    #modal(createBoard) {


        const button1 = document.createElement("button");
        button1.className = "open-modal";
        button1.addEventListener("click", function () {
            console.log("hola");
            document.getElementById("modal1").classList.add("is-visible");
        })

        button1.innerHTML = "Crear tablero";



        const div = document.createElement("div");
        div.className = "modal";
        div.id = "modal1";
        const div2 = document.createElement("div");
        div2.className = "modal-dialog";
        const header = document.createElement("header");
        header.className = "modal-header";
        const label = document.createElement("label");
        label.innerHTML = "Nombre del tablero"
        const button = document.createElement("button");
        button.className = "close-modal";
        button.ariaLabel = "close modal";
        button.addEventListener("click", function () {
            document.getElementById("modal1").classList.remove("is-visible");
        })
        button.innerHTML = "X";
        const section = document.createElement("section");
        section.className = "modal-content";

        const form = document.createElement("form");
        form.id = "createBoard";
        form.action = "";
        form.addEventListener("submit", (event) => {
            console.log(event);
            const today = new Date();
            const payload = {

                "name": form.elements["0"].value,
                "createdAt": today
            }
            //  console.log(payload)
            createBoard(payload);
            event.preventDefault();

        })


        const input = document.createElement("input")
        input.type = "text";
        input.placeholder = "Nombre del tablero";
        input.id = "board-name";
        input.required = true;

        const footer = document.createElement("footer");
        footer.className = "modal-footer";

        const buttonSend = document.createElement("button");
        buttonSend.type = "submit"
        buttonSend.innerHTML = "Crear tablero"




        footer.append(buttonSend);
        form.append(input, buttonSend)
        section.append(form);
        header.append(button, label);
        div2.append(header, section, footer);
        div.append(div2);
        this.#body.append(button1, div);




    }
    /**
     * metodo para la creacion del model para la eliminacion
     */

    #deleteModal() {

        const div = document.createElement("div");
        div.className = "modal";
        div.id = "modal2";
        const div2 = document.createElement("div");
        div2.className = "modal-dialog";
        const header = document.createElement("header");
        header.className = "modal-header";
        const section = document.createElement("section");
        section.className = "modal-content";
        const form = document.createElement("div")
        form.innerHTML = "¿Seguro que desea eliminar el tablero?"
        const footer = document.createElement("footer");
        footer.className = "modal-footer";
        const buttonSend = document.createElement("button");
        buttonSend.type = "submit"
        buttonSend.innerHTML = "Eliminar"
        buttonSend.id = "confirmar";
        /**
         * Busca la ubicacion del tablero en la base de dato para borrarla
         */
        buttonSend.addEventListener("click", (event)=>{
            console.log(event.target.dataset.idboar);
             index.deleteBoard(event.target.dataset.idboard);
            location.reload();
        })
        const buttonCancelar = document.createElement("button");
        buttonCancelar.innerHTML = "Cancelar"
        buttonCancelar.addEventListener("click", function () {
            document.getElementById("modal2").classList.remove("is-visible");
        })

        form.append(buttonSend, buttonCancelar)
        section.append(form);
        div2.append(header, section, footer, buttonSend, buttonCancelar);
        div.append(div2);
        this.#body.append(div);

    }

    /**
     * metodo para la creacion del model para el edit
     */

    #editModal() {

        const div = document.createElement("div");
        div.className = "modal";
        div.id = "modal3";
        const div2 = document.createElement("div");
        div2.className = "modal-dialog";
        const header = document.createElement("header");
        header.className = "modal-header";
        const section = document.createElement("section");
        section.className = "modal-content";
        const form = document.createElement("form");
        form.id = "createBoard";
        
        const input = document.createElement("input")
        input.type = "text";
        input.placeholder = "Nombre del tablero";
        input.id = "edit-input";
        input.required = true;
        
        const label = document.createElement("label");
        label.innerHTML = "Editar tablero"

        const footer = document.createElement("footer");
        footer.className = "modal-footer";
        const buttonSend = document.createElement("button");
        buttonSend.type = "submit"
        buttonSend.innerHTML = "Editar"
        buttonSend.id = "confirmar-edit";
        buttonSend.addEventListener("click", (event)=>{
             index.editBoard(event.target.dataset.board, input.value );
        })
        const buttonCancelar = document.createElement("button");
        buttonCancelar.innerHTML = "Cancelar"
        buttonCancelar.addEventListener("click", function () {
            document.getElementById("modal3").classList.remove("is-visible");
        })


        form.append(input,buttonSend, buttonCancelar)
        section.append(label,form);
        div2.append(header, section, footer, buttonSend, buttonCancelar);
        div.append(div2);
        this.#body.append(div);

    }



}
