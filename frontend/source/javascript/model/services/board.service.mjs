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
 * @param {string} url url para concectarse a la Base de datos
 */
    constructor(url) {
        this.#Url = url
        this.#boards = [];
    }

/**
 * Obtencion de boards desde la api
 * @returns - promesa con los tableros
 */
    async getBoard() {

        const resquest = await fetch(`${this.#Url}/boards`);
        const { data } = await resquest.json();
        data.forEach(({ id, name, createdAt, updateAt, columnsForBoard }) => {
            this.#boards.push(new BoardModel(id, name, createdAt, updateAt, columnsForBoard));


        });

        return this.#boards

    }

async getBoardId(id){
    const resquest = await fetch(`${this.#Url}/board/${id}`)
    const {data} = await resquest.json();
    return data;
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
 * funcion para eliminar los tableros
 * @param {number} idBoard  id del tablero a eliminar 
 * @returns endpoint para la eliminacion de tableros
 */
    async delecteBoard(idBoard) {
        // const responseData = await fetch(`${this.#Url}/board/borrar/${idBoard}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
            
        // })
        // debugger
        // const response = await responseData.json();
        const data =  await axios.delete(`${this.#Url}/board/borrar/${idBoard}`)
        console.log(data);
        return response
    }
/**
 * funcion para editar el tablero
 * @param {object} board nueva informacion del tablero
 * @param {number} id id del tablero a editar 
 * @returns endpoint para la edicion de tableros
 */
    async editBoard(board, id){
        const responseData = await fetch(`${this.#Url}/board/put/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(board)
                
            })
            const response = await responseData.json();
            return response;
    }

    // async editBoard(board, id) {
    //     const { data } = await axios.put(`${this.#Url}/board/put/${id}`,board);    
    //     return data.data;
    //   }

    

}
