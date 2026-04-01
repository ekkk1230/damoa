package com.example.card_api.controller.card;

import com.example.card_api.model.card.Card;
import com.example.card_api.service.card.AiService;
import com.example.card_api.service.card.CardService;
import com.fasterxml.jackson.databind.ObjectMapper; // 추가
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class CardController {

    private final CardService cardService;
    private final AiService aiService; // 추가 (인스턴스 호출을 위해 필요)
    private final ObjectMapper objectMapper; // 추가 (JSON 파싱을 위해 필요)

    @GetMapping
    public List<Card> getCards() {
        return cardService.getCards();
    }

    @PostMapping("/generate")
    public ResponseEntity<?> generateAndSave() {
        try {
            // 1. AI에게 새로운 카드 데이터 생성 요청 (JSON 문자열 반환)
            String aiJsonResponse = aiService.generateNewCardData();

            // 2. JSON 문자열을 Card 객체로 변환 (여기서 발생하던 오류 해결!)
            // objectMapper가 던지는 예외를 아래 catch(Exception e)가 한꺼번에 잡아줍니다.
            Card newCard = objectMapper.readValue(aiJsonResponse, Card.class);

            // 3. DB 및 JSON 파일 저장
            cardService.saveOrUpdateCards(List.of(newCard));

            return ResponseEntity.ok(newCard);

        } catch (com.fasterxml.jackson.core.JsonProcessingException e) {
            // AI가 준 데이터가 JSON 형식이 아닐 때 발생하는 구체적인 에러
            return ResponseEntity.status(500).body("AI 응답 형식이 올바르지 않습니다: " + e.getMessage());
        } catch (Exception e) {
            // 그 외 모든 에러 처리
            return ResponseEntity.status(500).body("카드 생성 중 오류 발생: " + e.getMessage());
        }
    }
}