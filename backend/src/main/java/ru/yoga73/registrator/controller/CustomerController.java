package ru.yoga73.registrator.controller;

import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.yoga73.registrator.persistence.entity.Customer;
import ru.yoga73.registrator.service.CustomerService;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @RequestMapping
    public List<Customer> obtainAllCustomers() {
        return Lists.newArrayList(customerService.obtainAllUsers());
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Customer addUser(@RequestBody Customer customer) {
        return customerService.addCustomer(customer);
    }

}
