import{Config} from "../config.mjs"

import { IndexView } from "../view/index.view.mjs";

import{ BoardModel } from "../model/board.model.mjs"

import { BoardService } from "../model/services/board.service.mjs"


class IndexController{
#board;
#ktrelloURL;
#view;

constructor(){
    this.#ktrelloURL = Config.ktrello_URL;
    this.#board = new BoardModel();
    this.#view = new IndexView();
}

async init( ){
    const data = new BoardService(this.#ktrelloURL);
    this.#view.init(await data.getBoard());
}


}

const index = new IndexController();
index.init();
