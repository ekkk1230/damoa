package com.example.card_api.model.card;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
public class BenefitRule {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;
    private double rate;

    private String benefitType;

    private Integer benefitLimit;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "card_id")
    @com.fasterxml.jackson.annotation.JsonIgnore
    private Card card;
}
