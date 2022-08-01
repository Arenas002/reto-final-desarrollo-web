import { Config } from "../config.mjs"

import { IndexView } from "../view/index.view.mjs";

import { BoardModel } from "../model/board.model.mjs"

import { BoardService } from "../model/services/board.service.mjs"

<<<<<<< HEAD
/**
 * Esta clase es la encarada de controlar los tableros interactando 
 * con la clase BoardServices
 * @class IndexController
 * @author Cristian David Arenas - Julio César Torres
 * @1.0.0
 *
 */

const ktrelloURL = Config.ktrello_URL;
export class IndexController {
    #board;
    #ktrelloURL = ktrelloURL;
    #view;
    #boarServices;



    /**
     * Constructor de la clase
     */

    constructor() {
        this.#board = new BoardModel();
        this.#view = new IndexView();
        this.#boarServices = new BoardService(this.#ktrelloURL);

    }
    /**
     * Funcion para crear tableros
     * @param {object} data  objeto recibido para crear el tablero
     */

    async createBoard(data) {
        const insertData = new BoardService(ktrelloURL);
        const insertResponse = await insertData.createBoard(data);
        // console.log(insertResponse)
        if (insertResponse.message == "Success") {
            window.location.reload();
        }
    }

    /**
     * Funcion parra borrar el tablero
     */

    async deleteBoard() {
        const borrarData = new BoardService(ktrelloURL);
        return await borrarData.delecteBoard();

    }

    /**
     * Funcion que crea los tableros por medio de la consulta obtenida por el servicio
     */

    async init() {
        const data = new BoardService(this.#ktrelloURL);
        this.#view.init(await data.getBoard(), this.createBoard);
    }
}

/** 
 * Se ejecuta el codigo 
 */
=======
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
>>>>>>> fef8f68193ed00949d15e207bb70b4c3604c56d5



// ejecucion del codigo 

const index = new IndexController();
index.init();




