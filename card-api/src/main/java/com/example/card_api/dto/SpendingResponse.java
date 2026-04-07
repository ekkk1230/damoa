package com.example.card_api.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
public class SpendingResponse {
    private Long id;
    private String storeName;
    private Integer amount;
    private String category;
    private LocalDate date;
    private Long cardId;
}
