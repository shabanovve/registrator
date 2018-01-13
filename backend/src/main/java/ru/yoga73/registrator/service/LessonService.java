package ru.yoga73.registrator.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.yoga73.registrator.persistence.entity.Lesson;
import ru.yoga73.registrator.persistence.repository.LessonRepository;

@Service
public class LessonService {

    @Autowired
    private LessonRepository lessonRepository;

    public Lesson addLesson(Lesson lesson) {
        return lessonRepository.save(lesson);
    }

    public Iterable<Lesson> obtainAllLessons() {
        return lessonRepository.findAll();
    }

    public void deleteLesson(Long id) {
        lessonRepository.delete(id);
    }
}
