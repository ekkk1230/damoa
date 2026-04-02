package com.example.card_api.model.user;

import com.example.card_api.model.card.Card;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor
public class UserCard {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @com.fasterxml.jackson.annotation.JsonIgnore
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "card_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Card card;

    private Integer targetAmount;
    private Integer currentAmount;
    private Integer billingDate;

    private LocalDate startDate;
    private LocalDate endDate;

    private LocalDateTime registeredDate;

    @PrePersist
    public void prePersist() {
        this.registeredDate = LocalDateTime.now();
    }
}
