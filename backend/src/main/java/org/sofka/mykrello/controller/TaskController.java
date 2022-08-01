package org.sofka.mykrello.controller;


import org.sofka.mykrello.model.domain.TaskDomain;
import org.sofka.mykrello.model.service.TaskService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(value = "*")
@RestController
@RequestMapping("/task")

/**
 * Esta clase es la encarada de controlar las tareas que se generan en los  dashboard
 *   @class TaskController
 *   @author Cristian David Arenas - Julio César Torres
 *   @version 1.0.0
 */
public class TaskController {

    /**
     * inyectar MyResponseUtility
     */
    @Autowired
    private MyResponseUtility response;

    /**
     * inyectar TaskService
     */
    @Autowired
    private TaskService taskService;


    /**
     * metodo para actiener las tareas por el id
     * @param id id para buscar la tarea a mostrar
     * @return retorna la peticion y el estado
     */
    @GetMapping(path = "/api/v1/task/{id}")
    public ResponseEntity<MyResponseUtility> getTask(@PathVariable (value = "id") Integer id){
        response.data = taskService.findById(id);
        return new  ResponseEntity<>(response, HttpStatus.OK);
    }

    /**
     * metodo para crear las tareas
     * @param task llama al modelo de la tarea
     * @return retorna la peticion y el estado
     */
    @PostMapping(path = "/api/v1/task")
    public ResponseEntity<MyResponseUtility> create(@RequestBody TaskDomain task){
        response.data= taskService.create(task);
        return new ResponseEntity<>(response,HttpStatus.CREATED);
    }

    /**
     * Metodo  que se encarga de actualizar las tareas
      * @param id  identificar la tarea
     * @param task llama al modelo de la tarea
     * @return retorna la peticion y el estado
     */
    @PutMapping(path = "/api/v1/task/{id}")
    public ResponseEntity<MyResponseUtility> put(@PathVariable(value = "id")Integer id,@RequestBody TaskDomain task){
        response.data = taskService.update(id, task);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     * metodo para eliminar las tareas por id
     * @param id id para buscar la tarea a eliminar
     * @return retorna la peticion y el estado
     */
    @DeleteMapping(path = "/api/v1/task/{id}")
    public ResponseEntity<MyResponseUtility> delete(@PathVariable(value = "id")Integer id){
        response.data = taskService.delete(id);
        return new ResponseEntity<>(response,  HttpStatus.CREATED);
    }
}
