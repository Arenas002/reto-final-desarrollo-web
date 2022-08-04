package org.sofka.mykrello.controller;

import org.sofka.mykrello.model.service.LogService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/log")

/**
 * Esta clase es la encarada de controlar los tableros interactuando con la clase BoardServices
 *   @class IndexController
 *   @author Cristian David Arenas - Julio César Torres
 *   @version 1.0.0
 */
public class LogController {
    /**
     * inytectar la clase MyResponseUtility
     */
    @Autowired
    private MyResponseUtility response;
    /**
     * inyectar la clase LogService
     */
    @Autowired
    private LogService logService;

    /**
     * metodo para obtener el historial de las tareas
     * * @param id id para obtener el log a mostrar
     * @return retorna la peticion y el estado
     */

    @GetMapping(path = "/api/v1/log/id")
    public ResponseEntity<MyResponseUtility> getLog(@PathVariable (name = "id")Integer id){
        response.data = logService.findById(id);
         return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
