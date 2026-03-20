import type { Card } from '../type/Card';

export const CARD_LIST: Card[] = [
  {
    id: 1,
    name: "신한카드 Mr.Life",
    company: "신한카드",
    annualFee: 15000,
    type: "신용",
    image: "https://placehold.co/100x64?text=SHINHAN",
    mainBenefits: ["공과금 10% 할인", "편의점 10% 할인", "병원/약국 10% 할인"],
    categories: ["공과금", "편의점", "의료", "식비", "쇼핑"],
    isOwned: true,
    summary: "생활 밀착형 공과금 및 1인 가구 특화 할인 카드",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 2.5만원",
    baseRate: 0,
    statistics: {
      ageGroup: [
        { label: "20대", value: 25 },
        { label: "30대", value: 40 },
        { label: "40대", value: 25 },
        { label: "50대+", value: 10 }
      ],
      gender: { male: 42, female: 58 }
    },
    benefitRules: [
      { category: "공과금", rate: 0.1, type: "DISCOUNT", limit: 10000 },
      { category: "편의점", rate: 0.1, type: "DISCOUNT", limit: 5000 },
      { category: "의료", rate: 0.1, type: "DISCOUNT", limit: 5000 }
    ]
  },
  {
    id: 2,
    name: "삼성카드 taptap O",
    company: "삼성카드",
    annualFee: 10000,
    type: "신용",
    image: "https://placehold.co/100x64?text=SAMSUNG",
    mainBenefits: ["스타벅스 50% 할인", "대중교통 10% 할인", "쇼핑 7% 할인"],
    categories: ["카페", "교통", "통신", "쇼핑"],
    isOwned: true,
    summary: "커피와 쇼핑 혜택을 내 마음대로 선택하는 트렌디 카드",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 2만원",
    baseRate: 0.01,
    statistics: {
      ageGroup: [
        { label: "20대", value: 55 },
        { label: "30대", value: 30 },
        { label: "40대", value: 10 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 35, female: 65 }
    },
    benefitRules: [
      { category: "카페", rate: 0.5, type: "DISCOUNT", limit: 10000 },
      { category: "교통", rate: 0.1, type: "DISCOUNT", limit: 5000 }
    ]
  },
  {
    id: 3,
    name: "KB국민 My WEsh 카드",
    company: "KB국민카드",
    annualFee: 15000,
    type: "신용",
    image: "https://placehold.co/100x64?text=KB",
    mainBenefits: ["음식점 10% 할인", "OTT 30% 할인", "KB Pay 10% 할인"],
    categories: ["식비", "OTT", "쇼핑"],
    isOwned: false,
    summary: "나에게 진심인 당신을 위한 맞춤형 혜택",
    condition: "전월 실적 40만원 이상",
    statistics: {
      ageGroup: [
        { label: "20대", value: 48 },
        { label: "30대", value: 35 },
        { label: "40대", value: 12 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 44, female: 56 }
    },
    benefitRules: [{ category: "식비", rate: 0.1, type: "DISCOUNT", limit: 5000 }]
  },
  {
    id: 4,
    name: "현대카드 M BOOST",
    company: "현대카드",
    annualFee: 30000,
    type: "신용",
    image: "https://placehold.co/100x64?text=HYUNDAI",
    mainBenefits: ["업종별 최대 3% 적립", "온라인 간편결제 5% 적립"],
    categories: ["쇼핑", "카페", "해외"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 22 },
        { label: "30대", value: 45 },
        { label: "40대", value: 23 },
        { label: "50대+", value: 10 }
      ],
      gender: { male: 58, female: 42 }
    },
    benefitRules: [{ category: "쇼핑", rate: 0.05, type: "SAVE", limit: 10000 }]
  },
  {
    id: 5,
    name: "롯데카드 LOCA LIKIT Eat",
    company: "롯데카드",
    annualFee: 10000,
    type: "신용",
    image: "https://placehold.co/100x64?text=LOTTE",
    mainBenefits: ["음식점 60% 할인", "커피 60% 할인", "배달앱 60% 할인"],
    categories: ["식비", "카페"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 58 },
        { label: "30대", value: 30 },
        { label: "40대", value: 10 },
        { label: "50대+", value: 2 }
      ],
      gender: { male: 38, female: 62 }
    },
    benefitRules: [{ category: "식비", rate: 0.6, type: "DISCOUNT", limit: 13000 }]
  },
  {
    id: 6,
    name: "신한카드 Deep Dream",
    company: "신한카드",
    annualFee: 8000,
    type: "신용",
    image: "https://placehold.co/100x64?text=SHINHAN",
    mainBenefits: ["전 가맹점 0.7% 적립", "주유 리터당 80원 적립"],
    categories: ["기타", "주유", "쇼핑"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 15 },
        { label: "30대", value: 30 },
        { label: "40대", value: 35 },
        { label: "50대+", value: 20 }
      ],
      gender: { male: 52, female: 48 }
    },
    benefitRules: [{ category: "기타", rate: 0.007, type: "SAVE", limit: 999999 }]
  },
  {
    id: 7,
    name: "삼성카드 iD ON",
    company: "삼성카드",
    annualFee: 20000,
    type: "신용",
    image: "https://placehold.co/100x64?text=SAMSUNG",
    mainBenefits: ["많이 쓰는 영역 30% 할인", "교통/통신 10% 할인"],
    categories: ["식비", "카페", "교통"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 35 },
        { label: "30대", value: 42 },
        { label: "40대", value: 15 },
        { label: "50대+", value: 8 }
      ],
      gender: { male: 32, female: 68 }
    },
    benefitRules: [{ category: "식비", rate: 0.3, type: "DISCOUNT", limit: 10000 }]
  },
  {
    id: 8,
    name: "KB국민 톡톡 with 리워드",
    company: "KB국민카드",
    annualFee: 12000,
    type: "신용",
    image: "https://placehold.co/100x64?text=KB",
    mainBenefits: ["스타벅스 50% 할인", "온라인 간편결제 10% 적립"],
    categories: ["카페", "쇼핑"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 62 },
        { label: "30대", value: 28 },
        { label: "40대", value: 7 },
        { label: "50대+", value: 3 }
      ],
      gender: { male: 40, female: 60 }
    },
    benefitRules: [{ category: "카페", rate: 0.5, type: "DISCOUNT", limit: 10000 }]
  },
  {
    id: 9,
    name: "하나카드 Multi Any",
    company: "하나카드",
    annualFee: 12000,
    type: "신용",
    image: "https://placehold.co/100x64?text=HANA",
    mainBenefits: ["모든 가맹점 0.7% 적립", "Pay 결제 1.0% 적립"],
    categories: ["기타", "쇼핑"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 20 },
        { label: "30대", value: 35 },
        { label: "40대", value: 30 },
        { label: "50대+", value: 15 }
      ],
      gender: { male: 48, female: 52 }
    },
    benefitRules: [{ category: "기타", rate: 0.007, type: "SAVE", limit: 999999 }]
  },
  {
    id: 10,
    name: "현대카드 ZERO Edition3(할인형)",
    company: "현대카드",
    annualFee: 15000,
    type: "신용",
    image: "https://placehold.co/100x64?text=HYUNDAI",
    mainBenefits: ["모든 가맹점 0.7% 할인", "생활 필수 영역 1.2% 할인"],
    categories: ["기타", "식비", "편의점"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 32 },
        { label: "30대", value: 40 },
        { label: "40대", value: 20 },
        { label: "50대+", value: 8 }
      ],
      gender: { male: 46, female: 54 }
    },
    benefitRules: [{ category: "기타", rate: 0.007, type: "DISCOUNT", limit: 999999 }]
  },
  {
    id: 11,
    name: "우리카드 카드의정석 EVERY 1",
    company: "우리카드",
    annualFee: 12000,
    type: "신용",
    image: "https://placehold.co/100x64?text=WOORI",
    mainBenefits: ["모든 가맹점 1% 할인"],
    categories: ["기타", "쇼핑"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 20 },
        { label: "30대", value: 38 },
        { label: "40대", value: 27 },
        { label: "50대+", value: 15 }
      ],
      gender: { male: 50, female: 50 }
    },
    benefitRules: [{ category: "기타", rate: 0.01, type: "DISCOUNT", limit: 999999 }]
  },
  {
    id: 12,
    name: "NH농협 zgm.streaming",
    company: "NH농협카드",
    annualFee: 12000,
    type: "신용",
    image: "https://placehold.co/100x64?text=NH",
    mainBenefits: ["스트리밍 50% 할인", "온라인 쇼핑 10% 할인"],
    categories: ["OTT", "쇼핑"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 68 },
        { label: "30대", value: 22 },
        { label: "40대", value: 8 },
        { label: "50대+", value: 2 }
      ],
      gender: { male: 38, female: 62 }
    },
    benefitRules: [{ category: "OTT", rate: 0.5, type: "DISCOUNT", limit: 10000 }]
  },
  {
    id: 13,
    name: "BC Goat 카드",
    company: "BC카드",
    annualFee: 12000,
    type: "신용",
    image: "https://placehold.co/100x64?text=BC",
    mainBenefits: ["모든 가맹점 최대 1.5% 적립"],
    categories: ["기타", "해외"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 25 },
        { label: "30대", value: 48 },
        { label: "40대", value: 20 },
        { label: "50대+", value: 7 }
      ],
      gender: { male: 68, female: 32 }
    },
    benefitRules: [{ category: "기타", rate: 0.015, type: "SAVE", limit: 999999 }]
  },
  {
    id: 14,
    name: "신한카드 플리",
    company: "신한카드",
    annualFee: 15000,
    type: "신용",
    image: "https://placehold.co/100x64?text=SHINHAN",
    mainBenefits: ["국내 가맹점 0.9% 할인"],
    categories: ["기타", "쇼핑"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 42 },
        { label: "30대", value: 38 },
        { label: "40대", value: 15 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 33, female: 67 }
    },
    benefitRules: [{ category: "기타", rate: 0.009, type: "DISCOUNT", limit: 999999 }]
  },
  {
    id: 15,
    name: "삼성카드 iD MOVE",
    company: "삼성카드",
    annualFee: 20000,
    type: "신용",
    image: "https://placehold.co/100x64?text=SAMSUNG",
    mainBenefits: ["교통/통신/에너지 10% 할인"],
    categories: ["교통", "통신", "주유"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 25 },
        { label: "30대", value: 45 },
        { label: "40대", value: 20 },
        { label: "50대+", value: 10 }
      ],
      gender: { male: 52, female: 48 }
    },
    benefitRules: [{ category: "교통", rate: 0.1, type: "DISCOUNT", limit: 10000 }]
  },
  {
    id: 16,
    name: "KB국민 다담 카드",
    company: "KB국민카드",
    annualFee: 18000,
    type: "신용",
    image: "https://placehold.co/100x64?text=KB",
    mainBenefits: ["대중교통/통신 10% 할인"],
    categories: ["교통", "통신", "식비"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 18 },
        { label: "30대", value: 32 },
        { label: "40대", value: 35 },
        { label: "50대+", value: 15 }
      ],
      gender: { male: 46, female: 54 }
    },
    benefitRules: [{ category: "교통", rate: 0.1, type: "DISCOUNT", limit: 5000 }]
  },
  {
    id: 17,
    name: "현대카드 American Express Blue",
    company: "현대카드",
    annualFee: 30000,
    type: "신용",
    image: "https://placehold.co/100x64?text=HYUNDAI",
    mainBenefits: ["온라인 쇼핑 1.5% 적립", "편의점/카페 2% 적립"],
    categories: ["쇼핑", "편의점", "카페"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 35 },
        { label: "30대", value: 48 },
        { label: "40대", value: 12 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 55, female: 45 }
    },
    benefitRules: [{ category: "쇼핑", rate: 0.015, type: "SAVE", limit: 30000 }]
  },
  {
    id: 18,
    name: "롯데카드 LOCA 365",
    company: "롯데카드",
    annualFee: 20000,
    type: "신용",
    image: "https://placehold.co/100x64?text=LOTTE",
    mainBenefits: ["공과금/보험료 10% 할인", "학원 10% 할인"],
    categories: ["공과금", "보험", "교육"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 10 },
        { label: "30대", value: 42 },
        { label: "40대", value: 38 },
        { label: "50대+", value: 10 }
      ],
      gender: { male: 28, female: 72 }
    },
    benefitRules: [{ category: "공과금", rate: 0.1, type: "DISCOUNT", limit: 5000 }]
  },
  {
    id: 19,
    name: "우리 NU I&U 카드",
    company: "우리카드",
    annualFee: 12000,
    type: "신용",
    image: "https://placehold.co/100x64?text=WOORI",
    mainBenefits: ["전 가맹점 최대 1% 할인"],
    categories: ["기타", "주유"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 15 },
        { label: "30대", value: 25 },
        { label: "40대", value: 35 },
        { label: "50대+", value: 25 }
      ],
      gender: { male: 62, female: 38 }
    },
    benefitRules: [{ category: "기타", rate: 0.007, type: "DISCOUNT", limit: 999999 }]
  },
  {
    id: 20,
    name: "하나카드 Mile 1.6 대한항공",
    company: "하나카드",
    annualFee: 45000,
    type: "신용",
    image: "https://placehold.co/100x64?text=HANA",
    mainBenefits: ["1,500원당 1.6 마일리지 적립"],
    categories: ["해외", "기타"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 22 },
        { label: "30대", value: 45 },
        { label: "40대", value: 23 },
        { label: "50대+", value: 10 }
      ],
      gender: { male: 52, female: 48 }
    },
    benefitRules: [{ category: "해외", rate: 0.02, type: "SAVE", limit: 100000 }]
  },
  {
    id: 21,
    name: "IBK기업은행 i-ALL 카드",
    company: "IBK기업은행",
    annualFee: 15000,
    type: "신용",
    image: "https://placehold.co/100x64?text=IBK",
    mainBenefits: ["전 가맹점 0.5% 할인"],
    categories: ["기타", "의료"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 12 },
        { label: "30대", value: 28 },
        { label: "40대", value: 35 },
        { label: "50대+", value: 25 }
      ],
      gender: { male: 48, female: 52 }
    },
    benefitRules: [{ category: "기타", rate: 0.005, type: "DISCOUNT", limit: 999999 }]
  },
  {
    id: 22,
    name: "NH농협 올바른 OIL 카드",
    company: "NH농협카드",
    annualFee: 15000,
    type: "신용",
    image: "https://placehold.co/100x64?text=NH",
    mainBenefits: ["주유소 10% 할인"],
    categories: ["주유", "교통"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 10 },
        { label: "30대", value: 25 },
        { label: "40대", value: 40 },
        { label: "50대+", value: 25 }
      ],
      gender: { male: 78, female: 22 }
    },
    benefitRules: [{ category: "주유", rate: 0.1, type: "DISCOUNT", limit: 15000 }]
  },
  {
    id: 23,
    name: "광주은행 샌드위치 카드",
    company: "광주은행",
    annualFee: 12000,
    type: "신용",
    image: "https://placehold.co/100x64?text=Kwangju",
    mainBenefits: ["선택 서비스 10% 할인"],
    categories: ["쇼핑", "식비"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 32 },
        { label: "30대", value: 38 },
        { label: "40대", value: 20 },
        { label: "50대+", value: 10 }
      ],
      gender: { male: 40, female: 60 }
    },
    benefitRules: [{ category: "쇼핑", rate: 0.1, type: "DISCOUNT", limit: 10000 }]
  },
  {
    id: 24,
    name: "제주은행 Hi-Point 카드",
    company: "제주은행",
    annualFee: 10000,
    type: "신용",
    image: "https://placehold.co/100x64?text=Jeju",
    mainBenefits: ["전 가맹점 최대 2.0% 적립"],
    categories: ["쇼핑", "기타"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 12 },
        { label: "30대", value: 25 },
        { label: "40대", value: 38 },
        { label: "50대+", value: 25 }
      ],
      gender: { male: 52, female: 48 }
    },
    benefitRules: [{ category: "쇼핑", rate: 0.05, type: "SAVE", limit: 50000 }]
  },
  {
    id: 25,
    name: "KDB산업은행 KDB Choice",
    company: "KDB산업은행",
    annualFee: 10000,
    type: "신용",
    image: "https://placehold.co/100x64?text=KDB",
    mainBenefits: ["온라인쇼핑 5.0% 할인"],
    categories: ["쇼핑", "카페"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 20 },
        { label: "30대", value: 40 },
        { label: "40대", value: 30 },
        { label: "50대+", value: 10 }
      ],
      gender: { male: 42, female: 58 }
    },
    benefitRules: [{ category: "쇼핑", rate: 0.05, type: "DISCOUNT", limit: 10000 }]
  },
  {
    id: 26,
    name: "신협 CU Big 신용카드",
    company: "신협",
    annualFee: 10000,
    type: "신용",
    image: "https://placehold.co/100x64?text=Shinhyup",
    mainBenefits: ["편의점 10% 적립"],
    categories: ["편의점", "기타"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 52 },
        { label: "30대", value: 28 },
        { label: "40대", value: 15 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 46, female: 54 }
    },
    benefitRules: [{ category: "편의점", rate: 0.1, type: "SAVE", limit: 5000 }]
  },
  {
    id: 27,
    name: "수협 Real? Real! 카드",
    company: "수협은행",
    annualFee: 12000,
    type: "신용",
    image: "https://placehold.co/100x64?text=Suhyup",
    mainBenefits: ["국내 가맹점 최대 1.2% 할인"],
    categories: ["기타", "식비"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 15 },
        { label: "30대", value: 30 },
        { label: "40대", value: 35 },
        { label: "50대+", value: 20 }
      ],
      gender: { male: 54, female: 46 }
    },
    benefitRules: [{ category: "기타", rate: 0.012, type: "DISCOUNT", limit: 999999 }]
  },
  {
    id: 28,
    name: "우체국 신용카드 Start",
    company: "우체국",
    annualFee: 12000,
    type: "신용",
    image: "https://placehold.co/100x64?text=Post",
    mainBenefits: ["우체국 이용 10% 적립"],
    categories: ["기타", "쇼핑"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 5 },
        { label: "30대", value: 20 },
        { label: "40대", value: 35 },
        { label: "50대+", value: 40 }
      ],
      gender: { male: 38, female: 62 }
    },
    benefitRules: [{ category: "쇼핑", rate: 0.05, type: "SAVE", limit: 10000 }]
  },
  {
    id: 29,
    name: "우리카드 DA@카드의정석",
    company: "우리카드",
    annualFee: 12000,
    type: "신용",
    image: "https://placehold.co/100x64?text=WOORI",
    mainBenefits: ["모든 가맹점 0.8% 할인"],
    categories: ["기타", "식비"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 28 },
        { label: "30대", value: 42 },
        { label: "40대", value: 20 },
        { label: "50대+", value: 10 }
      ],
      gender: { male: 48, female: 52 }
    },
    benefitRules: [{ category: "기타", rate: 0.008, type: "DISCOUNT", limit: 999999 }]
  },
  {
    id: 30,
    name: "하나카드 Any PLUS",
    company: "하나카드",
    annualFee: 15000,
    type: "신용",
    image: "https://placehold.co/100x64?text=HANA",
    mainBenefits: ["온라인 쇼핑 1.7% 할인"],
    categories: ["쇼핑", "해외"],
    isOwned: false,
    statistics: {
      ageGroup: [
        { label: "20대", value: 38 },
        { label: "30대", value: 45 },
        { label: "40대", value: 12 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 32, female: 68 }
    },
    benefitRules: [{ category: "쇼핑", rate: 0.017, type: "DISCOUNT", limit: 10000 }]
  }
];