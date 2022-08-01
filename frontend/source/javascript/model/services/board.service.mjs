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

async createBoard(data){
    const responseData = await fetch(`${this.#Url}/board`,{
        method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)})
      const response = await responseData.json();
console.log(response);
      return response
    } 



delecteBoard(){

    fetch(`${this.#Url}/board`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(res=> {
        console.log(res);
    });
}


   
    

}