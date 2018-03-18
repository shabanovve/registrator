package ru.yoga73.registrator.dto;

import ru.yoga73.registrator.persistence.entity.Customer;
import ru.yoga73.registrator.persistence.entity.Lesson;

public class RegistrationDto {
    private Long id;
    private Customer customer;
    private Lesson lesson;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Lesson getLesson() {
        return lesson;
    }

    public void setLesson(Lesson lesson) {
        this.lesson = lesson;
    }
}
