package com.example.card_api.model.user;

public enum UserRole {
    ADMIN("관리자"),
    USER("사용자");

    private final String value;
    UserRole(String value) { this.value = value; }
}
