package ru.yoga73.registrator.controller;

import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.yoga73.registrator.persistence.entity.Customer;
import ru.yoga73.registrator.service.CustomerService;

import java.util.List;

@RestController
@RequestMapping(CustomerController.BASE_URL)
public class CustomerController {

    public static final String BASE_URL = "/api/customers";

    @Autowired
    private CustomerService customerService;

    @RequestMapping
    public List<Customer> obtainAllCustomers() {
        return Lists.newArrayList(customerService.obtainAllCustomers());
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Customer addUser(@RequestBody Customer customer) {
        return customerService.addCustomer(customer);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public String deleteCustomer(@PathVariable("id") Long id) {
        Customer customer = customerService.getById(id);
        customerService.deleteCustomer(customer);
        return "{\"status\":\"OK\"}";
    }

    @RequestMapping(value = "/current", method = RequestMethod.GET)
    public Customer getCurrent() {
        return customerService.getById(1L);
    }
}
