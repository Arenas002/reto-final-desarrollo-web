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
public class TaskService implements TaskServiceInterface {

    @Autowired
    private LogService logService;

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private ColumnRepository columnRepository;

    @Override
    public List<TaskDomain> findAllTasksById(Integer idBoard) {
        // TODO Auto-generated method stub
        return null;
    }

    @Transactional(readOnly = true)
    @Override
    public TaskDomain findById(Integer id) {
        var task = taskRepository.findById(id);
        return task.isPresent() ? task.get() : null;
    }

    @Override
    public TaskDomain create(TaskDomain task) {
        return  taskRepository.save(task);
    }


    @Override
    public TaskDomain update(Integer id, TaskDomain task) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public TaskDomain delete(Integer id) {
        // TODO Auto-generated method stub
        return null;
    }
}
