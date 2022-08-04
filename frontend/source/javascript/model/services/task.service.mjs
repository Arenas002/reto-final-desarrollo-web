
import { BoardModel } from "../board.model.mjs";



export class TaskService{

    #Url
    #task


    constructor(url){
        this.#task = [];
        this.#Url = url
    }


    async getBoardId(boardid){
        const resquest = await fetch(`${this.#Url}/board/${boardid}`)
        const {data} = await resquest.json();
        const response= data.columnsForBoard;
        return response
    }





    // async getTask(id){
    //     const resquest = await fetch(`${this.#Url}/task/${id}`)
    //     const {data} = await resquest.json();
    //     return data;
    // }




}