

/**
 * Clase para los servicios de las tareas,responsable de realizar las consultas a la base de datos
 * @class TaskService
 * @author Cristian David Arenas - Julio César Torres
 * @version 1.0.0
 */

export class TaskService{

    #Url
    #task

/**
 * contructor de la clase
 * @param {string} url url para hacer las consultas a la base de datos 
 */
    constructor(url){
        this.#task = [];
        this.#Url = url
    }


    // async getBoardId(boardid){
    //     const resquest = await fetch(`${this.#Url}/board/${boardid}`)
    //     const {data} = await resquest.json();
    //     const response= data.columns;
    //     return response
    // }
/**
 * funion para obtener el id de las columnas
 * @param {number} boardid id del tablero
 * @returns retorna la informacion de la columna
 */
    async getColumnId(boardid){
        const resquest = await fetch(`${this.#Url}/board/${boardid}`)
        const {data} = await resquest.json();
        const response= data.columns;
        console.log(response)
        return response
    }

/**
 * funcion para crear las tareas
 * @param {object} data 
 * @returns promesa para la creacion del la tarea
 */
    async createTask(data){
        const responseData = await fetch(`${this.#Url}/task/create`,{
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
 * funcion para editar la tarea 
 * @param {object} task nueva informacion de la tarea
 * @param {number} id id de la tarea a editar
 * @returns  promesa para la edicion de la tarea
 */
    async editTask(task, id){
        const responseData = await fetch(`${this.#Url}/task/put/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(task)
                
            })
            const response = await responseData.json();
            return response;
    }

/**
 * funcion para eliminar la tarea
 * @param {number} idTask  id de la tarea a eliminar
 * @returns promesa para la eliminacion de la tarea
 */
    async deleteTask(idTask){
             const responseData = await fetch(`${this.#Url}/task/delete/${idTask}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
        })
        const response = await responseData.json();
        return response
    }


/**
 * funcion para obtener el id de las tareas 
 * @param {number} id id de la tarea
 * @returns 
 */
    async getTaskId(id){
        const resquest = await fetch(`${this.#Url}/task/${id}`)
        const {data} = await resquest.json();
        return data;
    }




}