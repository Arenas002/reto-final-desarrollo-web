import { Config } from "../config.mjs"

import { IndexView } from "../view/index.view.mjs";

import { BoardModel } from "../model/board.model.mjs"

import { BoardService } from "../model/services/board.service.mjs"

/**
 * Esta clase es la encarada de controlar los tableros interactuando 
 * con la clase BoardServices
 * @class IndexController
 * @author Cristian David Arenas - Julio César Torres
 * @version 1.0.0
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

    async deleteBoard(idBoard) {
        const borrarData = new BoardService(ktrelloURL);
        return await borrarData.delecteBoard(idBoard);

    }


    async editBoard(id,name){
        const editaData = new BoardService(ktrelloURL);
        const response = await editaData.getBoardId(id);
        const today = new Date();
        response.name = name;
        response.updatedAt = today;
        response.columnsForBoard =[];
        const payload = response;
        console.log("board", payload);
        const editResponse = await editaData.editBoard(payload,id);
        if(editResponse) window.location.reload();
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

 export const index = new IndexController();
index.init();




