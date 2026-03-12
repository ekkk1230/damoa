package com.example.card_api.service;

import com.example.card_api.model.Card;
import com.example.card_api.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CardService {
    private final CardRepository cardRepository;

    public List<Card> getCards() {
//        Card card1 = Card.builder()
//                .id(1L)
//                .name("이름")
//                .company("회사")
//                .annualFee(1000)
//                .build();
//        Card card2 = Card.builder()
//                .id(2L)
//                .name("이름2")
//                .company("회사2")
//                .annualFee(2000)
//                .build();
//        Card card3 = Card.builder()
//                .id(3L)
//                .name("이름3")
//                .company("회사3")
//                .annualFee(3000)
//                .build();
//
//        return List.of(card1, card2, card3);
        return cardRepository.findAll();

    }
}
