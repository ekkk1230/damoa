package com.example.card_api.model.card;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter @Setter @Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = {"name", "company"}) // 이름과 카드사가 모두 같을 때만 중복으로 간주
})
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;
    private String company;
    private Integer annualFee;
    private String image;

    @ElementCollection
    private List<String> mainBenefits;

    @ElementCollection
    private List<String> categories;

    private String summary;

    @Column(name = "usage_condition")
    private String condition;

    private String officialLink;

    // @Enumerated(EnumType.STRING)
    @Column(name = "card_type")
    private String cardType; // 신용, 체크, 하이브리드 Enum

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "statistics_id")
    private CardStatistics statistics;

    @OneToMany(mappedBy = "card", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DetailBenefit> detailBenefits;

    @OneToMany(mappedBy = "card", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PerformanceTier> performanceTiers;

    @OneToMany(mappedBy = "card", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BenefitRule> benefitRules;

    private Integer bestPerformance;
    private Double baseRate;
    private String maxBenefit;

    private Long viewCount = 0L;

    private void increamentViewCount() {
        this.viewCount++;
    }
}
