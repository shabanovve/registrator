package ru.yoga73.registrator.controller;

import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.yoga73.registrator.persistence.entity.Lesson;
import ru.yoga73.registrator.service.LessonService;

import java.util.List;

import static ru.yoga73.registrator.controller.LessonController.BASE_URL;

@RestController
@RequestMapping(BASE_URL)
public class LessonController {

    public static final String BASE_URL = "/api/lessons";

    @Autowired
    private LessonService lessonService;

    @RequestMapping
    public List<Lesson> obtainAllLessons() {
        return Lists.newArrayList(lessonService.obtainAllLessons());
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Lesson addUser(@RequestBody Lesson lesson) {
        return lessonService.addLesson(lesson);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public String deleteLesson(@PathVariable("id") Long id) {
        Lesson lesson = lessonService.findById(id);
        lessonService.deleteLesson(lesson);
        return "{\"status\":\"OK\"}";
    }

}
