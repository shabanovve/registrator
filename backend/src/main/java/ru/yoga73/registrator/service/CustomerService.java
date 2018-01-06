package ru.yoga73.registrator.service;

import org.springframework.beans.factory.annotation.Autowired;
import ru.yoga73.registrator.persistence.entity.Customer;
import ru.yoga73.registrator.persistence.repository.CustomerRepository;

public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public void addCustomer(String name) {
        customerRepository.save(new Customer(name));
    }
}
