package com.example.card_api.repository.spending;

import com.example.card_api.model.spending.Spending;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SpendingRepository extends JpaRepository<Spending, Long> {
    List<Spending> findAllByUserId(Long userId);
}
