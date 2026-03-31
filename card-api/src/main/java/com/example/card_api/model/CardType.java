package com.example.card_api.model;

public enum CardType {
    CREDIT("신용"),
    CHECK("체크"),
    HYBRID("하이브리드");

    private final String value;
    CardType(String value) { this.value = value; }
}
