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
            System.out.println(">>> 데이터 초기화 시작!");
            try {
                ClassPathResource resource = new ClassPathResource("cards.json");
                InputStream inputStream = resource.getInputStream();

                List<Card> cards = objectMapper.readValue(inputStream, new TypeReference<List<Card>>() {});

                System.out.println(">>> JSON 파일에서 읽어온 카드 개수: " + (cards != null ? cards.size() : "null"));

                if (cards != null && !cards.isEmpty()) {
                    cardService.saveOrUpdateCards(cards);
                    System.out.println(cards.size() + "개의 카드를 DB에 저장하라고 명령했습니다!");
                } else {
                    System.err.println("cards.json 파일이 비어있거나 배열 형식이 아닙니다.");
                }

            } catch (Exception e) {
                System.err.println("에러 발생: " + e.getMessage());
                e.printStackTrace();
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
