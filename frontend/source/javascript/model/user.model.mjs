'use strict';

export class BoardModel {
    #Id;
    #boardName;
    #createdAt;
    #updatedAt;
    #colunmsForBoard;
    

    constructor(id,name,createdAt,updatedAt,columnsForBoard) {
        
            this.#Id = id;
            this.#boardName = name;
            this.#createdAt = createdAt;
            this.#updatedAt = updatedAt;
            this.#colunmsForBoard = columnsForBoard;
            
        
    }

    get ID() {
        return this.#Id;
    }

    set ID(id) {
        this.#Id = id;
    }

    get Nombre() {
        return this.#boardName;
    }

    set Nombre(name) {
        this.#boardName = name;
    }

    get Apellido() {
        return this.#createdAt;
    }

    set Apellido(createdAt) {
        this.#createdAt = createdAt;
    }

    get Correo() {
        return this.#updatedAt;
    }

    set Correo(updatedAt) {
        this.#updatedAt = updatedAt;
    }

    get Telefono() {
        return this.#colunmsForBoard;
    }

    set Telefono(colunmForBoard) {
        this.#colunmsForBoard = colunmForBoard;
    }

    getValues() {
        return {
            id: this.#Id,
            name: this.#boardName,
            createdAt : this.#createdAt,
            updatedAt: this.#updatedAt,
            colunmForBoard: this.#colunmsForBoard,
        };
    }
}