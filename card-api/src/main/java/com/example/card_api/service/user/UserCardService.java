package com.example.card_api.service.user;

import com.example.card_api.dto.UserCardRequest;
import com.example.card_api.model.card.Card;
import com.example.card_api.model.user.User;
import com.example.card_api.model.user.UserCard;
import com.example.card_api.repository.card.CardRepository;
import com.example.card_api.repository.user.UserCardRepository;
import com.example.card_api.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserCardService {
    private final UserCardRepository userCardRepository;
    private final UserRepository userRepository;
    private final CardRepository cardRepository;

    @Transactional
    public UserCard registerCard(UserCard userCard) {
        return userCardRepository.save(userCard);
    }

    public List<UserCard> getMyCards(Long userId) {
        return userCardRepository.findByUserId(userId);
    }

    @Transactional
    public UserCard addCardToUser(UserCardRequest request) { // void -> UserCard
        // 1. 유저와 카드가 실제 DB에 있는지 확인
        User user = userRepository.findById(request.getUser().id)
                .orElseThrow(() -> new RuntimeException("유저를 찾을 수 없습니다."));
        Card card = cardRepository.findById(request.getCard().id)
                .orElseThrow(() -> new RuntimeException("카드를 찾을 수 없습니다."));

        // 2. UserCard 엔티티 생성 및 설정
        UserCard userCard = new UserCard();
        userCard.setUser(user);
        userCard.setCard(card);
        userCard.setTargetAmount(request.getTargetAmount());
        userCard.setCurrentAmount(request.getCurrentAmount());
        userCard.setBillingDate(request.getBillingDate());
        userCard.setStartDate(LocalDate.parse(request.getStartDate()));
        userCard.setEndDate(LocalDate.parse(request.getEndDate()));

        // 3. 저장하고 그 결과 리턴
        return userCardRepository.save(userCard);
    }
}
