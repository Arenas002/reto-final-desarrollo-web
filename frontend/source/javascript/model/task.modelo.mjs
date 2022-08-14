/** clase del modelo del tablero
 * @class BoardModel
 * @author Cristian David Arenas - Julio César Torres
 * @version 1.0.0
 */

export class TaskModel{

    #id;
    #name;
    #description;
    #delivery;
    #createdAt;
    #updatedAt;
    #log;
    #board;
    #column;

/**
 * constructor de la clase
 * @param {number} id  ide de la tarea
 * @param {String} name  nombre de la tarea
 * @param {String} description  descripcion de la tarea
 * @param {Instant} delivery fecha de vencimiento de la tarea
 * @param {Instant} createdAt fecha de creacion de la tarea
 * @param {Instant} updatedAt fecha de actualizacion de la tarea
 * @param {number} column id de la columna 
 * @param {number} board  id del tablero 
 * @param {Array} log 
 */
    constructor(id,name,description,delivery,createdAt,updatedAt,column,board,log = []){
    this.#id = id;
    this.#name = name;
    this.#column = column;
    this.#description = description;
    this.#delivery = delivery;
    this.#createdAt = createdAt;
    this.#updatedAt = updatedAt;
    this.#board = board;
    this.#log = log;
    }

    get id() {
        return this.#id;
      }
      get name() {
        return this.#name;
      }
      get description() {
        return this.#description;
      }
      get delivery() {
        return this.#delivery;
      }
      get createdAt() {
        return this.#createdAt;
      }
      get updatedAt() {
        return this.#updatedAt;
      }
      get board() {
        return this.#board;
      }
      get column() {
        return this.#column;
      }
      get log() {
        return this.#log;
      }
      set column(column) {
        this.#column = column;
      }




}