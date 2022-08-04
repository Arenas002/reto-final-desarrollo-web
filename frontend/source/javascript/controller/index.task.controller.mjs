
import { Config } from "../config.mjs"

import { TaskView } from "../view/task.view.mjs";

import { BoardModel } from "../model/board.model.mjs"

import { BoardService } from "../model/services/board.service.mjs"

import { TaskService } from "../model/services/task.service.mjs"

const ktrelloURL = Config.ktrello_URL;
export class IndexTaskController {
    #task;
    #ktrelloURL = ktrelloURL;
    #taskView;
    #taskServices;

    constructor() {
        this.#task = new BoardModel();
        this.#taskView = new TaskView();
        this.#taskServices = new TaskService(this.#ktrelloURL);
    }

    obtenerId() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const anuncioParam = urlParams.get('id');
        return anuncioParam;
    }







    async init() {
        const data = new TaskService(this.#ktrelloURL);
        this.#taskView.init(await data.getBoardId(this.obtenerId()));
    }


}

export const indexTask = new IndexTaskController();
indexTask.init();
indexTask.obtenerId();