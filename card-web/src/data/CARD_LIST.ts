import type { Card } from '../type/Card';

export const CARD_LIST: Card[] = [
  {
    id: 1,
    name: "신한카드 Mr.Life",
    company: "신한카드",
    annualFee: 15000,
    image: "https://www.shinhancard.com/pconts/images/v2/card/img_card_mrlife.png",
    mainBenefits: ["공과금 10% 할인", "편의점 10% 할인", "병원/약국 10% 할인"],
    categories: ["LIVING", "FOOD", "MEDICAL"],
    isOwned: false,
    type: "신용",
    summary: "1인 가구 및 자취생을 위한 생활 밀착형 혜택 끝판왕 카드",
    statistics: {
      ageGroup: [{ label: "20대", value: 35 }, { label: "30대", value: 40 }, { label: "40대", value: 15 }, { label: "50대+", value: 10 }],
      gender: { male: 48, female: 52 }
    },
    detailBenefits: [
      { title: "월납요금 할인", content: "전기, 도시가스, 통신요금 10% 결제일 할인", limit: "월 최대 1만원" },
      { title: "TIME 할인", content: "편의점, 병원/약국, 세탁소 10% 할인", limit: "월 최대 1만원" }
    ],
    benefitRules: [
      { category: "LIVING", rate: 0.1, type: 'DISCOUNT', limit: 10000 },
      { category: "FOOD", rate: 0.1, type: 'DISCOUNT', limit: 5000 },
      { category: "MEDICAL", rate: 0.1, type: 'DISCOUNT', limit: 5000 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [
      { min: 300000, max: 500000, rate: 0.1, desc: "할인한도 1만원" },
      { min: 500000, max: 1000000, rate: 0.1, desc: "할인한도 2만원" }
    ],
    officialLink: "https://www.shinhancard.com"
  },
  {
    id: 2,
    name: "삼성카드 taptap O",
    company: "삼성카드",
    annualFee: 10000,
    image: "https://static11.samsungcard.com/wcms/home/scard/image/card/tap_o_l.png",
    mainBenefits: ["스타벅스 50% 할인", "대중교통 10% 할인", "쇼핑 7% 할인"],
    categories: ["FOOD", "TRANSPORT", "SHOPPING"],
    isOwned: false,
    type: "신용",
    summary: "MZ세대가 가장 선호하는 커피와 쇼핑 맞춤형 카드",
    statistics: {
      ageGroup: [{ label: "20대", value: 50 }, { label: "30대", value: 35 }, { label: "40대", value: 10 }, { label: "50대+", value: 5 }],
      gender: { male: 42, female: 58 }
    },
    detailBenefits: [
      { title: "커피 할인", content: "스타벅스 50% 할인", limit: "월 1만원" },
      { title: "교통 할인", content: "지하철, 버스, 택시 10% 할인", limit: "월 5천원" },
      { title: "쇼핑 할인", content: "쿠팡, 네이버쇼핑 등 7% 할인", limit: "월 5천원" }
    ],
    benefitRules: [
      { category: "FOOD", rate: 0.5, type: 'DISCOUNT', limit: 10000 },
      { category: "TRANSPORT", rate: 0.1, type: 'DISCOUNT', limit: 5000 },
      { category: "SHOPPING", rate: 0.07, type: 'DISCOUNT', limit: 5000 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [{ min: 300000, max: 999999, rate: 0.5, desc: "고정 할인 제공" }],
    officialLink: "https://www.samsungcard.com"
  },
  {
    id: 3,
    name: "KB국민 다담카드",
    company: "KB국민카드",
    annualFee: 15000,
    image: "https://img1.kbcard.com/img/pda/card/21668_img.png",
    mainBenefits: ["대중교통 10% 할인", "이동통신 10% 할인", "교육/학원 5% 적립"],
    categories: ["TRANSPORT", "LIVING", "EDUCATION"],
    isOwned: false,
    type: "신용",
    summary: "직장인부터 학부모까지, 다 담은 생활 밀착형 카드",
    statistics: {
      ageGroup: [{ label: "20대", value: 20 }, { label: "30대", value: 30 }, { label: "40대", value: 40 }, { label: "50대+", value: 10 }],
      gender: { male: 50, female: 50 }
    },
    detailBenefits: [
      { title: "교통 할인", content: "버스, 지하철 10% 할인", limit: "월 5천원" },
      { title: "통신 할인", content: "SKT/KT/LGU+ 10% 할인", limit: "월 5천원" },
      { title: "교육 적립", content: "학원, 온라인강의 5% 적립", limit: "월 1만 5천원" }
    ],
    benefitRules: [
      { category: "TRANSPORT", rate: 0.1, type: 'DISCOUNT', limit: 5000 },
      { category: "LIVING", rate: 0.1, type: 'DISCOUNT', limit: 5000 },
      { category: "EDUCATION", rate: 0.05, type: 'POINT', limit: 15000 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [{ min: 300000, max: 600000, rate: 0.1, desc: "기본 구간" }],
    officialLink: "https://card.kbcard.com"
  },
  {
    id: 4,
    name: "현대카드 ZERO Edition3",
    company: "현대카드",
    annualFee: 15000,
    image: "https://www.hyundaicard.com/img/card/card_zero_edition3.png",
    mainBenefits: ["모든 가맹점 0.8% 할인", "생활 필수영역 1.5% 할인"],
    categories: ["ETC", "FOOD", "LIVING"],
    isOwned: false,
    type: "신용",
    summary: "조건 없는 할인을 선호하는 분들을 위한 무실적 카드",
    statistics: {
      ageGroup: [{ label: "20대", value: 45 }, { label: "30대", value: 35 }, { label: "40대", value: 15 }, { label: "50대+", value: 5 }],
      gender: { male: 45, female: 55 }
    },
    detailBenefits: [
      { title: "기본 할인", content: "국내외 가맹점 0.8% 할인", limit: "무제한" },
      { title: "생활 할인", content: "음식점, 편의점, 마트 1.5% 할인", limit: "무제한" }
    ],
    benefitRules: [
      { category: "ETC", rate: 0.008, type: 'DISCOUNT', limit: 999999 },
      { category: "FOOD", rate: 0.015, type: 'DISCOUNT', limit: 999999 },
      { category: "LIVING", rate: 0.015, type: 'DISCOUNT', limit: 999999 }
    ],
    condition: "전월 실적 조건 없음",
    performanceTiers: [{ min: 0, max: 9999999, rate: 0.008, desc: "무실적 혜택" }],
    officialLink: "https://www.hyundaicard.com"
  },
  {
    id: 5,
    name: "롯데카드 LOCA LIKIT 1.2",
    company: "롯데카드",
    annualFee: 10000,
    image: "https://www.lottecard.co.kr/img/card/loca_likit_12.png",
    mainBenefits: ["모든 가맹점 1.2% 할인", "온라인 1.5% 할인"],
    categories: ["ETC", "SHOPPING"],
    isOwned: false,
    type: "신용",
    summary: "복잡한 조건 없이 어디서나 큰 혜택을 받는 카드",
    statistics: {
      ageGroup: [{ label: "20대", value: 30 }, { label: "30대", value: 40 }, { label: "40대", value: 20 }, { label: "50대+", value: 10 }],
      gender: { male: 40, female: 60 }
    },
    detailBenefits: [
      { title: "국내외 할인", content: "전 가맹점 1.2% 결제일 할인", limit: "무제한" },
      { title: "온라인 할인", content: "온라인 쇼핑 1.5% 결제일 할인", limit: "무제한" }
    ],
    benefitRules: [
      { category: "ETC", rate: 0.012, type: 'DISCOUNT', limit: 999999 },
      { category: "SHOPPING", rate: 0.015, type: 'DISCOUNT', limit: 999999 }
    ],
    condition: "전월 실적 조건 없음",
    performanceTiers: [{ min: 0, max: 9999999, rate: 0.012, desc: "무실적 혜택" }],
    officialLink: "https://www.lottecard.co.kr"
  },
  {
    id: 6,
    name: "우리카드 DA@카드의정석",
    company: "우리카드",
    annualFee: 10000,
    image: "https://simage.wooricard.com/img/card/da_standard.png",
    mainBenefits: ["기본 0.8% 할인", "생활업종 0.5% 추가 할인"],
    categories: ["ETC", "FOOD", "MEDICAL"],
    isOwned: false,
    type: "신용",
    summary: "병원, 약국부터 대중교통까지 생활 밀착 할인",
    statistics: {
      ageGroup: [{ label: "20대", value: 25 }, { label: "30대", value: 45 }, { label: "40대", value: 20 }, { label: "50대+", value: 10 }],
      gender: { male: 55, female: 45 }
    },
    detailBenefits: [
      { title: "기본 할인", content: "모든 가맹점 0.8% 할인", limit: "무제한" },
      { title: "생활 추가", content: "음식점, 병원, 약국 0.5% 추가 할인", limit: "무제한" }
    ],
    benefitRules: [
      { category: "ETC", rate: 0.008, type: 'DISCOUNT', limit: 999999 },
      { category: "FOOD", rate: 0.013, type: 'DISCOUNT', limit: 999999 },
      { category: "MEDICAL", rate: 0.013, type: 'DISCOUNT', limit: 999999 }
    ],
    condition: "전월 실적 조건 없음",
    performanceTiers: [{ min: 0, max: 9999999, rate: 0.008, desc: "무실적 혜택" }],
    officialLink: "https://pc.wooricard.com"
  },
  {
    id: 7,
    name: "하나카드 Multi Any",
    company: "하나카드",
    annualFee: 12000,
    image: "https://www.hanacard.co.kr/img/card/multi_any.png",
    mainBenefits: ["쇼핑 1.0% 적립", "배달앱 0.8% 적립", "대중교통 1.0% 적립"],
    categories: ["SHOPPING", "FOOD", "TRANSPORT"],
    isOwned: false,
    type: "신용",
    summary: "디지털 카드 한 장으로 모든 결제를 해결",
    statistics: {
      ageGroup: [{ label: "20대", value: 35 }, { label: "30대", value: 35 }, { label: "40대", value: 20 }, { label: "50대+", value: 10 }],
      gender: { male: 45, female: 55 }
    },
    detailBenefits: [
      { title: "쇼핑 적립", content: "백화점, 대형마트 1.0% 적립", limit: "무제한" },
      { title: "음식 적립", content: "배달앱 0.8% 적립", limit: "무제한" },
      { title: "교통 적립", content: "버스, 지하철 1.0% 적립", limit: "무제한" }
    ],
    benefitRules: [
      { category: "SHOPPING", rate: 0.01, type: 'POINT', limit: 999999 },
      { category: "FOOD", rate: 0.008, type: 'POINT', limit: 999999 },
      { category: "TRANSPORT", rate: 0.01, type: 'POINT', limit: 999999 }
    ],
    condition: "전월 실적 조건 없음",
    performanceTiers: [{ min: 0, max: 9999999, rate: 0.01, desc: "무실적 혜택" }],
    officialLink: "https://www.hanacard.co.kr"
  },
  {
    id: 8,
    name: "NH농협 zgm.streaming",
    company: "NH농협카드",
    annualFee: 12000,
    image: "https://card.nonghyup.com/img/card/zgm_streaming.png",
    mainBenefits: ["스트리밍 50% 할인", "온라인쇼핑 5% 할인", "스타벅스 10% 할인"],
    categories: ["SUBSCRIPTION", "SHOPPING", "FOOD"],
    isOwned: false,
    type: "신용",
    summary: "유튜브, 넷플릭스를 즐기는 구독족 필수 카드",
    statistics: {
      ageGroup: [{ label: "20대", value: 60 }, { label: "30대", value: 30 }, { label: "40대", value: 7 }, { label: "50대+", value: 3 }],
      gender: { male: 50, female: 50 }
    },
    detailBenefits: [
      { title: "구독 할인", content: "넷플릭스, 유튜브 등 50% 할인", limit: "월 5천원" },
      { title: "쇼핑 할인", content: "온라인 쇼핑몰 5% 할인", limit: "월 5천원" },
      { title: "커피 할인", content: "스타벅스 사이렌오더 10% 할인", limit: "월 2천원" }
    ],
    benefitRules: [
      { category: "SUBSCRIPTION", rate: 0.5, type: 'DISCOUNT', limit: 5000 },
      { category: "SHOPPING", rate: 0.05, type: 'DISCOUNT', limit: 5000 },
      { category: "FOOD", rate: 0.1, type: 'DISCOUNT', limit: 2000 }
    ],
    condition: "전월 실적 40만원 이상",
    performanceTiers: [{ min: 400000, max: 999999, rate: 0.5, desc: "구독 할인 특화" }],
    officialLink: "https://card.nonghyup.com"
  },
  {
    id: 9,
    name: "IBK기업은행 마일앤조이",
    company: "IBK기업은행",
    annualFee: 30000,
    image: "https://www.ibk.co.kr/img/card/mile_and_joy.png",
    mainBenefits: ["항공 마일리지 적립", "KTX/SRT 10% 할인", "문화/여가 할인"],
    categories: ["TRANSPORT", "CULTURE", "ETC"],
    isOwned: false,
    type: "신용",
    summary: "여행과 문화를 즐기는 스마트 트래블러를 위한 선택",
    statistics: {
      ageGroup: [{ label: "20대", value: 15 }, { label: "30대", value: 45 }, { label: "40대", value: 30 }, { label: "50대+", value: 10 }],
      gender: { male: 40, female: 60 }
    },
    detailBenefits: [
      { title: "교통 할인", content: "KTX, SRT 10% 할인", limit: "연 2회" },
      { title: "문화 할인", content: "영화관 1만원 이상 시 4천원 할인", limit: "월 1회" },
      { title: "적립", content: "이용금액 1,500원당 1마일 적립", limit: "무제한" }
    ],
    benefitRules: [
      { category: "TRANSPORT", rate: 0.1, type: 'DISCOUNT', limit: 10000 },
      { category: "CULTURE", rate: 0.2, type: 'DISCOUNT', limit: 4000 },
      { category: "ETC", rate: 0.01, type: 'POINT', limit: 999999 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [{ min: 300000, max: 999999, rate: 0.1, desc: "마일리지 구간" }],
    officialLink: "https://www.ibk.co.kr"
  },
  {
    id: 10,
    name: "신한카드 Deep Education",
    company: "신한카드",
    annualFee: 22000,
    image: "https://www.shinhancard.com/pconts/images/v2/card/img_card_deepedu.png",
    mainBenefits: ["학원비 5% 할인", "온라인서점 5% 할인", "생활 0.1% 적립"],
    categories: ["EDUCATION", "CULTURE", "LIVING"],
    isOwned: false,
    type: "신용",
    summary: "교육비 부담을 줄여주는 학부모 맞춤형 딥 시리즈",
    statistics: {
      ageGroup: [{ label: "20대", value: 5 }, { label: "30대", value: 25 }, { label: "40대", value: 60 }, { label: "50대+", value: 10 }],
      gender: { male: 30, female: 70 }
    },
    detailBenefits: [
      { title: "교육 할인", content: "학원, 학습지 5% 결제일 할인", limit: "월 최대 3만원" },
      { title: "서점 할인", content: "예스24, 교보문고 5% 할인", limit: "월 최대 1만원" },
      { title: "생활 적립", content: "일반 가맹점 0.1% 적립", limit: "무제한" }
    ],
    benefitRules: [
      { category: "EDUCATION", rate: 0.05, type: 'DISCOUNT', limit: 30000 },
      { category: "CULTURE", rate: 0.05, type: 'DISCOUNT', limit: 10000 },
      { category: "LIVING", rate: 0.001, type: 'POINT', limit: 999999 }
    ],
    condition: "전월 실적 50만원 이상",
    performanceTiers: [{ min: 500000, max: 1000000, rate: 0.05, desc: "교육 할인 특화" }],
    officialLink: "https://www.shinhancard.com"
  },
  {
    id: 11,
    name: "신한카드 Deep Oil",
    company: "신한카드",
    annualFee: 10000,
    image: "https://www.shinhancard.com/pconts/images/v2/card/img_card_deepoil.png",
    mainBenefits: ["주유 10% 할인", "정비 10% 할인", "편의점 5% 할인"],
    categories: ["TRANSPORT", "FOOD"],
    isOwned: false,
    type: "신용",
    summary: "운전자를 위한 주유 및 차량 관리 특화 카드",
    statistics: {
      ageGroup: [{ label: "20대", value: 5 }, { label: "30대", value: 40 }, { label: "40대", value: 35 }, { label: "50대+", value: 20 }],
      gender: { male: 70, female: 30 }
    },
    detailBenefits: [
      { title: "주유 할인", content: "4대 주유소 중 선택 1개소 10% 할인", limit: "월 최대 1.5만원" },
      { title: "생활 할인", content: "GS25, CU 편의점 5% 할인", limit: "월 최대 5천원" }
    ],
    benefitRules: [
      { category: "TRANSPORT", rate: 0.1, type: 'DISCOUNT', limit: 15000 },
      { category: "FOOD", rate: 0.05, type: 'DISCOUNT', limit: 5000 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [
      { min: 300000, max: 700000, rate: 0.1, desc: "할인한도 1.5만원" },
      { min: 700000, max: 999999999, rate: 0.1, desc: "할인한도 3만원" }
    ],
    bestPerformance: 300000,
    baseRate: 0.05,
    maxBenefit: "30,000원",
    officialLink: "https://www.shinhancard.com"
  },
  {
    id: 12,
    name: "삼성카드 iD ON",
    company: "삼성카드",
    annualFee: 20000,
    image: "https://static11.samsungcard.com/wcms/home/scard/image/card/id_on_l.png",
    mainBenefits: ["맞춤 10% 할인", "교통 10% 할인", "스트리밍 10% 할인"],
    categories: ["FOOD", "TRANSPORT", "SUBSCRIPTION"],
    isOwned: false,
    type: "신용",
    summary: "많이 쓰는 영역을 알아서 찾아 할인해주는 인공지능형 카드",
    statistics: {
      ageGroup: [{ label: "20대", value: 30 }, { label: "30대", value: 50 }, { label: "40대", value: 15 }, { label: "50대+", value: 5 }],
      gender: { male: 45, female: 55 }
    },
    detailBenefits: [
      { title: "맞춤 할인", content: "외식, 배달앱, 델리 중 가장 많이 쓴 영역 10%", limit: "월 최대 1만원" },
      { title: "교통 할인", content: "대중교통, 택시 10% 할인", limit: "월 최대 5천원" }
    ],
    benefitRules: [
      { category: "FOOD", rate: 0.1, type: 'DISCOUNT', limit: 10000 },
      { category: "TRANSPORT", rate: 0.1, type: 'DISCOUNT', limit: 5000 },
      { category: "SUBSCRIPTION", rate: 0.1, type: 'DISCOUNT', limit: 5000 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [
      { min: 300000, max: 600000, rate: 0.1, desc: "통합한도 1만원" },
      { min: 600000, max: 999999999, rate: 0.1, desc: "통합한도 2만원" }
    ],
    bestPerformance: 600000,
    baseRate: 0.01,
    maxBenefit: "20,000원",
    officialLink: "https://www.samsungcard.com"
  },
  {
    id: 13,
    name: "현대카드 M Edition3",
    company: "현대카드",
    annualFee: 30000,
    image: "https://www.hyundaicard.com/img/card/card_m_edition3.png",
    mainBenefits: ["모든 가맹점 적립", "온라인쇼핑 5% 적립", "해외 3% 적립"],
    categories: ["ETC", "SHOPPING", "CULTURE"],
    isOwned: false,
    type: "신용",
    summary: "한도 없는 포인트 적립과 현대차 구매 혜택",
    statistics: {
      ageGroup: [{ label: "20대", value: 20 }, { label: "30대", value: 40 }, { label: "40대", value: 30 }, { label: "50대+", value: 10 }],
      gender: { male: 60, female: 40 }
    },
    detailBenefits: [
      { title: "M포인트 적립", content: "국내외 가맹점 이용금액 0.5~3% 적립", limit: "한도 없음" },
      { title: "쇼핑 적립", content: "네이버쇼핑, 쿠팡 5% M포인트 적립", limit: "월 최대 1만 포인트" }
    ],
    benefitRules: [
      { category: "ETC", rate: 0.01, type: 'POINT', limit: 999999 },
      { category: "SHOPPING", rate: 0.05, type: 'POINT', limit: 10000 }
    ],
    condition: "전월 실적 50만원 이상",
    performanceTiers: [
      { min: 500000, max: 1000000, rate: 0.01, desc: "기본 적립" },
      { min: 1000000, max: 999999999, rate: 0.015, desc: "1.5배 적립" }
    ],
    bestPerformance: 1000000,
    baseRate: 0.01,
    maxBenefit: "무제한",
    officialLink: "https://www.hyundaicard.com"
  },
  {
    id: 14,
    name: "KB국민 탄탄대로 올쇼핑",
    company: "KB국민카드",
    annualFee: 15000,
    image: "https://img1.kbcard.com/img/pda/card/21668_img.png",
    mainBenefits: ["대형마트 10% 할인", "온라인쇼핑 10% 할인", "통신 10% 할인"],
    categories: ["SHOPPING", "LIVING"],
    isOwned: false,
    type: "신용",
    summary: "쇼핑과 자동이체 영역에 집중된 실속형 카드",
    statistics: {
      ageGroup: [{ label: "20대", value: 5 }, { label: "30대", value: 30 }, { label: "40대", value: 45 }, { label: "50대+", value: 20 }],
      gender: { male: 30, female: 70 }
    },
    detailBenefits: [
      { title: "쇼핑 할인", content: "대형마트, 홈쇼핑, 온라인몰 10% 할인", limit: "월 최대 2만원" },
      { title: "자동이체 할인", content: "통신요금, 아파트관리비 10% 할인", limit: "월 최대 1만원" }
    ],
    benefitRules: [
      { category: "SHOPPING", rate: 0.1, type: 'DISCOUNT', limit: 20000 },
      { category: "LIVING", rate: 0.1, type: 'DISCOUNT', limit: 10000 }
    ],
    condition: "전월 실적 40만원 이상",
    performanceTiers: [
      { min: 400000, max: 800000, rate: 0.1, desc: "할인한도 2만원" },
      { min: 800000, max: 999999999, rate: 0.1, desc: "할인한도 3.5만원" }
    ],
    bestPerformance: 800000,
    baseRate: 0.1,
    maxBenefit: "50,000원",
    officialLink: "https://card.kbcard.com"
  },
  {
    id: 15,
    name: "롯데카드 LOCA LIKIT Eat",
    company: "롯데카드",
    annualFee: 10000,
    image: "https://www.lottecard.co.kr/img/card/loca_likit_eat.png",
    mainBenefits: ["음식점 60% 할인", "배달앱 60% 할인", "커피 60% 할인"],
    categories: ["FOOD"],
    isOwned: false,
    type: "신용",
    summary: "외식과 배달 서비스 이용이 많은 분들을 위한 맞춤 카드",
    statistics: {
      ageGroup: [{ label: "20대", value: 40 }, { label: "30대", value: 40 }, { label: "40대", value: 15 }, { label: "50대+", value: 5 }],
      gender: { male: 50, female: 50 }
    },
    detailBenefits: [
      { title: "음식점 할인", content: "일반음식점 60% 결제일 할인", limit: "월 최대 1.3만원" },
      { title: "배달 할인", content: "배달의민족, 쿠팡이츠 60% 할인", limit: "월 최대 5천원" }
    ],
    benefitRules: [
      { category: "FOOD", rate: 0.6, type: 'DISCOUNT', limit: 18000 }
    ],
    condition: "전월 실적 40만원 이상",
    performanceTiers: [
      { min: 400000, max: 999999999, rate: 0.6, desc: "통합한도 1.8만원" }
    ],
    bestPerformance: 400000,
    baseRate: 0.6,
    maxBenefit: "18,000원",
    officialLink: "https://www.lottecard.co.kr"
  },
  {
    id: 16,
    name: "신한카드 체크팡",
    company: "신한카드",
    annualFee: 0,
    image: "https://www.shinhancard.com/pconts/images/v2/card/img_card_checkfang.png",
    mainBenefits: ["편의점 5% 적립", "대중교통 5% 적립", "영화 10% 적립"],
    categories: ["FOOD", "TRANSPORT", "CULTURE"],
    isOwned: false,
    type: "체크",
    summary: "20대 대학생의 일상 속 소소한 적립 혜택",
    statistics: {
      ageGroup: [{ label: "10대", value: 15 }, { label: "20대", value: 75 }, { label: "30대", value: 10 }],
      gender: { male: 45, female: 55 }
    },
    detailBenefits: [
      { title: "편의점 적립", content: "GS25, CU 5% 포인트 적립", limit: "월 최대 3천원" },
      { title: "영화 적립", content: "CGV 10% 포인트 적립", limit: "월 최대 5천원" }
    ],
    benefitRules: [
      { category: "FOOD", rate: 0.05, type: 'POINT', limit: 3000 },
      { category: "TRANSPORT", rate: 0.05, type: 'POINT', limit: 2000 },
      { category: "CULTURE", rate: 0.1, type: 'POINT', limit: 5000 }
    ],
    condition: "전월 실적 20만원 이상",
    performanceTiers: [
      { min: 200000, max: 500000, rate: 0.05, desc: "통합한도 5천원" },
      { min: 500000, max: 999999999, rate: 0.05, desc: "통합한도 1만원" }
    ],
    bestPerformance: 500000,
    baseRate: 0.05,
    maxBenefit: "10,000원",
    officialLink: "https://www.shinhancard.com"
  },
  {
    id: 17,
    name: "KB국민 노리2 체크카드",
    company: "KB국민카드",
    annualFee: 0,
    image: "https://img1.kbcard.com/img/pda/card/21668_img.png",
    mainBenefits: ["스타벅스 10% 할인", "구독/OTT 10% 할인", "배달앱 5% 할인"],
    categories: ["FOOD", "SUBSCRIPTION"],
    isOwned: false,
    type: "체크",
    summary: "가장 인기 있는 체크카드의 귀환, MZ 맞춤 혜택",
    statistics: {
      ageGroup: [{ label: "10대", value: 10 }, { label: "20대", value: 65 }, { label: "30대", value: 20 }, { label: "40대+", value: 5 }],
      gender: { male: 48, female: 52 }
    },
    detailBenefits: [
      { title: "커피 할인", content: "스타벅스 10% 할인", limit: "월 최대 3천원" },
      { title: "구독 할인", content: "넷플릭스, 유튜브 프리미엄 10% 할인", limit: "월 최대 2천원" }
    ],
    benefitRules: [
      { category: "FOOD", rate: 0.1, type: 'DISCOUNT', limit: 3000 },
      { category: "SUBSCRIPTION", rate: 0.1, type: 'DISCOUNT', limit: 2000 }
    ],
    condition: "전월 실적 20만원 이상",
    performanceTiers: [
      { min: 200000, max: 500000, rate: 0.1, desc: "할인한도 2만원" },
      { min: 500000, max: 999999999, rate: 0.1, desc: "할인한도 3만원" }
    ],
    bestPerformance: 200000,
    baseRate: 0.1,
    maxBenefit: "30,000원",
    officialLink: "https://card.kbcard.com"
  },
  {
    id: 18,
    name: "우리 010PAY 체크카드",
    company: "우리카드",
    annualFee: 0,
    image: "https://simage.wooricard.com/img/card/010pay_check.png",
    mainBenefits: ["결제 0.2% 적립", "응모권 혜택", "리또 지급"],
    categories: ["ETC", "FOOD"],
    isOwned: false,
    type: "체크",
    summary: "실적 조건 없이 무조건 적립받는 결제 전용 체크",
    statistics: {
      ageGroup: [{ label: "20대", value: 55 }, { label: "30대", value: 30 }, { label: "40대", value: 10 }, { label: "10대", value: 5 }],
      gender: { male: 55, female: 45 }
    },
    detailBenefits: [
      { title: "기본 적립", content: "전 가맹점 이용금액 0.2% 적립", limit: "무제한" },
      { title: "머니 할인", content: "매달 10일 응모 이벤트 참여 시 추가 혜택", limit: "월 최대 2천원" }
    ],
    benefitRules: [
      { category: "ETC", rate: 0.002, type: 'POINT', limit: 999999 },
      { category: "FOOD", rate: 0.1, type: 'POINT', limit: 2000 }
    ],
    condition: "전월 실적 조건 없음",
    performanceTiers: [{ min: 0, max: 999999999, rate: 0.002, desc: "전 가맹점 적립" }],
    bestPerformance: 0,
    baseRate: 0.002,
    maxBenefit: "무제한",
    officialLink: "https://pc.wooricard.com"
  },
  {
    id: 19,
    name: "하나 트래블로그 체크",
    company: "하나카드",
    annualFee: 0,
    image: "https://www.hanacard.co.kr/img/card/travelog_check.png",
    mainBenefits: ["환전 수수료 0원", "해외 가맹점 0원", "국내 0.3% 적립"],
    categories: ["ETC", "TRANSPORT"],
    isOwned: false,
    type: "체크",
    summary: "해외 여행 필수품, 실물 화폐 없이 떠나는 여행",
    statistics: {
      ageGroup: [{ label: "20대", value: 40 }, { label: "30대", value: 40 }, { label: "40대", value: 15 }, { label: "50대+", value: 5 }],
      gender: { male: 40, female: 60 }
    },
    detailBenefits: [
      { title: "국내 적립", content: "국내 전 가맹점 0.3% 하나머니 적립", limit: "무제한" },
      { title: "교통 적립", content: "시내버스, 지하철 0.3% 적립", limit: "무제한" }
    ],
    benefitRules: [
      { category: "ETC", rate: 0.003, type: 'POINT', limit: 999999 },
      { category: "TRANSPORT", rate: 0.003, type: 'POINT', limit: 999999 }
    ],
    condition: "전월 실적 조건 없음",
    performanceTiers: [{ min: 0, max: 999999999, rate: 0.003, desc: "해외 환전 특화" }],
    bestPerformance: 0,
    baseRate: 0.003,
    maxBenefit: "무제한",
    officialLink: "https://www.hanacard.co.kr"
  },
  {
    id: 20,
    name: "NH해봄 체크카드",
    company: "NH농협카드",
    annualFee: 0,
    image: "https://card.nonghyup.com/img/card/haebom_check.png",
    mainBenefits: ["온라인쇼핑 5% 할인", "학원비 5% 할인", "커피 10% 할인"],
    categories: ["SHOPPING", "EDUCATION", "FOOD"],
    isOwned: false,
    type: "체크",
    summary: "쇼핑과 교육을 동시에 해내는 기특한 체크카드",
    statistics: {
      ageGroup: [{ label: "10대", value: 30 }, { label: "20대", value: 50 }, { label: "30대", value: 20 }],
      gender: { male: 45, female: 55 }
    },
    detailBenefits: [
      { title: "온라인 할인", content: "G마켓, 쿠팡 5% 할인", limit: "월 최대 5천원" },
      { title: "교육 할인", content: "어학시험, 온/오프라인 학원 5% 할인", limit: "월 최대 5천원" }
    ],
    benefitRules: [
      { category: "SHOPPING", rate: 0.05, type: 'DISCOUNT', limit: 5000 },
      { category: "EDUCATION", rate: 0.05, type: 'DISCOUNT', limit: 5000 },
      { category: "FOOD", rate: 0.1, type: 'DISCOUNT', limit: 2000 }
    ],
    condition: "전월 실적 20만원 이상",
    performanceTiers: [
      { min: 200000, max: 500000, rate: 0.05, desc: "통합한도 7천원" },
      { min: 500000, max: 999999999, rate: 0.05, desc: "통합한도 1.5만원" }
    ],
    bestPerformance: 200000,
    baseRate: 0.05,
    maxBenefit: "15,000원",
    officialLink: "https://card.nonghyup.com"
  },
  {
    id: 21,
    name: "신한카드 Deep Dream 체크",
    company: "신한카드",
    annualFee: 0,
    image: "https://www.shinhancard.com/pconts/images/v2/card/img_card_deepdream_check.png",
    mainBenefits: ["기본 0.2% 적립", "자주 가는 영역 3배 적립"],
    categories: ["ETC", "FOOD", "SHOPPING"],
    isOwned: false,
    type: "체크",
    summary: "무실적으로 시작해 쓸수록 더 많이 쌓이는 꿈의 카드",
    statistics: {
      ageGroup: [{ label: "20대", value: 35 }, { label: "30대", value: 35 }, { label: "40대", value: 20 }, { label: "50대+", value: 10 }],
      gender: { male: 50, female: 50 }
    },
    detailBenefits: [
      { title: "모두 드림", content: "전 가맹점 이용금액 0.2% 적립", limit: "무제한" },
      { title: "더 드림", content: "자주 가는 DREAM 영역 0.6% 적립", limit: "월 최대 1만 포인트" }
    ],
    benefitRules: [
      { category: "ETC", rate: 0.002, type: 'POINT', limit: 999999 },
      { category: "FOOD", rate: 0.006, type: 'POINT', limit: 5000 },
      { category: "SHOPPING", rate: 0.006, type: 'POINT', limit: 5000 }
    ],
    condition: "전월 실적 조건 없음",
    performanceTiers: [{ min: 0, max: 999999999, rate: 0.002, desc: "무제한 적립" }],
    bestPerformance: 200000,
    baseRate: 0.002,
    maxBenefit: "무제한",
    officialLink: "https://www.shinhancard.com"
  },
  {
    id: 22,
    name: "현대카드 M Check",
    company: "현대카드",
    annualFee: 0,
    image: "https://www.hyundaicard.com/img/card/card_m_check.png",
    mainBenefits: ["0.5~1% M포인트 적립", "현대차 구매 시 포인트 사용"],
    categories: ["ETC", "TRANSPORT"],
    isOwned: false,
    type: "체크",
    summary: "체크카드로도 현대카드만의 강력한 M포인트를",
    statistics: {
      ageGroup: [{ label: "20대", value: 30 }, { label: "30대", value: 45 }, { label: "40대", value: 20 }, { label: "50대+", value: 5 }],
      gender: { male: 55, female: 45 }
    },
    detailBenefits: [
      { title: "포인트 적립", content: "전 가맹점 0.5~1% M포인트 적립", limit: "무제한" },
      { title: "교통 적립", content: "지하철, 버스 이용 시 포인트 적립", limit: "무제한" }
    ],
    benefitRules: [
      { category: "ETC", rate: 0.005, type: 'POINT', limit: 999999 },
      { category: "TRANSPORT", rate: 0.005, type: 'POINT', limit: 999999 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [{ min: 300000, max: 999999999, rate: 0.005, desc: "포인트 적립" }],
    bestPerformance: 300000,
    baseRate: 0.005,
    maxBenefit: "무제한",
    officialLink: "https://www.hyundaicard.com"
  },
  {
    id: 23,
    name: "카카오뱅크 프렌즈 체크",
    company: "카카오뱅크",
    annualFee: 0,
    image: "https://www.kakaobank.com/static/images/products/checkcard/img-card-friends.png",
    mainBenefits: ["평일 0.2% 캐시백", "주말/공휴일 0.4% 캐시백"],
    categories: ["ETC", "FOOD"],
    isOwned: false,
    type: "체크",
    summary: "매달 시즌별 캐시백 프로모션이 매력적인 필수 체크",
    statistics: {
      ageGroup: [{ label: "20대", value: 50 }, { label: "30대", value: 35 }, { label: "40대", value: 10 }, { label: "10대", value: 5 }],
      gender: { male: 50, female: 50 }
    },
    detailBenefits: [
      { title: "기본 캐시백", content: "국내외 가맹점 0.2% 캐시백", limit: "무제한" },
      { title: "주말 추가", content: "토/일요일 이용금액 0.2% 추가 캐시백", limit: "무제한" }
    ],
    benefitRules: [
      { category: "ETC", rate: 0.002, type: 'POINT', limit: 999999 },
      { category: "FOOD", rate: 0.002, type: 'POINT', limit: 999999 }
    ],
    condition: "전월 실적 조건 없음",
    performanceTiers: [{ min: 0, max: 999999999, rate: 0.002, desc: "캐시백 혜택" }],
    bestPerformance: 0,
    baseRate: 0.002,
    maxBenefit: "무제한",
    officialLink: "https://www.kakaobank.com"
  },
  {
    id: 24,
    name: "KB국민 위글위글 체크",
    company: "KB국민카드",
    annualFee: 0,
    image: "https://img1.kbcard.com/img/pda/card/21668_img.png",
    mainBenefits: ["지그재그 10% 할인", "편의점 5% 할인", "커피 10% 할인"],
    categories: ["SHOPPING", "FOOD"],
    isOwned: false,
    type: "체크",
    summary: "화려한 디자인과 강력한 쇼핑 혜택의 만남",
    statistics: {
      ageGroup: [{ label: "10대", value: 20 }, { label: "20대", value: 70 }, { label: "30대", value: 10 }],
      gender: { male: 15, female: 85 }
    },
    detailBenefits: [
      { title: "쇼핑 할인", content: "지그재그, 브랜디 10% 할인", limit: "월 최대 5천원" },
      { title: "생활 할인", content: "CU, GS25 편의점 5% 할인", limit: "월 최대 2천원" }
    ],
    benefitRules: [
      { category: "SHOPPING", rate: 0.1, type: 'DISCOUNT', limit: 5000 },
      { category: "FOOD", rate: 0.05, type: 'DISCOUNT', limit: 2000 }
    ],
    condition: "전월 실적 20만원 이상",
    performanceTiers: [
      { min: 200000, max: 500000, rate: 0.1, desc: "할인한도 1만원" }
    ],
    bestPerformance: 200000,
    baseRate: 0.1,
    maxBenefit: "10,000원",
    officialLink: "https://card.kbcard.com"
  },
  {
    id: 25,
    name: "삼성 iD POCKET 카드",
    company: "삼성카드",
    annualFee: 0,
    image: "https://static11.samsungcard.com/wcms/home/scard/image/card/id_pocket_l.png",
    mainBenefits: ["교통 1% 할인", "편의점 1% 할인", "배달앱 1% 할인"],
    categories: ["TRANSPORT", "FOOD"],
    isOwned: false,
    type: "체크",
    summary: "청소년 전용 용돈 카드, 계획적인 소비의 시작",
    statistics: {
      ageGroup: [{ label: "10대", value: 95 }, { label: "20대", value: 5 }],
      gender: { male: 45, female: 55 }
    },
    detailBenefits: [
      { title: "교통 할인", content: "대중교통 이용 시 1% 할인", limit: "월 최대 1천원" },
      { title: "생활 할인", content: "편의점, 카페 이용 시 1% 할인", limit: "월 최대 1천원" }
    ],
    benefitRules: [
      { category: "TRANSPORT", rate: 0.01, type: 'DISCOUNT', limit: 1000 },
      { category: "FOOD", rate: 0.01, type: 'DISCOUNT', limit: 1000 }
    ],
    condition: "전월 실적 조건 없음",
    performanceTiers: [{ min: 0, max: 999999999, rate: 0.01, desc: "청소년 전용" }],
    bestPerformance: 0,
    baseRate: 0.01,
    maxBenefit: "2,000원",
    officialLink: "https://www.samsungcard.com"
  },
  {
    id: 26,
    name: "우리 카드의정석 쿠키체크",
    company: "우리카드",
    annualFee: 0,
    image: "https://simage.wooricard.com/img/card/cookie_check.png",
    mainBenefits: ["온라인쇼핑 2천원 할인", "커피 2천원 할인", "공항라운지 무료"],
    categories: ["SHOPPING", "FOOD", "CULTURE"],
    isOwned: false,
    type: "체크",
    summary: "전 세계 라운지 이용과 해외 이용수수료 면제까지",
    statistics: {
      ageGroup: [{ label: "20대", value: 60 }, { label: "30대", value: 30 }, { label: "40대", value: 10 }],
      gender: { male: 40, female: 60 }
    },
    detailBenefits: [
      { title: "쇼핑 할인", content: "11번가, 지마켓, 쿠팡 2천원 할인", limit: "월 최대 1만원" },
      { title: "커피 할인", content: "스타벅스 1만원 이상 결제 시 2천원 할인", limit: "월 최대 4천원" }
    ],
    benefitRules: [
      { category: "SHOPPING", rate: 0.05, type: 'DISCOUNT', limit: 10000 },
      { category: "FOOD", rate: 0.1, type: 'DISCOUNT', limit: 4000 }
    ],
    condition: "전월 실적 20만원 이상",
    performanceTiers: [{ min: 200000, max: 500000, rate: 0.1, desc: "통합한도 1만원" }],
    bestPerformance: 200000,
    baseRate: 0.1,
    maxBenefit: "20,000원",
    officialLink: "https://pc.wooricard.com"
  },
  {
    id: 27,
    name: "하나 비바 G 체크카드",
    company: "하나카드",
    annualFee: 0,
    image: "https://www.hanacard.co.kr/img/card/viva_g.png",
    mainBenefits: ["해외 결제 1.5% 캐시백", "업종별 0.5% 적립", "교통 10% 할인"],
    categories: ["ETC", "TRANSPORT", "FOOD"],
    isOwned: false,
    type: "체크",
    summary: "유학생과 배낭여행객들 사이에서 입소문 난 글로벌 특화 카드",
    statistics: {
      ageGroup: [{ label: "20대", value: 70 }, { label: "30대", value: 20 }, { label: "40대", value: 10 }],
      gender: { male: 40, female: 60 }
    },
    detailBenefits: [
      { title: "해외 캐시백", content: "해외 전 가맹점 1.5% 캐시백", limit: "무제한" },
      { title: "생활 적립", content: "음식점, 마트 0.5% 적립", limit: "월 최대 5천원" }
    ],
    benefitRules: [
      { category: "ETC", rate: 0.015, type: 'POINT', limit: 999999 },
      { category: "FOOD", rate: 0.005, type: 'POINT', limit: 5000 }
    ],
    condition: "전월 실적 20만원 이상",
    performanceTiers: [{ min: 200000, max: 999999999, rate: 0.015, desc: "글로벌 적립" }],
    bestPerformance: 200000,
    baseRate: 0.015,
    maxBenefit: "무제한",
    officialLink: "https://www.hanacard.co.kr"
  },
  {
    id: 28,
    name: "신한카드 Global+ 체크",
    company: "신한카드",
    annualFee: 0,
    image: "https://www.shinhancard.com/pconts/images/v2/card/img_card_globalplus_check.png",
    mainBenefits: ["온라인쇼핑 2% 적립", "배달앱 5% 적립", "해외 가맹점 적립"],
    categories: ["SHOPPING", "FOOD"],
    isOwned: false,
    type: "체크",
    summary: "집에서도 밖에서도 해외 직구까지 커버하는 플러스",
    statistics: {
      ageGroup: [{ label: "20대", value: 45 }, { label: "30대", value: 35 }, { label: "40대", value: 20 }],
      gender: { male: 45, female: 55 }
    },
    detailBenefits: [
      { title: "온라인 적립", content: "쇼핑몰 이용 시 2% 포인트 적립", limit: "월 최대 5천원" },
      { title: "배달 적립", content: "배달의민족 5% 포인트 적립", limit: "월 최대 3천원" }
    ],
    benefitRules: [
      { category: "SHOPPING", rate: 0.02, type: 'POINT', limit: 5000 },
      { category: "FOOD", rate: 0.05, type: 'POINT', limit: 3000 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [{ min: 300000, max: 999999999, rate: 0.05, desc: "언택트 적립" }],
    bestPerformance: 300000,
    baseRate: 0.05,
    maxBenefit: "10,000원",
    officialLink: "https://www.shinhancard.com"
  },
  {
    id: 29,
    name: "롯데카드 POINT CHECK",
    company: "롯데카드",
    annualFee: 0,
    image: "https://www.lottecard.co.kr/img/card/point_check.png",
    mainBenefits: ["L.POINT 0.2% 적립", "롯데 계열사 2배 적립"],
    categories: ["SHOPPING", "ETC"],
    isOwned: false,
    type: "체크",
    summary: "롯데리아부터 세븐일레븐까지, 롯데 생활권 필수템",
    statistics: {
      ageGroup: [{ label: "30대", value: 30 }, { label: "40대", value: 40 }, { label: "50대+", value: 30 }],
      gender: { male: 40, female: 60 }
    },
    detailBenefits: [
      { title: "기본 적립", content: "국내외 모든 가맹점 0.2% L.POINT 적립", limit: "무제한" },
      { title: "롯데 적립", content: "롯데 계열사 이용 시 추가 적립", limit: "무제한" }
    ],
    benefitRules: [
      { category: "SHOPPING", rate: 0.005, type: 'POINT', limit: 999999 },
      { category: "ETC", rate: 0.002, type: 'POINT', limit: 999999 }
    ],
    condition: "전월 실적 조건 없음",
    performanceTiers: [{ min: 0, max: 999999999, rate: 0.002, desc: "포인트 통합형" }],
    bestPerformance: 0,
    baseRate: 0.002,
    maxBenefit: "무제한",
    officialLink: "https://www.lottecard.co.kr"
  },
  {
    id: 30,
    name: "NH All My 체크카드",
    company: "NH농협카드",
    annualFee: 0,
    image: "https://card.nonghyup.com/img/card/all_my_check.png",
    mainBenefits: ["전 가맹점 0.2% 할인", "주말/공휴일 0.1% 추가 할인"],
    categories: ["ETC", "FOOD"],
    isOwned: false,
    type: "체크",
    summary: "언제 어디서나 조건 없이 할인받는 올인원 체크",
    statistics: {
      ageGroup: [{ label: "20대", value: 25 }, { label: "30대", value: 35 }, { label: "40대", value: 25 }, { label: "50대+", value: 15 }],
      gender: { male: 50, female: 50 }
    },
    detailBenefits: [
      { title: "평일 할인", content: "국내외 전 가맹점 0.2% 결제일 할인", limit: "무제한" },
      { title: "주말 할인", content: "토요일, 일요일 0.1% 추가 할인", limit: "무제한" }
    ],
    benefitRules: [
      { category: "ETC", rate: 0.002, type: 'DISCOUNT', limit: 999999 },
      { category: "FOOD", rate: 0.003, type: 'DISCOUNT', limit: 999999 }
    ],
    condition: "전월 실적 조건 없음",
    performanceTiers: [{ min: 0, max: 999999999, rate: 0.002, desc: "올인원 할인" }],
    bestPerformance: 0,
    baseRate: 0.002,
    maxBenefit: "무제한",
    officialLink: "https://card.nonghyup.com"
  }
];