package com.example.card_api.model.card;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class CardStatistics {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    private GenderData gender;

    @ElementCollection
    private List<AgeGroupData> ageGroups; // [{label: "20대", value: 35}...]
}

@Embeddable
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
class GenderData {
    private Integer maleRate;
    private Integer femaleRate;
}

@Embeddable
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
class AgeGroupData {
    private String label;
    private Integer value;
}