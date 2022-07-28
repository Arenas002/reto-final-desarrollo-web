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


@Data
@Entity
@Table(name = "krl_task")
public class TaskDomain implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tsk_id", nullable = false)
    private Integer id;


    @ManyToOne(fetch = FetchType.EAGER, targetEntity = ColumnDomain.class, optional = false, cascade = CascadeType.DETACH)
    @JoinColumn(name = "clm_id_column", insertable = false, updatable = false)
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

    @Column(name = "clm_id_column")
    private Integer columnTask;

//    @Column(name = "clm_id_board")
//    private Integer boardTask;


    @Column(name = "tsk_delivery_date")
    private Instant deliveryDate;

    //se le agrego el Instant.now
    @Column(name = "tsk_created_at")
    private Instant createdAt = Instant.now();

    @Column(name = "tsk_updated_at")
    private Instant updateAt;

    @OneToMany(fetch = FetchType.LAZY, targetEntity = LogDomain.class , cascade = CascadeType.ALL, mappedBy = "task")
    @JsonManagedReference(value = "log_task")
    private List<LogDomain> taskDomainList = new ArrayList<>();
}
