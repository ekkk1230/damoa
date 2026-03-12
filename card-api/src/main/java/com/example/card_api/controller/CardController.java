package com.example.card_api.controller;

import com.example.card_api.model.Card;
import com.example.card_api.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class CardController {
    private final CardService cardService;

    @GetMapping("cards")
    public List<Card> getCards() {
        return cardService.getCards();
    }
//    public List<Map<String, Object>> getCards() {
//        return List.of(
//                Map.of(
//                        "id", 1,
//                        "name", "Deep Dream",
//                        "company", "신한카드",
//                        "annualFee", 10000
//                ),
//                Map.of(
//                        "id", 2,
//                        "name", "taptap O",
//                        "company", "삼성카드",
//                        "annualFee", 10000
//                ),
//                Map.of(
//                        "id", 3,
//                        "name", "ZERO Edition2",
//                        "company", "현대카드",
//                        "annualFee", 15000
//                )
//        );
//    }



}
