package org.sofka.mykrello.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.sofka.mykrello.model.domain.TaskDomain;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Data

public class ColumnDTO {


        /**
         *Id que permite la identificacion de las columnas
         */

        private Integer id;

        /**
         * nos permite identifiar el nombre
         */
        private String name;

        /**
         *nos permite crear la columna
         */
        private Instant createdAt = Instant.now();

        /**
         *permite cargar la columna
         */
        private Instant updatedAt;

        /**
         * lista de tareas de las columnas
         */
        private List<TaskDomain> tasks = new ArrayList<>();

        /**
         *  Creacion de las columnas DTO
         * @param id
         * @param name
         * @param createdAt
         * @param updatedAt
         * @param tasks
         */

        public ColumnDTO(Integer id, String name, Instant createdAt, Instant updatedAt, List<TaskDomain> tasks) {
                this.id = id;
                this.name = name;
                this.createdAt = createdAt;
                this.updatedAt = updatedAt;
                this.tasks = tasks;
        }
}
