package ru.yoga73.registrator.config;

import org.springframework.context.annotation.Bean;
import ru.yoga73.registrator.service.CustomerService;

@org.springframework.context.annotation.Configuration
public class Configuration {

    @Bean
    public CustomerService getCustomerService() {
        return new CustomerService();
    }

}
