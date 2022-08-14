package org.sofka.mykrello.model.service.interfaces;

import java.util.List;

import org.sofka.mykrello.model.domain.TaskDomain;

public interface TaskServiceInterface {
    /**
     * busca todas las tareas
     * @param idBoard datos de la tarea
     * @return lista de  tareas
     */
    public List<TaskDomain> findAllTasksById(Integer idBoard);

    /**
     * busca una tarea en relacion al identificador
     * @param id Identificador del la tarea
     * @return tarea buscada o null en caso de no encontrarla
     */
    public TaskDomain findById(Integer id);

    /**
     * Crea un nueva tarea
     * @param task datos de la tarea a crear
     * @return tarea creada
     */
    public TaskDomain create(TaskDomain task);

    /**
     * actualiza una tarea
     * @param id Identificador del la tarea
     * @param task datos de la tarea
     * @return tarea actualizada
     */
    public TaskDomain update(Integer id, TaskDomain task);

    /**
     * elimina una tarea
     * @param id Identificador del la tarea
     * @return tablero borrado
     */
    public TaskDomain delete(Integer id);



}
