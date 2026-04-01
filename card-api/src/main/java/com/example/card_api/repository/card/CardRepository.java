package com.example.card_api.repository.card;

import com.example.card_api.model.card.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CardRepository extends JpaRepository<Card, Long>{
    Optional<Card> findByName(String name);

    List<Card> findAllByOrderByIdDesc();

    List<Card> findTop5ByOrderByViewCountDesc();

}
