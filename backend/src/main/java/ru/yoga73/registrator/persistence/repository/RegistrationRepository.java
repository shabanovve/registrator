package ru.yoga73.registrator.persistence.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.yoga73.registrator.persistence.entity.Registration;

import javax.persistence.Table;

@Repository
@Table(name = "registrations")
public interface RegistrationRepository extends CrudRepository<Registration, Long>{
}
