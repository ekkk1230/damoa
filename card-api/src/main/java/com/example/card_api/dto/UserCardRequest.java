package com.example.card_api.dto;

import lombok.*;

@Getter
@Setter
@ToString
public class UserCardRequest {
    private UserInfo user;
    private CardInfo card;
    private int targetAmount;
    private int currentAmount;
    private int billingDate;
    private String startDate;
    private String endDate;

    public static class UserInfo { public Long id; }
    public static class CardInfo { public Long id; }
}