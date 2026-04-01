package com.example.card_api.config;

import com.example.card_api.model.card.Card;
import com.example.card_api.model.user.User;
import com.example.card_api.model.user.UserRole;
import com.example.card_api.repository.user.UserRepository;
import com.example.card_api.service.card.CardService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import java.io.InputStream;
import java.time.LocalDate;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {
    private final CardService cardService;
    private final ObjectMapper objectMapper;
    private final UserRepository userRepository;

    @Bean
    public CommandLineRunner initData() {
        return args -> {
            try {
                ClassPathResource resource = new ClassPathResource("cards.json");
                InputStream inputStream = resource.getInputStream();

                List<Card> cards = objectMapper.readValue(inputStream, new TypeReference<List<Card>>() {});

                cardService.saveOrUpdateCards(cards);

            } catch (Exception e) {
                System.err.println("❌ 데이터를 읽어오는 중 오류가 발생했습니다: " + e.getMessage());
            }

            try {
                if (userRepository.findByLoginId("admin").isEmpty()) {
                    User admin = new User();
                    admin.setLoginId("admin");
                    admin.setPassword("1234");
                    admin.setName("관리자");
                    admin.setGender("F");
                    admin.setBirthDate(LocalDate.parse("1985-01-27"));
                    admin.setRole(UserRole.ADMIN);

                    userRepository.save(admin);
                }
            } catch (Exception e) {
                System.err.println("관리자 계정 생성 실패");
            }
        };
    }

}
