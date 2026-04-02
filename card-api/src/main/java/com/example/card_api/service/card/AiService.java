package com.example.card_api.service.card;

import com.example.card_api.model.card.Card;
import com.example.card_api.repository.card.CardRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.InputStream;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AiService {

    @Value("${groq.api.key}")
    private String groqApiKey;

    private final ObjectMapper objectMapper;
    private final ResourceLoader resourceLoader;
    private final CardRepository cardRepository;
    private final RestTemplate restTemplate = new RestTemplate();

    private final String GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

    @Transactional
    public String generateNewCardData() {
        System.out.println(">>> [1] Groq 기반 카드 생성 및 저장 시작...");

        String existingNames = "";
        String jsonSchemaSample = "";

        // 1. 기존 데이터 읽기 (중복 방지 및 샘플 추출)
        try {
            Resource resource = resourceLoader.getResource("classpath:cards.json");
            if (resource.exists()) {
                InputStream inputStream = resource.getInputStream();
                List<Card> existingCards = objectMapper.readValue(inputStream, new TypeReference<List<Card>>() {});
                existingNames = existingCards.stream().map(Card::getName).collect(Collectors.joining(", "));
                if (!existingCards.isEmpty()) {
                    jsonSchemaSample = objectMapper.writeValueAsString(existingCards.get(0));
                }
            }
        } catch (Exception e) {
            System.out.println("기존 파일 읽기 실패: " + e.getMessage());
        }

        // 2. AI 프롬프트 구성
        String prompt = String.format(
                "너는 대한민국 신용카드 데이터 엔지니어다. 아래 지시사항을 엄격히 준수하여 데이터를 생성하라.\n\n" +
                        "[데이터 무결성 지시]\n" +
                        "1. 다음 목록에 있는 카드는 중복 생성하지 마라: [%s]\n" +
                        "2. 반드시 실제 존재하는 카드사명을 사용할 것.\n" +
                        "3. categories는 [SHOPPING, TRANSPORT, FOOD, MEDICAL, CULTURE, SUBSCRIPTION, LIVING, EDUCATION, ETC] 중 선택.\n" +
                        "4. image는 'Hex:#색상코드' 형식으로 적용할 것.\n\n" +
                        "[샘플 구조]\n%s\n\n" +
                        "결과는 마크다운 없이 순수 JSON만 출력해.",
                existingNames, jsonSchemaSample
        );

        // 3. AI 호출
        String jsonResult = callGroqApi(prompt);

        try {
            // 4. JSON -> 객체 변환
            Card newCard = objectMapper.readValue(jsonResult, Card.class);

            // ID 충돌 방지
            newCard.setId(null);

            // 자식 엔티티들에게 부모(newCard)를 연결
            if (newCard.getDetailBenefits() != null) {
                newCard.getDetailBenefits().forEach(db -> {
                    db.setId(null);
                    db.setCard(newCard);
                });
            }
            if (newCard.getPerformanceTiers() != null) {
                newCard.getPerformanceTiers().forEach(pt -> {
                    pt.setId(null);
                    pt.setCard(newCard);
                });
            }
            if (newCard.getBenefitRules() != null) {
                newCard.getBenefitRules().forEach(br -> {
                    br.setId(null);
                    br.setCard(newCard);
                });
            }
            if (newCard.getStatistics() != null) {
                newCard.getStatistics().setId(null);
            }

            // 5. DB 저장
            Card savedCard = cardRepository.save(newCard);
            System.out.println(">>> [3-1] DB 저장 완료: ");

            // 6. cards.json 파일 업데이트
            saveToCardsJson(savedCard);
            System.out.println(">>> [3-2] cards.json 파일 업데이트 완료!");

        } catch (Exception e) {
            e.printStackTrace();
            System.err.println("저장 실패 상세 원인: " + e.getMessage());
        }

        return jsonResult;
    }

    private void saveToCardsJson(Card newCard) {
        try {
            String projectRoot = System.getProperty("user.dir");
            // 경로 확인
            File file = new File(projectRoot, "card-api/src/main/resources/cards.json");

            if (!file.exists()) {
                System.err.println("파일을 찾을 수 없습니다: " + file.getAbsolutePath());
                return;
            }

            List<Card> cards = objectMapper.readValue(file, new TypeReference<List<Card>>() {});
            cards.add(newCard);
            objectMapper.writerWithDefaultPrettyPrinter().writeValue(file, cards);

        } catch (Exception e) {
            System.err.println("파일 기록 에러: " + e.getMessage());
        }
    }

    private String callGroqApi(String prompt) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(groqApiKey);

        Map<String, Object> requestBody = Map.of(
                "model", "llama-3.3-70b-versatile",
                "messages", new Object[]{
                        Map.of("role", "user", "content", prompt)
                },
                "temperature", 0.7
        );

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        try {
            System.out.println(">>> [2] Groq API 호출 중...");
            ResponseEntity<JsonNode> response = restTemplate.postForEntity(GROQ_URL, entity, JsonNode.class);

            return response.getBody()
                    .path("choices").get(0)
                    .path("message").path("content").asText().trim();
        } catch (Exception e) {
            throw new RuntimeException("Groq API 호출 실패: " + e.getMessage());
        }
    }
}