
import { Config } from "../config.mjs"

import { TaskView } from "../view/task.view.mjs";

import { BoardModel } from "../model/board.model.mjs"

import { TaskService } from "../model/services/task.service.mjs"


 /**  Esta clase es la encargada de controlar las tareas y sus funcionalidades
  @class IndexTaskController
  @author Cristian David Arenas - Julio César Torres
  @version 1.0.0
 */

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
    /**
     * Funcion para obtener el id de la tarea
     */
    obtenerId() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const anuncioParam = urlParams.get('id');
        return anuncioParam;
    }

    async createTask(data) {
        const insertData = new TaskService(this.#ktrelloURL);
        const insertResponse = await insertData.createTask(data);
        console.log(insertResponse)
        console.log("url del controlador",this.#ktrelloURL)
        if (insertResponse.message == "Success") {
            window.location.reload();
        }
    }
        /**
        * Funcion de editar la tarea
        */

    async editTask(id,name,description){
        const editaData = new TaskService(ktrelloURL);
        const response = await editaData.getTaskId(id);
        const today = new Date();
        response.name = name;
        response.description= description;
        response.updatedAt = today;
        response.columns=[];
        const payload = response;
        console.log("tarea", payload);
        const editResponse = await editaData.editTask(payload,id);
        console.log("finish",editResponse)
        if(editResponse) window.location.reload();
    }
        /**
         * Funcion de mover la tarea
         */


    async moveTask(id,move){
        const editaData = new TaskService(ktrelloURL);
        const response = await editaData.getTaskId(id);
        response.column = move!="right"?response.column-1:response.column+1;
        const payload = response
        const editResponse = await editaData.editTask(payload,id);
        if(editResponse) window.location.reload();
    }
 
        /**
         * Funcion de eliminar tarea
         */

    async deleteTask(idTask) {
        const borrarData = new TaskService(ktrelloURL);
        return await borrarData.deleteTask(idTask);

    }



        /**
         * Iniciador de las funciones que se encargan de crear las tareas
         */

    async init() {
        const data = new TaskService(this.#ktrelloURL);
        this.#taskView.init(await data.getColumnId(this.obtenerId()),this.obtenerId());
    }


}

export const indexTask = new IndexTaskController();
indexTask.init();
indexTask.obtenerId();