package com.example.card_api.service.card;

import com.example.card_api.model.card.Card;
import com.example.card_api.model.card.DetailBenefit;
import com.example.card_api.model.card.BenefitRule;
import com.example.card_api.model.card.PerformanceTier;
import com.example.card_api.repository.card.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CardService {
    private final CardRepository cardRepository;

    public List<Card> getCards() {
        return cardRepository.findAll();
    }

    public List<Card> getRecentCardsForDashboard() {
        List<Card> allCards = cardRepository.findAllByOrderByIdDesc();
        return allCards.stream().limit(5).toList();
    }

    public List<Card> getPopularCards() {
        return cardRepository.findTop5ByOrderByViewCountDesc();
    }

    public Card getCardById(Long id) {
        return cardRepository.findById(id).orElse(null);
    }

    @Transactional
    public Card getCardDetailWithCount(Long id) {
        Card card = cardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("카드가 없습니다."));

        // card.setViewCount(card.getViewCount() + 1);
        Long currentCount = card.getViewCount();
        card.setViewCount((currentCount == null ? 0L : currentCount) + 1);
        return card;
    }

    @Transactional
    public void saveOrUpdateCards(List<Card> newCards) {
        if (newCards == null) return;

        for (Card cardFromAi : newCards) {
            cardRepository.findByName(cardFromAi.getName())
                    .ifPresentOrElse(
                            existingCard -> updateCardInfo(existingCard, cardFromAi),
                            () -> {
                                linkCardWithDetails(cardFromAi);
                                cardRepository.save(cardFromAi);
                                System.out.println(">>> [신규 저장] " + cardFromAi.getName());
                            }
                    );
        }
    }

    private void updateCardInfo(Card existingCard, Card newInfo) {
        // 1. 기본 정보 업데이트
        existingCard.setCompany(newInfo.getCompany());
        existingCard.setAnnualFee(newInfo.getAnnualFee());
        existingCard.setImage(newInfo.getImage());
        existingCard.setSummary(newInfo.getSummary());
        existingCard.setCondition(newInfo.getCondition());
        existingCard.setOfficialLink(newInfo.getOfficialLink());
        existingCard.setCardType(newInfo.getCardType());

        // 2. 상세 혜택 (DetailBenefit) 업데이트
        if (newInfo.getDetailBenefits() != null && !newInfo.getDetailBenefits().isEmpty()) {
            existingCard.getDetailBenefits().clear();
            newInfo.getDetailBenefits().forEach(benefit -> {
                benefit.setCard(existingCard);
                existingCard.getDetailBenefits().add(benefit);
            });
        }

        // 3. 혜택 룰 (BenefitRule) 업데이트
        if (newInfo.getBenefitRules() != null && !newInfo.getBenefitRules().isEmpty()) {
            existingCard.getBenefitRules().clear();
            newInfo.getBenefitRules().forEach(rule -> {
                rule.setCard(existingCard);
                existingCard.getBenefitRules().add(rule);
            });
        }

        // 4. 실적 구간 (PerformanceTier) 업데이트
        if (newInfo.getPerformanceTiers() != null && !newInfo.getPerformanceTiers().isEmpty()) {
            existingCard.getPerformanceTiers().clear();
            newInfo.getPerformanceTiers().forEach(tier -> {
                tier.setCard(existingCard);
                existingCard.getPerformanceTiers().add(tier);
            });
        }

        System.out.println(">>> [업데이트 완료] " + existingCard.getName());
    }

    private void linkCardWithDetails(Card card) {
        if (card.getDetailBenefits() != null) {
            card.getDetailBenefits().forEach(benefit -> benefit.setCard(card));
        }

        if (card.getBenefitRules() != null) {
            card.getBenefitRules().forEach(rule -> rule.setCard(card));
        }

        if(card.getPerformanceTiers() != null) {
            card.getPerformanceTiers().forEach(tier -> tier.setCard(card));
        }
    }
}