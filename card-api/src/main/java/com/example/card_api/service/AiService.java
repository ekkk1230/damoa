package com.example.card_api.service;

import com.example.card_api.model.Card;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.InputStream;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AiService {

    @Value("${google.ai.api.key}")
    private String apiKey;

    private final ObjectMapper objectMapper;
    private final ResourceLoader resourceLoader;
    private final RestTemplate restTemplate = new RestTemplate();

    private final String GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-latest:generateContent?key=";

    /**
     * AI가 새로운 카드 데이터를 생성하도록 요청합니다.
     */
    public String generateNewCardData() {
        System.out.println(">>> [1] 카드 생성 시작...");
        String existingNames = "";
        String jsonSchemaSample = "";

        try {
            // 1. 기존 데이터 로드 (중복 제외 및 샘플 구조 학습용)
            Resource resource = resourceLoader.getResource("classpath:cards.json");
            if (resource.exists()) {
                System.out.println(">>> [2] 기존 JSON 파일 읽는 중...");
                InputStream inputStream = resource.getInputStream();
                List<Card> existingCards = objectMapper.readValue(inputStream, new TypeReference<List<Card>>() {});

                // 이미 있는 카드 이름 목록
                existingNames = existingCards.stream().map(Card::getName).collect(Collectors.joining(", "));

                // 첫 번째 카드를 가이드라인(Schema)으로 사용
                if (!existingCards.isEmpty()) {
                    jsonSchemaSample = objectMapper.writeValueAsString(existingCards.get(0));
                }
            }
        } catch (Exception e) {
            System.out.println("기존 파일을 읽는 중 오류 발생: " + e.getMessage());
        }

        // 2. 생성형 프롬프트 작성 (분석이 아닌 '생성' 요청)
        String prompt = String.format(
                "너는 대한민국 카드 데이터 생성 전문가야. 아래 [샘플 구조]를 참고해서 실존하는 새로운 카드 정보 20개를 JSON으로 생성해줘.\n\n" +
                        "[필수 조건]\n" +
                        "1. 다음 카드들은 이미 등록되어 있으니 절대 중복되지 않게 해줘: [%s]\n" +
                        "2. 대한민국에서 실제로 발급 가능한 인기 카드(신용 또는 체크) 정보를 정확하게 생성해.\n" +
                        "3. 혜택 내용, 전월 실적 구간(PerformanceTier), 혜택 규칙(BenefitRule)을 논리적으로 상세히 구성해.\n" +
                        "4. [샘플 구조]와 동일한 JSON 키 이름을 사용해야 해.\n\n" +
                        "[샘플 구조]\n%s\n\n" +
                        "결과는 반드시 순수 JSON만 출력하고, 마크다운(```json) 기호는 빼고 줘.",
                existingNames, jsonSchemaSample
        );

        System.out.println(">>> [3] AI API 호출 직전...");
        return callGeminiApi(prompt);
    }

    private String callGeminiApi(String prompt) {
        String url = GEMINI_URL + apiKey;

        Map<String, Object> requestBody = Map.of(
                "contents", new Object[]{
                        Map.of("parts", new Object[]{
                                Map.of("text", prompt)
                        })
                }
        );

        try {
            ResponseEntity<JsonNode> response = restTemplate.postForEntity(url, requestBody, JsonNode.class);
            return response.getBody()
                    .path("candidates").get(0)
                    .path("content").path("parts").get(0)
                    .path("text").asText().trim();
        } catch (Exception e) {
            throw new RuntimeException("AI API 호출 실패: " + e.getMessage());
        }
    }

    public void checkAvailableModels() {
        // 모델 리스트를 가져오는 전용 URL입니다.
        String listModelsUrl = "https://generativelanguage.googleapis.com/v1beta/models?key=" + apiKey;

        try {
            ResponseEntity<JsonNode> response = restTemplate.getForEntity(listModelsUrl, JsonNode.class);
            System.out.println("========= 사용 가능한 모델 목록 =========");
            JsonNode models = response.getBody().path("models");
            for (JsonNode model : models) {
                System.out.println("모델명: " + model.path("name").asText());
                System.out.println("지원 기능: " + model.path("supportedGenerationMethods"));
                System.out.println("------------------------------------");
            }
        } catch (Exception e) {
            System.out.println("모델 목록 확인 실패: " + e.getMessage());
        }
    }
}