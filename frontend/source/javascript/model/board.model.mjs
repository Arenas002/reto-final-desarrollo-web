/** clase del modelo del tablero
 * @class BoardModel
 * @author
 * @version 1.0.0
 */
export class BoardModel{

    #id
    #name
    #createdAt
    #updatedAt
    #columnsForBoard
/**
 * Constructor de la clase 
 * @param {number} id
 * @param {String} name 
 * @param {string} createdAt 
 * @param {string} updateAt 
 * @param {string} columnsForBoard 
 */
    constructor(id,name,createdAt,updateAt,columnsForBoard){
        this.#id = id;
        this.#name = name;
        this.#createdAt = createdAt;
        this.#updatedAt = updateAt;
        this.#columnsForBoard = columnsForBoard;
    }


    get name() {
        return this.#name;
      }
      get id() {
        return this.#id;
      }
      get createdAt() {
        return this.#createdAt;
      }
      get updatedAt() {
        return this.#updatedAt;
      }

      get columnsForBoard(){
        return this.#columnsForBoard
      }

}