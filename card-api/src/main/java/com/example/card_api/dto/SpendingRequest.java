package com.example.card_api.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

@Getter @Setter @ToString
public class SpendingRequest {
    private Long userId;
    private Long userCardId;
    private String storeName;
    private Integer amount;
    private String category;
    private LocalDate date;
}