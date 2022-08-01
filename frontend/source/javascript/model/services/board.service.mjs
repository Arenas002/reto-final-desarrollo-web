import { BoardModel } from "../board.model.mjs";

/**
 * Clase para los servicios de los tableres,responsable de realizar las consultas a la base de datos
 * @class BoardService
 * @author Cristian David Arenas - Julio César Torres
 * @version 1.0.0
 */
export class BoardService {
    #Url;
    #boards;

/**
 * metodo constructor de la clase 
 * @param {*} url url para concectarse a la Base de datos
 */
    constructor(url) {
        this.#Url = url
        this.#boards = [];
    }

/**
 * Optencion de boards desde la api
 * @returns - promesa con los tableros
 */
    async getBoard() {

        const resquest = await fetch(`${this.#Url}/boards`);
<<<<<<< HEAD
        const { data } = await resquest.json();
        data.forEach(({ id, name, createdAt, updateAt, columnsForBoard }) => {
            this.#boards.push(new BoardModel(id, name, createdAt, updateAt, columnsForBoard));
            console.log(data);
=======
        const {data} = await resquest.json();
        data.forEach(({id,name,createdAt,updateAt,columnsForBoard}) => {
        this.#boards.push(new BoardModel(id,name,createdAt,updateAt,columnsForBoard));

    });

    return  this.#boards

} 
>>>>>>> fef8f68193ed00949d15e207bb70b4c3604c56d5

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

        });

<<<<<<< HEAD
        return this.#boards
=======
   
    
>>>>>>> fef8f68193ed00949d15e207bb70b4c3604c56d5

    }
    /**
     * Metodo creador de tableros
     * @param {object} data  objeto para la creacion del tablero
     * @returns promesa para la creacion del board
     */

    async createBoard(data) {
        const responseData = await fetch(`${this.#Url}/board`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const response = await responseData.json();
        console.log(response);
        return response
    }

/**
 * 
 * @returns endpoint para la eliminacion de tableros
 */
    delecteBoard() {
        return axios.delete(`${this.#Url}/board/borrar/{id}`)
    }
}
