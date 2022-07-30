export class IndexView{
#body


constructor(){
    document.title = "krello";
    this.#body = document.querySelector('body');

}

init(data){

   this.#createComponent();

    data.forEach((boards)=>{
        console.log(boards);
        const infor = document.createElement("h1");
        infor.innerHTML = boards.name;
       // this.#body.append(infor);
    })
}



#createComponent(){

  const header = document.createElement("header");
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.class =  "trellor";
  p.innerHTML = "rellor";
  const b = document.createElement("b");
  b.class = "ktrellor";
  b.innerHTML = "k"

  header.append(div);
div.append(p,b);
this.#body.append(header);

// <!-- <header>
//         <div>
//         <p class="trellor"><b class="ktrellor">k</b>rellor</p>
//         </div>
//     </header> -->

    }

    #crearSection(){
    const section = document.createElement("section");
    section.class = "medio";
    const div = document.createElement("div");
    div.class = "nombres";
    const img = document.createElement("div");
    img.class = "basura";
    img.src = "iconos/paisaje-digital-en-atardecer.jpg"
    const p = document.createElement("p");
    p.innerHTML = "llamar nombre"
    const img2 = document.createElement("img");
    img2.src = 
    
    }


}

{/* <section class="medio">

<div class="nombres">
    <img src="iconos/paisaje-digital-en-atardecer.jpg" alt="" class="basura"> 
<p>llamar nombre </p>
<img src="iconos/eliminar.png" alt="imagen">
</div>
</section> */}


