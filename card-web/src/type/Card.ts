export interface CardStatistics {
    ageGroup: { label: string; value: number }[]; // 연령대 비율 (20대: 40%)
    gender: { male: number, female: number }; // 성비 남 45 : 여 : 55
}

export interface BenefitRule {
    category: string;
    rate: number;         // 0.1 (10%)
    type: 'DISCOUNT' | 'SAVE' | 'FIXED'; 
    limit: number;        // 숫자형 한도 (AI 계산용)
}

export interface DetailBenefit {
    title: string;
    content: string;
    limit?: string;        // 텍스트형 설명 ("월 최대 1만원")
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
    benefitRules?: BenefitRule[]; 
    condition?: string;
    maxBenefit?: string;
    officialLink?: string;
    baseRate?: number;
}