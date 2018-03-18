package ru.yoga73.registrator.controller;

import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.yoga73.registrator.dto.RegistrationDto;
import ru.yoga73.registrator.persistence.entity.Customer;
import ru.yoga73.registrator.persistence.entity.Registration;
import ru.yoga73.registrator.service.CustomerService;
import ru.yoga73.registrator.service.RegistrationService;

import java.util.List;

@RestController
@RequestMapping(RegistrationController.BASE_URL)
public class RegistrationController {

    public static final String BASE_URL = "/api/registrations";

    @Autowired
    private RegistrationService registrationService;

    @RequestMapping
    public List<Registration> obtainAllRegistrations() {
        return Lists.newArrayList(registrationService.obtainAllRegistrations());
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public RegistrationDto addRegistration(@RequestBody RegistrationDto registrationDto) {
        Registration registration = registrationService.addRegistration(registrationDto);
        RegistrationDto result = new RegistrationDto();
        result.setId(registration.getId());
        result.setCustomer(registration.getCustomer());
        result.setLesson(registration.getLesson());
        return result;
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public String deleteRegistration(@PathVariable("id") Long id) {
        registrationService.deleteRegistration(id);
        return "{\"status\":\"OK\"}";
    }
}
