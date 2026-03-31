package com.example.card_api.config;

import com.example.card_api.model.Card;
import com.example.card_api.model.CardType;
import com.example.card_api.model.DetailBenefit;
import com.example.card_api.model.PerformanceTier;
import com.example.card_api.repository.CardRepository;
import com.example.card_api.service.CardService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {
    private final CardService cardService;
    private final ObjectMapper objectMapper;

    @Bean
    public CommandLineRunner initData() {
        return args -> {
            try {
                ClassPathResource resource = new ClassPathResource("cards.json");
                InputStream inputStream = resource.getInputStream();

                List<Card> cards = objectMapper.readValue(inputStream, new TypeReference<List<Card>>() {});

                cardService.saveOrUpdateCards(cards);

                System.out.println("✅ 총 " + cards.size() + "개의 카드 데이터가 동기화되었습니다.");
            } catch (Exception e) {
                System.err.println("❌ 데이터를 읽어오는 중 오류가 발생했습니다: " + e.getMessage());
            }
        };
    }

}
