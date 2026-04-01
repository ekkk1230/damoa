package com.example.card_api.controller.card;

import com.example.card_api.model.card.Card;
import com.example.card_api.service.card.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
@RequiredArgsConstructor
public class CardApiController {
    private final CardService cardService;

    @GetMapping("/{id}")
    public Card getCardDetail(@PathVariable Long id) {
        return cardService.getCardDetailWithCount(id);
    }
}
