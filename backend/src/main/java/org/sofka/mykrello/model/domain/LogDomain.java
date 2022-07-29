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
public class LogDomain implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "log_id", nullable = false, updatable = false)
    private Integer id;



    //se creo
@Column(name = "tsk_id_task", insertable = false,updatable = false)
private  Integer taskId;

    @Column(name = "clm_id_previous")
    private Integer previous;

    @Column(name = "clm_id_current")
    private Integer current;

    // se agrego el trasnsient
    @Transient
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = TaskDomain.class, optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name = "tsk_id_task", nullable = false, updatable = false)
    @JsonBackReference(value = "log_task")
    private TaskDomain task;



    @Column(name = "log_created_at", nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

public LogDomain(Integer taskId, Integer previous, Integer current){
    this.taskId = taskId;
    this.previous = previous;
    this.current = current;
}

public LogDomain(){

}

}
