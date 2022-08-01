
export class IndexView{
#body


constructor(){
    document.title = "krello";
    this.#body = document.querySelector('body');

}

init(data,createBoard){
 
   this.#createComponent();
  this.#llamarNombre(data);
   this.#createSection2();
   this.#modal(createBoard);
   this.#deleteModal();

   
  

    // data.forEach((boards)=>{
    //     console.log(boards);
    //     const infor = document.createElement("h1");
    //     infor.innerHTML = boards.name;
    //    // this.#body.append(infor);
    // })
}



#llamarNombre(data){

data.forEach((element) => {

    const section = document.createElement("section");
    section.className = "medio";
    const div = document.createElement("div");
    div.className = "nombres";
    const img = document.createElement("img");
    img.className = "logo";
    img.src = "iconos/logo1.png"
    const p = document.createElement("a");
    p.innerHTML = element.name;
    p.href = "index.task.html";
    p.className = "a_new"
    const img2 = document.createElement("img");
    img2.src = "iconos/eliminar.png"
    img2.alt = "imagen";
    img2.type = "submit"
    img2.className = "basura";
    img2.addEventListener("click", function(){
            document.getElementById("modal2").classList.add("is-visible");
       });
       

       

       
    section.append(div)
    div.append(img,p,img2);
    this.#body.append(section);

});

}




#createComponent(){

  const header = document.createElement("header");
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.className =  "trellor";
  
  const b = document.createElement("b");

  b.className = "ktrellor";
  b.innerHTML = "rellor"
  p.innerHTML = "k";

header.append(div);
div.append(p);
p.append(b);
this.#body.append(header);







// <!-- <header>
//         <div>
//         <p class="trellor"><b class="ktrellor">k</b>rellor</p>
//         </div>
//     </header> -->

    }

   

#createSection2(){
    const section = document.createElement("section");
    section.className = "crear";
    const h4 = document.createElement("h4");
    h4.innerHTML = "Enlaces"
    // const img  = document.createElement("img")
    // img.src = "iconos/mas.png";
    // img.alt = "imagen borrar"

//     const div3 = document.createElement("div");
// div3.className = "modal";
// div3.id = "modal1";
// const div2 = document.createElement("div");
// div2.className = "modal-dialog";
// const header = document.createElement("header");
// header.className = "modal-header";
// const button = document.createElement("button");
// button.className = "close-modal";
// button.ariaLabel = "close modal";
// // button.setAttribute("data-close");
// button.innerHTML = "X";
// const section2 = document.createElement("section");
// section2.className = "modal-content";
// const footer = document.createElement("footer");
// footer.className = "modal-footer";

// header.append(button);
// div2.append(header,section2,footer);
// div.append(div2);

    // div.append(img)
    section.append(h4);
    this.#body.append(section);
   
}

// #eventoButtton(){

//     addEventListener("click", function() {
//         console.log("hola");
//         document.getElementById("modal1").classList.add("is-visible");
        
//       });
// }



#modal(createBoard) {
    // const containerDiv = document.createElement("div");

    const button1 = document.createElement("button");
    button1.className = "open-modal";
   button1.addEventListener("click", function(){
    console.log("hola");
        document.getElementById("modal1").classList.add("is-visible");
   });

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
// button.setAttribute("data-close");
button.addEventListener("click",function(){
    document.getElementById("modal1").classList.remove("is-visible");
})
button.innerHTML = "X";
const section = document.createElement("section");
section.className = "modal-content";

const form = document.createElement("form");
form.id = "createBoard";
form.action = "";
form.addEventListener("submit",(event)=>{
 console.log(event);
 const today = new Date();
 const payload = {

    "name":form.elements["0"].value,
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
form.append(input,buttonSend)
section.append(form);
header.append(button,label);
div2.append(header,section,footer);
div.append(div2);
this.#body.append(button1,div);



//  <div class="modal" id="modal1">
// <div class="modal-dialog">
//   <header class="modal-header">
//     ...
//     <button class="close-modal" aria-label="close modal" data-close>✕</button>
//   </header>
//   <section class="modal-content">...</section>
//   <footer class="modal-footer">...</footer>
// </div>
// </div> 

}


#deleteModal(){

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
form.innerHTML= "¿Seguro que desea eliminar el tablero?"
const footer = document.createElement("footer");
footer.className = "modal-footer";
const buttonSend = document.createElement("button");
buttonSend.type = "submit"
buttonSend.innerHTML = "Eliminar"
const buttonCancelar = document.createElement("button");
buttonCancelar.innerHTML = "Cancelar"
buttonCancelar.addEventListener("click",function(){
    document.getElementById("modal2").classList.remove("is-visible");
})






form.append(buttonSend,buttonCancelar)
section.append(form);
div2.append(header,section,footer,buttonSend,buttonCancelar);
div.append(div2);
this.#body.append(div);



}




//  <div class="modal" id="modal1">
// <div class="modal-dialog">
//   <header class="modal-header">
//     ...
//     <button class="close-modal" aria-label="close modal" data-close>✕</button>
//   </header>
//   <section class="modal-content">...</section>
//   <footer class="modal-footer">...</footer>
// </div>
// </div> 







}   
   

{/* <section class="crear">
        <h4>Enlaces</h4>
        <div> <img src="iconos/mas.png" alt=""> crear tablero</div>
    </section> */}


    // <!-- <header>
    //     <div>
    //     <p class="trellor"><b class="ktrellor">k</b>rellor</p>
    //     </div>
    // </header>

    // <section class="medio">

    //     <div class="nombres">
    //         <img src="iconos/paisaje-digital-en-atardecer.jpg" alt="" class="basura"> 
    //     <p>llamar nombre </p>
    //     <img src="iconos/eliminar.png" alt="imagen">
    // </div>
    // </section>
    // <section class="crear">
    //     <h4>Enlaces</h4>
    //     <div> <img src="iconos/mas.png" alt=""> crear tablero</div>
    // </section> --></div>