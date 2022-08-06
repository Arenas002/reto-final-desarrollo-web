package org.sofka.mykrello.model.service;

import java.util.ArrayList;
import java.util.List;


import org.sofka.mykrello.model.domain.BoardDomain;
import org.modelmapper.ModelMapper;
import org.sofka.mykrello.model.domain.ColumnForBoardDomain;
import org.sofka.mykrello.model.dto.BoardDTO;
import org.sofka.mykrello.model.dto.ColumnDTO;
import org.sofka.mykrello.model.repository.BoardRepository;
import org.sofka.mykrello.model.repository.ColumnForBoardRepository;
import org.sofka.mykrello.model.repository.ColumnRepository;
import org.sofka.mykrello.model.repository.TaskRepository;
import org.sofka.mykrello.model.service.interfaces.BoardServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
/**
 * Esta clase es la encarada de realizar las consultas a la base de datos
 *   @class BoardService
 *   @author Cristian David Arenas - Julio César Torres
 *   @version 1.0.0
 */

public class BoardService implements BoardServiceInterface {
    /**
     * inyector de la clase BoardRepository
     */
    @Autowired
    private BoardRepository boardRepository;

    /**
     * inyector de la clase ColumnRepository
     */

    @Autowired
    private ColumnRepository columnRepository;
    /**
     * inyector de la clase ColumnForBoardRepository
     */
    @Autowired
    private ColumnForBoardRepository columnForBoardRepository;

    /**
     * Se inyecta la clase TaskRepository
     */
    @Autowired
    private TaskRepository taskRepository;


    /**
     * Se inyecta TaskService
     */
    @Autowired
    private TaskService taskService;

    /**
     * metodo para llamar los tablero de la base de datos
     * @return funcion  findAll del boardRepository
     */
    @Override
    @Transactional(readOnly = true)
    public List<BoardDomain> getAll() {
        return boardRepository.findAll();
    }


    @Override
    @Transactional(readOnly = true)
    public BoardDTO findById(Integer id) {
        var board = boardRepository.findById(id).orElse(null);
        if (board == null) return null;
        var colums = columnRepository.findAll();
        var boardDTO = new BoardDTO(board.getId(), board.getName(), board.getUpdatedAt(),board.getCreatedAt());
        colums.forEach(colum->{
            var taskColum = taskRepository.findAllByColumnAndAndBoard(colum.getId(), boardDTO.getId());
            boardDTO.getColumns().add(new ColumnDTO(colum.getId(),colum.getName(),colum.getCreatedAt(),colum.getUpdatedAt(),taskColum));
        });


        return boardDTO;
    }

//    @Override
//    @Transactional(readOnly = true)
//    public BoardDTO findById(Integer id) {
//        var board = boardRepository.findById(id).orElse(new BoardDomain());
//        var boardDTO = new BoardDTO();
//
//        modelMapper.map(board, boardDTO);
//
//        boardDTO.setColumns(filterTaskByColumn(id));
//        return boardDTO;
//    }






    /**
     * metodo para llamar los tablero de la base de datos por id
     * @return funcion  findById del boardRepository
     */
//    @Override
//    @Transactional(readOnly = true)
//    public BoardDomain findById(Integer id) {
//        var board = boardRepository.findById(id);
//        return board.isPresent() ? board.get() : null;
//    }

//    @Transactional
//    public List<ColumnDTO> filterTaskByColumn(Integer boardId) {
//        List<ColumnDTO> columnDTOs = getColumnDTOS(boardId);
//
//        columnDTOs.forEach(column -> column.setTasks(
//                taskService.findAllByBoardIdAndColumnId(boardId, column.getId())));
//
//        return columnDTOs;
//    }
//
//
//
//
//
//    private List<ColumnDTO> getColumnDTOS(Integer boardId) {
//        var columns = columnRepository.findAllByBoardId(boardId);
//        List<ColumnDTO> columnDTOs = new ArrayList<>();
//
//        columns.forEach(column -> columnDTOs.add(modelMapper.map(column, ColumnDTO.class)));
//        return columnDTOs;
//    }






    /**
     * metodo para agregar los tablero de a la base de datos
     * @return funcion  save del boardRepository para agregar el tablero
     */
    @Override
    @Transactional
    public BoardDomain create(BoardDomain board) {
        var newBoard = boardRepository.save(board);
        var columns = columnRepository.findAll();
        if (!columns.isEmpty()) {
            columns.forEach(column -> {
                var columnForBoard = new ColumnForBoardDomain();
                columnForBoard.setColumn(column);
                columnForBoard.setBoard(newBoard);
                columnForBoardRepository.save(columnForBoard);
            });
        }
        return newBoard;
    }

    /**
     * metodo que se utiliza para actualizar los tabletos
     * @param id    Identificador del tablero a actualizar
     * @param board Datos del tablero a actualizar
     * @return
     */
    @Override
    @Transactional
    public BoardDomain update(Integer id, BoardDomain board) {
        board.setId(id);
        return boardRepository.save(board);
    }

    /**
     * metodo para borrar los tablero de a la base de datos
     * @return funcion  get del boardRepository
     */
    @Override
    @Transactional
    public BoardDomain delete(Integer id) {
        var optionalBoard = boardRepository.findById(id);
        if (optionalBoard.isPresent()) {
            var board = optionalBoard.get();
            var columnsForBoard = board.getColumnsForBoard();
            if (!columnsForBoard.isEmpty()) {
                columnsForBoard.forEach((column) -> {
                    columnForBoardRepository.delete(column);
                });
            }
            boardRepository.delete(optionalBoard.get());
            return optionalBoard.get();
        }
        return null;
    }

}
