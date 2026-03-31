package com.example.card_api.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
public class PerformanceTier {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer minAmount;
    private Integer maxAmount;
    private double rate;

    @Column(name = "description")
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "card_id")
    @com.fasterxml.jackson.annotation.JsonIgnore
    private Card card;
}
