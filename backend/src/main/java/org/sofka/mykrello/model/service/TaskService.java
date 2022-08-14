package org.sofka.mykrello.model.service;

import java.security.PublicKey;
import java.util.List;

import net.bytebuddy.asm.Advice;
import org.sofka.mykrello.model.domain.LogDomain;
import org.sofka.mykrello.model.domain.TaskDomain;
import org.sofka.mykrello.model.repository.ColumnRepository;
import org.sofka.mykrello.model.repository.TaskRepository;
import org.sofka.mykrello.model.service.interfaces.TaskServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
/**
 * Esta clase es la encarada de realizar las consultas a la base de datos para las tareas
 *   @class TaskService
 *   @author Cristian David Arenas - Julio César Torres
 *   @version 1.0.0
 */

public class TaskService implements TaskServiceInterface {

    /**
     * inyectar la clase LogService
     */
    @Autowired
    private LogService logService;

    /**
     * Inyectar  TaskRepository
     */

    @Autowired
    private TaskRepository taskRepository;

    /**
     * inyectar  ColumnRepository
     */
    @Autowired
    private ColumnRepository columnRepository;



    /**
     * este metodo busca la tarea por el id
     * @param id identifica la tarea
     * @return si esta presente en la base de datos retorna la tarea si no retorna null
     */
    @Transactional(readOnly = true)
    @Override
    public TaskDomain findById(Integer id) {
        var task = taskRepository.findById(id);
        return task.isPresent() ? task.get() : null;
    }


    public List<TaskDomain> findAllTasksById(Integer idBoard) {
        return taskRepository.findAllByBoard(idBoard);
    }

    /**
     *  Este metodo crea nuevas tareas
     * @param task se le asigna a una tarea
     * @return guarda la inforacion de la nueva terea
     */
    @Override
    public TaskDomain create(TaskDomain task) {
        return  taskRepository.save(task);
    }

    /**
     * este metodo actualiza la tarea en la base de datos
     * @param id identifica la tarea
     * @param task llama el modelo de la tarea
     * @return funcion para guarda la informacion actualizada en la tarea
     */
    @Override

    public TaskDomain update(Integer id, TaskDomain task) {
        task.setId(id);
        return taskRepository.save(task);
    }

    /**
     * Este metodo elimina la tarea
     * @param id identifica cual es la tarea que se desea elminar
     * @return un valor null
     */
    @Override
    public TaskDomain delete(Integer id) {
       taskRepository.deleteById(id);
       return null;
    }

    /**
     *  Este TaskDomain llama las tareas y sus columnas
     * @param idColumn
     * @param idBoard
     */

    public List<TaskDomain> findAllByColumnAndAndBoard(Integer idColumn, Integer idBoard) {
        return taskRepository.findAllByColumnAndAndBoard(idColumn, idBoard);
    }
}
