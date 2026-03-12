package com.example.card_api.model;

import jakarta.persistence.*;
import lombok.*;

@Getter @Setter @Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String company;
    private Integer annualFee;
}
