import { BoardModel } from "../board.model.mjs";

export class BoardService{
    #Url;
    #boards;

    constructor(url){
        this.#Url = url
        this.#boards = [];
    }


    async getBoard(){
        
        const resquest = await fetch(`${this.#Url}/boards`);
        const {data} = await resquest.json();
     data.forEach(({id,name,createdAt,updateAt,columnsForBoard}) => {
        this.#boards.push(new BoardModel(id,name,createdAt,updateAt,columnsForBoard));

    });

    return  this.#boards

} 
   



   

}