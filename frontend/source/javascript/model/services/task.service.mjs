
import { TaskModel } from "../task.modelo.mjs";



export class TaskService{

    #Url
    #task


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

    async getColumnId(boardid){
        const resquest = await fetch(`${this.#Url}/board/${boardid}`)
        const {data} = await resquest.json();
        const response= data.columns;
        console.log(response)
        return response
    }


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



    async getTaskId(id){
        const resquest = await fetch(`${this.#Url}/task/${id}`)
        const {data} = await resquest.json();
        return data;
    }




}