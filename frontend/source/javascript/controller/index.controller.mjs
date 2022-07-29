"use strict";

// Services
import { MyUsersService } from "../model/services/my-users.service.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

class IndexController {
    #privateView;
    #privateMyUsersService;

    constructor() {
        this.#privateView = new IndexView();
        this.#privateMyUsersService = new MyUsersService();
    }



async init(){
    const board = await this.#privateMyUsersService.Board
    this.#privateView.init(board)
}


    // async init() {
    //     this.#privateView.Data = await this.#privateMyUsersService.getUsers();
    //     this.#privateView.init();
    // }
}

export const index = new IndexController();
index.init();