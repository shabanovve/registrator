package ru.yoga73.registrator.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.yoga73.registrator.dto.RegistrationDto;
import ru.yoga73.registrator.persistence.entity.Customer;
import ru.yoga73.registrator.persistence.entity.Lesson;
import ru.yoga73.registrator.persistence.entity.Registration;
import ru.yoga73.registrator.persistence.repository.CustomerRepository;
import ru.yoga73.registrator.persistence.repository.LessonRepository;
import ru.yoga73.registrator.persistence.repository.RegistrationRepository;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;
    @Autowired
    private LessonRepository lessonRepository;
    @Autowired
    private CustomerRepository customerRepository;

    public Registration addRegistration(RegistrationDto registrationDto) {
        Registration registration = new Registration();
        Lesson lesson = lessonRepository.findById(registrationDto.getLesson().getId()).get();
        Customer customer = customerRepository.findById(registrationDto.getCustomer().getId()).get();
        registration.setCustomer(customer);
        registration.setLesson(lesson);
        return registrationRepository.save(registration);
    }

    public Iterable<Registration> obtainAllRegistrations() {
        return registrationRepository.findAll();
    }

    public void deleteRegistration(Long id) {
        registrationRepository.delete(id);
    }

}
