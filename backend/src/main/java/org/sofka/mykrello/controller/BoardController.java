package org.sofka.mykrello.controller;

import org.sofka.mykrello.model.domain.BoardDomain;
import org.sofka.mykrello.model.service.BoardService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


/**
 * Esta clase es la encarada de controlar los tableros interactuando con la clase BoardServices
 *   @class IndexController
 *   @author Cristian David Arenas - Julio César Torres
 *   @version 1.0.0
 */
@RestController
@CrossOrigin(value = "*")
//@RequestMapping("/board")
public class BoardController {
/**
inyector de la clase MyResponseUtility
 */
    @Autowired
    private MyResponseUtility response;
    /**
     * inyector de la clase de los servicion BoardService
     *
     */
    @Autowired
    private BoardService boardService;

    /**
     *metodo para obtener todos los tableros
     * @return retorna la peticion y el estado
     */
    @GetMapping(path = "/api/v1/boards")
    public ResponseEntity<MyResponseUtility> index() {
        response.data = boardService.getAll();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    /**
     * metodo para obtener los tableros por el id
     * @param id  id para buscar el tablero
     * @return retorna la peticion y el estado
     */
    @GetMapping(path = "/api/v1/board/{id}")
    public ResponseEntity<MyResponseUtility> getBoardById(@PathVariable(value = "id") Integer id) {
        response.data = boardService.findById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    /**
     * metodo para agregar los tableros
     * @param board objeto de la clase BoardDomain
     * @return retorna la peticion y el estado
     */
    @PostMapping(path = "/api/v1/board")
    public ResponseEntity<MyResponseUtility> create(@RequestBody BoardDomain board) {
        response.data = boardService.create(board);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     * metodo para actualizar los tableros
     * @param id id para buscar el tablero a actualizar
     * @param board  objeto de la clase BoardDomain
     * @return retorna la peticion y el estado
     */
    @PutMapping(path = "/api/v1/board/{id}")
    public ResponseEntity<MyResponseUtility> put(@PathVariable(value = "id") Integer id,
            @RequestBody BoardDomain board) {
        response.data = boardService.update(id, board);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     * metodo para eliminar el tablero por el id
     * @param id id para buscar el tablero a eliminar
     * @return retorna la peticion y el estado
     */
    @DeleteMapping(path = "/api/v1/board/borrar/{id}")
    public ResponseEntity<MyResponseUtility> delete(@PathVariable(value = "id") Integer id) {
        response.data = boardService.delete(id);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}
