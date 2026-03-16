export interface CardStatistics {
    ageGroup: { label: string; value: number }[]; // 연령대 비율 (20대: 40%)
    gender: { male: number, female: number }; // 성비 남 45 : 여 : 55
}

export interface DetailBenefit {
    title: string;
    content: string;
    limit: string;
}

export interface Card {
    id: number;
    name: string;
    company: string;
    annualFee: number;
    image: string;
    mainBenefits: string[];
    categories: string[];
    isOwned: boolean;
    type: "신용" | "체크" | "하이브리드";
    summary?: string;
    statistics?: CardStatistics;
    detailBenefits?: DetailBenefit[];
    condition?: string;
    maxBenefit?: string;
    officialLink?: string;
}