package ru.yoga73.registrator.persistence.entity;

import javax.persistence.*;

@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @SequenceGenerator(name="seq_customers",sequenceName="seq_customers", allocationSize=50)
    @GeneratedValue(strategy=GenerationType.SEQUENCE,generator="seq_customers")
    @Column(name = "customer_id")
    private Long id;
    private String name;

    private Customer() {
    }

    public Customer(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
