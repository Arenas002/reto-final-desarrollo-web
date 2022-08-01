import{Config} from "../config.mjs"

import { IndexView } from "../view/index.view.mjs";

import{ BoardModel } from "../model/board.model.mjs"

import { BoardService } from "../model/services/board.service.mjs"

const ktrelloURL = Config.ktrello_URL;
export class IndexController{
#board;
#ktrelloURL = ktrelloURL;
#view;
#boarServices;

constructor(){
    this.#board = new BoardModel();
    this.#view = new IndexView();
    this.#boarServices = new BoardService(this.#ktrelloURL);
}

async createBoard(data){
    const insertData = new BoardService(ktrelloURL);
    const insertResponse =  await insertData.createBoard(data);
    // console.log(insertResponse)
    if(insertResponse.message == "Success"){
        window.location.reload();
        console.log("holaaaaaaaaaa")
        }else{
            console.log( " no entro ")
        }
    
    
    }


deleteBoard(){
    
}

async init( ){
    const data = new BoardService(this.#ktrelloURL);
    this.#view.init(await data.getBoard(),this.createBoard);
 
}



}



// ejecucion del codigo 

const index = new IndexController();
index.init();




