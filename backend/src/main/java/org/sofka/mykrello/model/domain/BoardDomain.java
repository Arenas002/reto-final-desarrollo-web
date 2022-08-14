package org.sofka.mykrello.model.domain;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;

/**
 * esta clase es la encargada de mapear el modelo de tablero de la base de datos
 *  @class BoardDomain
 *  @author Cristian David Arenas - Julio César Torres
 *  @version 1.0.0
 */
@Data
@Entity
@Table(name = "krl_board")
public class BoardDomain implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Se utiliza para realziar la marca de un tiempo cuando se actualiza el tablero
     * si no se establece se aplica el UpdateAt
     */
    @PreUpdate
    public void preUpdate() {
        if (this.updatedAt == null)
            this.updatedAt = Instant.now();
    }

    /**
     * atributo id de de la base de datos
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "brd_id", nullable = false)
    private Integer id;

    /**
     * atributo name de la base de datos
     */
    @Column(name = "brd_name", nullable = false, length = 100)
    private String name;

    /**
     * atributo createdAt de la base de datos
     */
    @Column(name = "brd_created_at", nullable = false, updatable = false)
    private Instant createdAt = Instant.now();
    /**
     * atributo updatedAt de la base de datos
     */
    @Column(name = "brd_updated_at")
    private Instant updatedAt;
    /**
     * conexion uno a muchos de las entidaddes de las bases de datos, de la columna "columnsForBoard"
     */
    @OneToMany(fetch = FetchType.LAZY, targetEntity = ColumnForBoardDomain.class, cascade = CascadeType.ALL, mappedBy = "board", orphanRemoval = true)
    @JsonManagedReference(value = "columnsForBoard")
    private List<ColumnForBoardDomain> columnsForBoard = new ArrayList<>();


}
