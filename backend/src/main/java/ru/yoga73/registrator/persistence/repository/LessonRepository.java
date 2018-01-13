package ru.yoga73.registrator.persistence.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.yoga73.registrator.persistence.entity.Lesson;

import javax.persistence.Table;

@Repository
@Table(name = "lessons")
public interface LessonRepository extends CrudRepository<Lesson, Long> {

}
