package com.example.card_api.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
public class DetailBenefit {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;
    @Column(name = "benefit_limit")
    private String detailLimit;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "card_id")
    @com.fasterxml.jackson.annotation.JsonIgnore
    private Card card;
}
