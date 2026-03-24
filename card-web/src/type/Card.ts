export const BRAND_COLORS: { [key: string]: string } = {
    "삼성카드": "#0a4da2",
    "신한카드": "#0046ff",
    "우리카드": "#007bc8",
    "국민카드": "#ffbc00",
    "KB국민카드": "#ffbc00",
    "하나카드": "#009490",
    "현대카드": "#000000",
    "롯데카드": "#ed1c24",
    "농협카드": "#20744a",
    "BC카드": "#f01923",
    "기업은행": "#0068b7",
    "신협": "#0066b3",      
    "수협": "#0067ac",     
    "새마을금고": "#00539b", 
    "우체국": "#ed1c24",    
    "광주은행": "#f2a000",  
    "전북은행": "#005596",  
    "제주은행": "#00a1e1", 
    "경남은행": "#00479d",  
    "부산은행": "#e50012", 
    "대구은행": "#004a95",
    "카카오뱅크": "#ffeb00",
    "케이뱅크": "#1e2225",
    "토스뱅크": "#0059ff", 
    "기타": "#888888",
};

// 실적 구간에 따른 혜택을 정의하는 타입 추가
export interface PerformanceTier {
    min: number;        // 구간 시작 금액 (예: 0, 1000000)
    max: number;        // 구간 끝 금액 (예: 1000000, 999999999)
    rate: number;       // 해당 구간의 기본 적립/할인율 (예: 0.01, 0.015)
    desc?: string;      // 사용자 노출용 설명
}

export interface CardStatistics {
    ageGroup: { label: string; value: number }[]; // 연령대 비율 (20대: 40%)
    gender: { male: number, female: number }; // 성비 남 45 : 여 : 55
}

export interface BenefitRule {
    category: string;
    rate: number;         // 0.1 (10%)
    type: 'DISCOUNT' | 'POINT' | 'FIXED'; 
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
    performanceTiers?: PerformanceTier[];
    bestPerformance?: number;
    baseRate?: number;
    maxBenefit?: string;
    officialLink?: string;
}