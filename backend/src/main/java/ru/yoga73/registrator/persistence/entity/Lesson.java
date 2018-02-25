package ru.yoga73.registrator.persistence.entity;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "lessons")
public class Lesson {
    @Id
    @SequenceGenerator(name="seq_lessons",sequenceName="seq_lessons", allocationSize=50)
    @GeneratedValue(strategy=GenerationType.SEQUENCE,generator="seq_lessons")
    @Column(name = "lesson_id")
    private Long id;
    private Date date;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
