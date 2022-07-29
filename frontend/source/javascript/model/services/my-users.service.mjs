import { Config } from "../../config.mjs";
import { BoardModel} from "../user.model.mjs";

export class MyUsersService {

    #board;

    constructor() {
        this.#board = [];
    }


    async getBoard(){
       const resquest = await fetch(`${Config.BackendURL}/board/1`)
      const{ data } = await resquest.json();
console.log(data);
       data.forEach(({id,name,createdAt,updatedAt,columnsForBoard})=>{
        this.#board.push(new BoardModel(id,name,createdAt,updatedAt,columnsForBoard))
        console.log(this.#board);

       });
    
       return this.#board;
       

    }

    async getUsers() {
        const data = await fetch(`${Config.BackendURL}`).then(response => response.json());
        const users = new Array();
        data.items.forEach(item => {
            const user = new UserModel(item);
            users.push(user);
        });
        return users;
    }

    async getUserById(id) {
        const data = await fetch(`${Config.BackendURL}/usuario/records/${id}`).then(response => response.json());
        return new UserModel(data);
    }

    async update(id, data) {
        await fetch(
            `${Config.BackendURL}/usuario/records/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }
        ).then(response => response.json());
    }

}