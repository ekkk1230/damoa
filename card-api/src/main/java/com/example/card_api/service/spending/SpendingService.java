package com.example.card_api.service.spending;

import com.example.card_api.dto.SpendingRequest;
import com.example.card_api.dto.SpendingResponse;
import com.example.card_api.model.spending.Spending;
import com.example.card_api.model.user.User;
import com.example.card_api.model.user.UserCard;
import com.example.card_api.repository.spending.SpendingRepository;
import com.example.card_api.repository.user.UserCardRepository;
import com.example.card_api.repository.user.UserRepository;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SpendingService {
    private final SpendingRepository spendingRepository;
    private final UserRepository userRepository;
    private final UserCardRepository userCardRepository;

    public List<Spending> getAllSpendings() {
        return spendingRepository.findAll();
    }

    @Transactional
    public SpendingResponse saveSpending(SpendingRequest request) {
        Spending spending = new Spending();
        spending.setStoreName(request.getStoreName());
        spending.setAmount(request.getAmount());
        spending.setCategory(request.getCategory());
        spending.setDate(request.getDate());

        User user = userRepository.findById(request.getUserId()).orElseThrow();
        UserCard card = userCardRepository.findById(request.getUserCardId()).orElseThrow();

        int current = (card.getCurrentAmount() == null) ? 0 : card.getCurrentAmount();
        card.setCurrentAmount(current + request.getAmount());

        spending.setUser(user);
        spending.setUserCard(card);

        Spending saved = spendingRepository.save(spending);

        SpendingResponse response = new SpendingResponse();
        response.setId(saved.getId());
        response.setStoreName(saved.getStoreName());
        response.setAmount(saved.getAmount());
        response.setCategory(saved.getCategory());
        response.setDate(saved.getDate());
        response.setCardId(card.getId());

        return response;
    }

    public List<SpendingResponse> getSpendingHistory(Long userId) {
        List<Spending> spendings = spendingRepository.findAllByUserId(userId);
        return spendings.stream().map(s -> {
            SpendingResponse res = new SpendingResponse();
            res.setId(s.getId());
            res.setStoreName(s.getStoreName());
            res.setAmount(s.getAmount());
            res.setCategory(s.getCategory());
            res.setDate(s.getDate());

            if (s.getUserCard() != null) {
                res.setCardId(s.getUserCard().getId());
            }
            return res;
        }).collect(Collectors.toList());
    }
}
