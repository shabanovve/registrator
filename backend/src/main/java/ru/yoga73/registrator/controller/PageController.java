package ru.yoga73.registrator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import ru.yoga73.registrator.service.CustomerService;

@Controller
public class PageController {

    @Autowired
    private CustomerService customerService;

    public PageController() {
    }

    @RequestMapping("/")
    public String getIngex() {
        return "index";
    }
}
