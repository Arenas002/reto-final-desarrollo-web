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
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


@Data
@Entity
@Table(name = "krl_task")
/**
 * esta clase es la encargada de mapear el modelo de las tareas de la base de datos
 *   @class TaskDomain
 *   @author Cristian David Arenas - Julio César Torres
 *   @version 1.0.0
 */

public class TaskDomain implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * atributo id de la base de datos
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tsk_id", nullable = false)
    private Integer id;

    /**
     * atributo name de la base de datos
     */
    @Column(name = "tsk_name", nullable = false, length = 100)
    private String name;

    /**
     * atributo description de la base de datos
     */
    @Column(name = "tsk_description", nullable = false, length = 2000)
    private String description;

    /**
     * atributo column de la base de datos
     */
    @Column(name = "clm_id_column")
    private Integer column;
    /**
     * atributo board de la base de datos
     */
    @Column(name = "brd_id_board")
    private Integer board;

    /**
     * atributo deliveryDate de la base de datos
     */
    @Column(name = "tsk_delivery_date")
    private Instant deliveryDate;
    /**
     * atributo createdAt de la base de datos
     */

    @Column(name = "tsk_created_at")
    private Instant createdAt = Instant.now();
    /**
     * atributo updateAt de la base de datos
     */
    @Column(name = "tsk_updated_at")
    private Instant updateAt;

    /**
     *conexion uno a muchos de las entidades relacionales de las bases de datos, de la columna "log_task""
     */
    @OneToMany(fetch = FetchType.EAGER, targetEntity = LogDomain.class , mappedBy = "task", cascade = CascadeType.ALL)
    @JsonManagedReference(value = "log_task")
    private List<LogDomain>  log= new ArrayList<>();

    /**
     *conexion muchos a uno de las entidades relacionales de las bases de datos, de la columna "colunmDomain"
     */
    @ManyToOne(fetch = FetchType.EAGER, targetEntity = ColumnDomain.class, optional = false, cascade = CascadeType.DETACH)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "clm_id_column", insertable = false, updatable = false)
    @JsonBackReference(value ="colunmDomain")
    private ColumnDomain domain;
}
