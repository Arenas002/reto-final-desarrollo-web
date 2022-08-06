package org.sofka.mykrello.model.domain;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Data
@Entity
@Table(name = "krl_column")
/**
 * esta clase es la encargada de mapear el modelo de las columnas de la base de datos
 *   @class ColumnDomain
 *   @author Cristian David Arenas - Julio César Torres
 *   @version 1.0.0
 */

public class ColumnDomain implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Metodo que se utiliza antes de la actualziacion de la columna
     */
    @PreUpdate
    public void preUpdate() {
        if (this.updatedAt == null)
            this.updatedAt = Instant.now();
    }

    /**
     * atributo id de la base de datos
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "clm_id", nullable = false)
    private Integer id;

    /**
     * atributo name de la base de datos
     */
    @Column(name = "clm_name", nullable = false, length = 100)
    private String name;

    /**
     * atributo createdAt de la base de datos
     */
    @Column(name = "clm_created_at", nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

    /**
     * atributo updatedAt de la base de datos
     */
    @Column(name = "clm_updated_at")
    private Instant updatedAt;
    /**
     * conexion uno a muchos de las entidades relacionales de las bases de datos, de la columna "column_For_boards"
     */
    @OneToMany(fetch = FetchType.LAZY, targetEntity = ColumnForBoardDomain.class,  cascade = CascadeType.ALL, mappedBy = "column")
    @JsonBackReference(value = "column_For_Boards")
    private List<ColumnForBoardDomain> columnForBoards = new ArrayList<>();

    /**
     *conexion uno a muchos de las entidades relacionales de las bases de datos, de la columna "colunmDomain"
     */
    @OneToMany(fetch = FetchType.EAGER, targetEntity = TaskDomain.class ,  mappedBy = "domain", cascade = CascadeType.ALL)
    @JsonManagedReference(value = "colunmDomain")
    private List<TaskDomain> taskDomainList= new ArrayList<>();
}

