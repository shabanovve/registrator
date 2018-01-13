package ru.yoga73.registrator.service;

import org.springframework.beans.factory.annotation.Autowired;
import ru.yoga73.registrator.persistence.entity.Customer;
import ru.yoga73.registrator.persistence.repository.CustomerRepository;

public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Iterable<Customer> obtainAllCustomers() {
        return customerRepository.findAll();
    }

    public void deleteCustomer(Long id) {
        customerRepository.delete(id);
    }
}
