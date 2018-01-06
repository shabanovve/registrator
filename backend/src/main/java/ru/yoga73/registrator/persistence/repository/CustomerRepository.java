package ru.yoga73.registrator.persistence.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.yoga73.registrator.persistence.entity.Customer;

import javax.persistence.Table;

@Repository
@Table(name = "customers")
public interface CustomerRepository extends CrudRepository<Customer, Long> {

}
