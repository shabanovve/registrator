package ru.yoga73.registrator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.yoga73.registrator.dto.RequestResult;
import ru.yoga73.registrator.service.CustomerService;


@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public RequestResult addUser() {
        customerService.addCustomer("Test");
        return new RequestResult("OK");
    }

}
