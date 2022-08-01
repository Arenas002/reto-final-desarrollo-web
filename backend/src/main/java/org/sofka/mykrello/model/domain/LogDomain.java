package org.sofka.mykrello.model.domain;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;
import org.springframework.data.annotation.Transient;

@Data
@Entity
@Table(name = "krl_log")
/**
 * esta clase es la encargada de mapear el modelo de log de la base de datos
 *   @class LogDomain
 *   @author Cristian David Arenas - Julio César Torres
 *   @version 1.0.0
 */

public class LogDomain implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * atributo id de la base de datos
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "log_id", nullable = false, updatable = false)
    private Integer id;


    /**
     * atributo taskId de la base de datos
     */
@Column(name = "tsk_id_task", insertable = false,updatable = false)
private  Integer taskId;

/**
     * atributo previous de la base de datos
     */
    @Column(name = "clm_id_previous")
    private Integer previous;

    /**
     * atributo current de la base de datos
     */
    @Column(name = "clm_id_current")
    private Integer current;

    /**
     *conexion muchos a uno de las entidades relacionales de las bases de datos, de la columna "log_task"
     */
    @Transient
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = TaskDomain.class, optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name = "tsk_id_task", nullable = false, updatable = false)
    @JsonBackReference(value = "log_task")
    private TaskDomain task;

    /**
     * atributo createdAt de la base de datos
     */

    @Column(name = "log_created_at", nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

    /**
     * metodo contructor de la clase
     * @param taskId
     * @param previous
     * @param current
     */

    public LogDomain(Integer taskId, Integer previous, Integer current){
    this.taskId = taskId;
    this.previous = previous;
    this.current = current;
}

    /**
     * metodo contructor vacio
     */
    public LogDomain(){

}

}
