package com.example.card_api.controller; // 패키지 경로 확인!

import com.example.card_api.repository.card.CardRepository;
import com.example.card_api.service.card.AiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
public class AiController {

    private final AiService aiService;
    private final CardRepository cardRepository;

    @GetMapping("/generate")
    public String generateCard() {
        return aiService.generateNewCardData();
    }

    @GetMapping("/list")
    public java.util.List<com.example.card_api.model.card.Card> getAllCards() {
        System.out.println(">>> [확인] 현재 DB에 저장된 모든 카드 목록을 불러옵니다.");
        return cardRepository.findAll();
    }
}