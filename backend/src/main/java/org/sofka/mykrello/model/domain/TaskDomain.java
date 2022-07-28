package org.sofka.mykrello.model.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "krl_task")
public class TaskDomain implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tsk_id", nullable = false)
    private Integer id;


    @ManyToOne(fetch = FetchType.LAZY, targetEntity = ColumnDomain.class, optional = false, cascade = CascadeType.DETACH)
    @JoinColumn(name = "clm_id_column", nullable = false)
    @JsonBackReference(value ="columns")
    private ColumnDomain column ;


    @ManyToOne(fetch = FetchType.LAZY, targetEntity = BoardDomain.class, optional = false, cascade = CascadeType.DETACH)
    @JoinColumn(name = "brd_id_board", nullable = false)
    @JsonBackReference(value = "board")
    private BoardDomain board;

    @Column(name = "tsk_name", nullable = false, length = 100)
    private String name;

    @Column(name = "tsk_description", nullable = false, length = 2000)
    private String description;

    @Column(name = "tsk_delivery_date")
    private Instant deliveryDate;

    @Column(name = "tsk_created_at", nullable = false)
    private Instant createdAt;

    @Column(name = "tsk_update_at")
    private Instant updateAt;

    @OneToMany(fetch = FetchType.LAZY, targetEntity = LogDomain.class, cascade = CascadeType.ALL, mappedBy = "task")
    @JsonManagedReference(value = "task")
    private List<TaskDomain> taskDomainList = new ArrayList<>();
}
