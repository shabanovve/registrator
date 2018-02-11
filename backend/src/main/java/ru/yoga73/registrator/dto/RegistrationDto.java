package ru.yoga73.registrator.dto;

public class RegistrationDto {
    private Long id;
    private Long customerId;
    private Long lessonId;

    public RegistrationDto() {}

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public void setLessonId(Long lessonId) {
        this.lessonId = lessonId;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public Long getLessonId() {
        return lessonId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
