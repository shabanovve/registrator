package ru.yoga73.registrator.dto;

public class RequestResult {

    private final String status;


    public RequestResult(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }
}
