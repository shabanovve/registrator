package ru.yoga73.registrator.persistence.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "registrations")
public class Registration {
    @Id
    @GeneratedValue
    @Column(name = "registration_id")
    private Long id;

    @JsonProperty()
    @ManyToOne
    private Customer customer;

    @ManyToOne
    private Lesson lesson;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Lesson getLesson() {
        return lesson;
    }

    public void setLesson(Lesson lesson) {
        this.lesson = lesson;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
