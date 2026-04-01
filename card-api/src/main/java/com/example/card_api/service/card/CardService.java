package com.example.card_api.service.card;

import com.example.card_api.model.card.Card;
import com.example.card_api.repository.card.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
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

        card.setViewCount(card.getViewCount() + 1);
        return card;
    }

    @Transactional
    public void saveOrUpdateCards(List<Card> newCards) {
        for (Card cardFromAi : newCards) {
            cardRepository.findByName(cardFromAi.getName())
                    .ifPresentOrElse(
                            existingCard -> updateCardInfo(existingCard, cardFromAi),

                            () -> {
                                linkCardWithDetails(cardFromAi);
                                cardRepository.save(cardFromAi);
                            }
                    );
        }
    }

    private void updateCardInfo(Card existingCard, Card newInfo) {
        existingCard.setCompany(newInfo.getCompany());
        existingCard.setAnnualFee(newInfo.getAnnualFee());
        existingCard.setImage(newInfo.getImage());
        existingCard.setSummary(newInfo.getSummary());
        existingCard.setCondition(newInfo.getCondition());
        existingCard.setOfficialLink(newInfo.getOfficialLink());
        existingCard.setCardType(newInfo.getCardType());

        existingCard.getDetailBenefits().clear();
        existingCard.getDetailBenefits().addAll(newInfo.getDetailBenefits());

        existingCard.getBenefitRules().clear();
        existingCard.getBenefitRules().addAll(newInfo.getBenefitRules());

        existingCard.getPerformanceTiers().clear();
        existingCard.getPerformanceTiers().addAll(newInfo.getPerformanceTiers());
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
