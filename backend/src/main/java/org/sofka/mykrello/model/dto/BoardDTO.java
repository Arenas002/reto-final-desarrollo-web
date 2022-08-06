package org.sofka.mykrello.model.dto;

import lombok.Data;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

/**
 * El objeto board es un objeto el cual nos permitira realziar
 * varios tipos de transferencias de datos que representan un tablero
 *
 * @author Cristian David Arenas - Julio César Torres
 */
@Data
public class BoardDTO {
    /**
     * Id unico que permite identificar el tablero
     */
    private Integer id;

    /**
     *  nos permite reconocer el nombre
     */
    private String name;

    /**
     * Creamos los tableros
     */
    private Instant createdAt = Instant.now();

    /**
     *realmizamos el cargue de la documentacion
     */
    private Instant updatedAt;

    /**lista de las columnas de las boards
     *
     */
    private List<ColumnDTO> columns = new ArrayList<>();


    public BoardDTO(Integer id, String name, Instant updatedAt, Instant createdAt) {
        this.id = id;
        this.name = name;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }
}