import type { Card } from '../type/Card';

export const CARD_LIST: Card[] = [
  {
    id: 1,
    name: "신한카드 Mr.Life",
    company: "신한카드",
    annualFee: 15000,
    image: "https://www.shinhancard.com/pconts/images/v2/card/img_card_mrlife.png",
    mainBenefits: ["공과금 10% 할인", "편의점 10% 할인", "병원/약국 10% 할인"],
    categories: ["생활", "공과금", "쇼핑"],
    isOwned: false,
    type: "신용",
    summary: "1인 가구 및 자취생을 위한 생활 밀착형 혜택 끝판왕 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 35 },
        { label: "30대", value: 40 },
        { label: "40대", value: 15 },
        { label: "50대+", value: 10 }
      ],
      gender: { male: 48, female: 52 }
    },
    detailBenefits: [
      { title: "월납요금 할인", content: "전기, 도시가스, 통신요금 10% 결제일 할인", limit: "월 최대 1만원" },
      { title: "TIME 할인", content: "편의점, 병원/약국, 세탁소 10% 할인", limit: "월 최대 1만원" }
    ],
    benefitRules: [
      { category: "공과금", rate: 0.1, type: 'DISCOUNT', limit: 10000 },
      { category: "생활", rate: 0.1, type: 'DISCOUNT', limit: 10000 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [
      { min: 300000, max: 500000, rate: 0.1, desc: "할인한도 1만원" },
      { min: 500000, max: 1000000, rate: 0.1, desc: "할인한도 2만원" },
      { min: 1000000, max: 999999999, rate: 0.1, desc: "할인한도 3만원" }
    ],
    bestPerformance: 500000,
    baseRate: 0.1,
    maxBenefit: "50,000원",
    officialLink: "https://www.shinhancard.com"
  },
  {
    id: 2,
    name: "삼성카드 taptap O",
    company: "삼성카드",
    annualFee: 10000,
    image: "https://static11.samsungcard.com/wcms/home/scard/image/card/tap_o_l.png",
    mainBenefits: ["스타벅스 50% 할인", "대중교통 10% 할인", "통신 10% 할인"],
    categories: ["카페", "교통", "통신"],
    isOwned: false,
    type: "신용",
    summary: "MZ세대가 가장 선호하는 커피와 쇼핑 맞춤형 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 50 },
        { label: "30대", value: 35 },
        { label: "40대", value: 10 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 42, female: 58 }
    },
    detailBenefits: [
      { title: "커피 할인", content: "스타벅스 50% 또는 10대 커피 전문점 30% 선택 할인", limit: "월 1만원" },
      { title: "쇼핑 할인", content: "오픈마켓, 소셜커머스, 트렌디숍 7% 할인", limit: "월 5천원" }
    ],
    benefitRules: [
      { category: "카페", rate: 0.5, type: 'DISCOUNT', limit: 10000 },
      { category: "쇼핑", rate: 0.07, type: 'DISCOUNT', limit: 5000 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [
      { min: 300000, max: 999999999, rate: 0.5, desc: "실적 충족 시 고정 할인" }
    ],
    bestPerformance: 300000,
    baseRate: 0.01,
    maxBenefit: "30,000원",
    officialLink: "https://www.samsungcard.com"
  },
  {
    id: 3,
    name: "KB국민 My WEsh 카드",
    company: "KB국민카드",
    annualFee: 15000,
    image: "https://img1.kbcard.com/img/card/cms/1000/1000_img.png",
    mainBenefits: ["음식점/편의점 10% 할인", "OTT 30% 할인", "KB Pay 5% 할인"],
    categories: ["푸드", "구독", "간편결제"],
    isOwned: false,
    type: "신용",
    summary: "나를 위한 소비에 집중하는 맞춤 혜택 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 45 },
        { label: "30대", value: 35 },
        { label: "40대", value: 15 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 45, female: 55 }
    },
    detailBenefits: [
      { title: "나한테 진심", content: "음식점, 편의점, 앱스토어 10% 할인", limit: "월 5천원" },
      { title: "더욱 진심", content: "OTT 30% 할인, KB Pay 5% 할인", limit: "월 5천원" }
    ],
    benefitRules: [
      { category: "음식점", rate: 0.1, type: 'DISCOUNT', limit: 5000 },
      { category: "OTT", rate: 0.3, type: 'DISCOUNT', limit: 5000 }
    ],
    condition: "전월 실적 40만원 이상",
    performanceTiers: [
      { min: 400000, max: 999999999, rate: 0.1, desc: "실적 충족 시 전 영역 할인" }
    ],
    bestPerformance: 400000,
    baseRate: 0.05,
    maxBenefit: "25,000원",
    officialLink: "https://card.kbcard.com"
  },
  {
    id: 4,
    name: "현대카드 ZERO Edition3(할인형)",
    company: "현대카드",
    annualFee: 15000,
    image: "https://www.hyundaicard.com/img/card/card_zero_3_h.png",
    mainBenefits: ["모든 가맹점 0.8% 할인", "온라인 간편결제 1.2% 할인"],
    categories: ["모든가맹점", "무실적"],
    isOwned: false,
    type: "신용",
    summary: "실적 조건도 한도 제한도 없는 가장 심플한 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 30 },
        { label: "30대", value: 40 },
        { label: "40대", value: 20 },
        { label: "50대+", value: 10 }
      ],
      gender: { male: 50, female: 50 }
    },
    detailBenefits: [
      { title: "기본 할인", content: "국내외 모든 가맹점 이용금액 0.8% 할인", limit: "제한없음" },
      { title: "생활 할인", content: "온라인 간편결제 이용 시 1.2% 할인", limit: "제한없음" }
    ],
    benefitRules: [
      { category: "기본", rate: 0.008, type: 'DISCOUNT', limit: 999999999 },
      { category: "간편결제", rate: 0.012, type: 'DISCOUNT', limit: 999999999 }
    ],
    condition: "실적 조건 없음",
    performanceTiers: [
      { min: 0, max: 999999999, rate: 0.008, desc: "조건 없이 무제한" }
    ],
    bestPerformance: 0,
    baseRate: 0.008,
    maxBenefit: "무제한",
    officialLink: "https://www.hyundaicard.com"
  },
  {
    id: 5,
    name: "롯데카드 LOCA 365",
    company: "롯데카드",
    annualFee: 20000,
    image: "https://www.lottecard.co.kr/img/card/loca365.png",
    mainBenefits: ["아파트관리비 10% 할인", "이동통신 10% 할인", "배달앱 10% 할인"],
    categories: ["생활", "공과금", "배달"],
    isOwned: false,
    type: "신용",
    summary: "매달 나가는 고정비를 확실하게 줄여주는 생활형 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 10 },
        { label: "30대", value: 40 },
        { label: "40대", value: 35 },
        { label: "50대+", value: 15 }
      ],
      gender: { male: 35, female: 65 }
    },
    detailBenefits: [
      { title: "생활비 할인", content: "관리비, 통신비, 도시가스 각 10% 할인", limit: "각 5천원" },
      { title: "기타 할인", content: "배달앱, 보험료, 학습지 10% 할인", limit: "각 5천원" }
    ],
    benefitRules: [
      { category: "공과금", rate: 0.1, type: 'DISCOUNT', limit: 15000 },
      { category: "배달", rate: 0.1, type: 'DISCOUNT', limit: 5000 }
    ],
    condition: "전월 실적 50만원 이상",
    performanceTiers: [
      { min: 500000, max: 999999999, rate: 0.1, desc: "전월 실적 달성 시 혜택 제공" }
    ],
    bestPerformance: 500000,
    baseRate: 0.1,
    maxBenefit: "36,500원",
    officialLink: "https://www.lottecard.co.kr"
  },
  {
    id: 6,
    name: "카카오뱅크 프렌즈 체크카드",
    company: "카카오뱅크",
    annualFee: 0,
    image: "https://www.kakaobank.com/static/images/products/pc/card/card_intro.png",
    mainBenefits: ["평일 0.2% 적립", "주말/공휴일 0.4% 적립"],
    categories: ["모든가맹점", "캐시백"],
    isOwned: false,
    type: "체크",
    summary: "귀여운 디자인과 조건 없는 기본 적립 혜택",
    statistics: {
      ageGroup: [
        { label: "20대", value: 60 },
        { label: "30대", value: 25 },
        { label: "40대", value: 10 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 40, female: 60 }
    },
    detailBenefits: [
      { title: "기본 적립", content: "전 가맹점 기본 0.2% 적립", limit: "제한없음" },
      { title: "주말 적립", content: "주말 및 공휴일 추가 0.2% 적립 (총 0.4%)", limit: "제한없음" }
    ],
    benefitRules: [
      { category: "전체", rate: 0.002, type: 'SAVE', limit: 999999999 }
    ],
    condition: "전월 실적 없음",
    performanceTiers: [
      { min: 0, max: 999999999, rate: 0.002, desc: "실적 조건 없이 제공" }
    ],
    bestPerformance: 0,
    baseRate: 0.002,
    maxBenefit: "무제한",
    officialLink: "https://www.kakaobank.com"
  },
  {
    id: 7,
    name: "우리카드 DA@카드의정석",
    company: "우리카드",
    annualFee: 12000,
    image: "https://simage.wooricard.com/img/card/card_da.png",
    mainBenefits: ["모든 가맹점 0.8% 할인", "생활 업종 1.3% 할인", "라운지 무료"],
    categories: ["모든가맹점", "무실적", "여행"],
    isOwned: false,
    type: "신용",
    summary: "실적 없이 어디서나 할인받고 공항 라운지까지 이용",
    statistics: {
      ageGroup: [
        { label: "20대", value: 25 },
        { label: "30대", value: 35 },
        { label: "40대", value: 25 },
        { label: "50대+", value: 15 }
      ],
      gender: { male: 55, female: 45 }
    },
    detailBenefits: [
      { title: "기본 할인", content: "국내외 모든 가맹점 0.8% 할인", limit: "제한없음" },
      { title: "생활 할인", content: "음식점, 병원, 약국, 교통 0.5% 추가 할인", limit: "제한없음" }
    ],
    benefitRules: [
      { category: "전체", rate: 0.008, type: 'DISCOUNT', limit: 999999999 },
      { category: "생활", rate: 0.013, type: 'DISCOUNT', limit: 999999999 }
    ],
    condition: "실적 조건 없음",
    performanceTiers: [
      { min: 0, max: 999999999, rate: 0.008, desc: "할인 한도 없음" }
    ],
    bestPerformance: 0,
    baseRate: 0.008,
    maxBenefit: "무제한",
    officialLink: "https://www.wooricard.com"
  },
  {
    id: 8,
    name: "토스뱅크 체크카드",
    company: "토스뱅크",
    annualFee: 0,
    image: "https://static.toss.im/assets/card/tossbank-card.png",
    mainBenefits: ["집중 영역 500원 캐시백", "모든 결제 100원 캐시백"],
    categories: ["생활", "편의점", "카페"],
    isOwned: false,
    type: "체크",
    summary: "매일 한 번 결제할 때마다 즉시 돌려받는 캐시백 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 55 },
        { label: "30대", value: 30 },
        { label: "40대", value: 10 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 48, female: 52 }
    },
    detailBenefits: [
      { title: "영역별 캐시백", content: "편의점, 카페, 패스트푸드 등 건당 500원", limit: "영역별 일 1회" },
      { title: "모든 결제", content: "5천원 미만 100원, 5천원 이상 500원 캐시백", limit: "제한없음" }
    ],
    benefitRules: [
      { category: "생활", rate: 0.1, type: 'FIXED', limit: 500 }
    ],
    condition: "전월 실적 없음",
    performanceTiers: [
      { min: 0, max: 999999999, rate: 0, desc: "실적 관계없이 고정 캐시백" }
    ],
    bestPerformance: 0,
    baseRate: 0,
    maxBenefit: "일 최대 3,500원",
    officialLink: "https://www.tossbank.com"
  },
  {
    id: 9,
    name: "하나카드 트래블로그 체크",
    company: "하나카드",
    annualFee: 0,
    image: "https://www.hanacard.co.kr/img/card/travellog.png",
    mainBenefits: ["해외 수수료 면제", "환전 100% 우대", "해외 가맹점 적립"],
    categories: ["해외", "여행", "무실적"],
    isOwned: false,
    type: "체크",
    summary: "해외 여행과 직구의 필수 아이템, 환전 수수료 제로",
    statistics: {
      ageGroup: [
        { label: "20대", value: 45 },
        { label: "30대", value: 40 },
        { label: "40대", value: 10 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 45, female: 55 }
    },
    detailBenefits: [
      { title: "해외 이용", content: "해외 가맹점 이용 수수료 면제", limit: "제한없음" },
      { title: "환전 혜택", content: "하나머니 환전 시 주요 통화 100% 우대", limit: "제한없음" }
    ],
    benefitRules: [
      { category: "해외", rate: 0, type: 'FIXED', limit: 0 }
    ],
    condition: "실적 조건 없음",
    performanceTiers: [
      { min: 0, max: 999999999, rate: 1, desc: "환전 우대 상시 적용" }
    ],
    bestPerformance: 0,
    baseRate: 0,
    maxBenefit: "제한없음",
    officialLink: "https://www.hanacard.co.kr"
  },
  {
    id: 10,
    name: "농협카드 zgm.streaming",
    company: "농협카드",
    annualFee: 12000,
    image: "https://card.nonghyup.com/img/card/zgm_streaming.png",
    mainBenefits: ["스트리밍 50% 할인", "온라인쇼핑 5% 할인", "스타벅스 10% 할인"],
    categories: ["구독", "쇼핑", "카페"],
    isOwned: false,
    type: "신용",
    summary: "구독 서비스와 온라인 쇼핑에 최적화된 디지털 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 50 },
        { label: "30대", value: 35 },
        { label: "40대", value: 10 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 46, female: 54 }
    },
    detailBenefits: [
      { title: "구독 할인", content: "넷플릭스, 유튜브프리미엄 등 50% 할인", limit: "월 5천원" },
      { title: "쇼핑 할인", content: "네이버페이, 카카오페이 5% 할인", limit: "월 5천원" }
    ],
    benefitRules: [
      { category: "구독", rate: 0.5, type: 'DISCOUNT', limit: 5000 },
      { category: "쇼핑", rate: 0.05, type: 'DISCOUNT', limit: 5000 }
    ],
    condition: "전월 실적 40만원 이상",
    performanceTiers: [
      { min: 400000, max: 999999999, rate: 0.5, desc: "실적 충족 시 전액 혜택" }
    ],
    bestPerformance: 400000,
    baseRate: 0.05,
    maxBenefit: "20,000원",
    officialLink: "https://card.nonghyup.com"
  },
  {
    id: 11,
    name: "기업은행 I-ALL 카드",
    company: "기업은행",
    annualFee: 10000,
    image: "https://www.ibk.co.kr/card/img/i_all.png",
    mainBenefits: ["전 가맹점 최대 1% 할인", "주유/마트 1.5% 할인"],
    categories: ["모든가맹점", "주유", "마트"],
    isOwned: false,
    type: "신용",
    summary: "전 영역 할인과 생활 밀착 업종 추가 혜택",
    statistics: {
      ageGroup: [
        { label: "20대", value: 20 },
        { label: "30대", value: 30 },
        { label: "40대", value: 30 },
        { label: "50대+", value: 20 }
      ],
      gender: { male: 52, female: 48 }
    },
    detailBenefits: [
      { title: "기본 할인", content: "모든 가맹점 이용금액 0.5% 할인", limit: "제한없음" },
      { title: "특별 할인", content: "주유소, 대형마트 1.5% 할인", limit: "제한없음" }
    ],
    benefitRules: [
      { category: "기본", rate: 0.005, type: 'DISCOUNT', limit: 999999999 },
      { category: "주유", rate: 0.015, type: 'DISCOUNT', limit: 999999999 }
    ],
    condition: "전월 실적 50만원 이상",
    performanceTiers: [
      { min: 500000, max: 999999999, rate: 0.01, desc: "실적 달성 시 할인율 상승" }
    ],
    bestPerformance: 500000,
    baseRate: 0.005,
    maxBenefit: "무제한",
    officialLink: "https://www.ibk.co.kr"
  },
  {
    id: 12,
    name: "BC카드 바로 클리어 플러스",
    company: "BC카드",
    annualFee: 15000,
    image: "https://www.bccard.com/pay/img/card/card_clearplus.png",
    mainBenefits: ["점심 식사 7% 할인", "배달앱 7% 할인", "대중교통 7% 할인"],
    categories: ["식비", "생활", "교통"],
    isOwned: false,
    type: "신용",
    summary: "직장인의 점심값과 교통비를 책임지는 실속형 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 30 },
        { label: "30대", value: 45 },
        { label: "40대", value: 20 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 55, female: 45 }
    },
    detailBenefits: [
      { title: "점심 할인", content: "오전 11시 ~ 오후 2시 음식점 7% 할인", limit: "월 최대 1만원" },
      { title: "생활 할인", content: "편의점, 배달앱, 대중교통 7% 할인", limit: "영역별 통합 한도" }
    ],
    benefitRules: [
      { category: "음식점", rate: 0.07, type: 'DISCOUNT', limit: 10000 },
      { category: "배달", rate: 0.07, type: 'DISCOUNT', limit: 5000 }
    ],
    condition: "전월 실적 15만원 이상",
    performanceTiers: [
      { min: 150000, max: 300000, rate: 0.07, desc: "할인 한도 1만원" },
      { min: 300000, max: 999999999, rate: 0.07, desc: "할인 한도 2만원" }
    ],
    bestPerformance: 150000,
    baseRate: 0.07,
    maxBenefit: "20,000원",
    officialLink: "https://www.bccard.com"
  },
  {
    id: 13,
    name: "케이뱅크 MY 체크카드",
    company: "케이뱅크",
    annualFee: 0,
    image: "https://www.kbanknow.com/static/img/card/my_check_card.png",
    mainBenefits: ["영역별 500원 캐시백", "대중교통 알뜰교통 혜택"],
    categories: ["편의점", "카페", "교통"],
    isOwned: false,
    type: "체크",
    summary: "사용한 즉시 입금되는 300~500원 영역별 캐시백",
    statistics: {
      ageGroup: [
        { label: "20대", value: 50 },
        { label: "30대", value: 30 },
        { label: "40대", value: 15 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 45, female: 55 }
    },
    detailBenefits: [
      { title: "영역별 캐시백", content: "편의점, 카페, 마트 등 10대 영역 건당 캐시백", limit: "일 1회" },
      { title: "교통 혜택", content: "알뜰교통카드 기능 탑재 마일리지 적립", limit: "정책에 따름" }
    ],
    benefitRules: [
      { category: "생활", rate: 0, type: 'FIXED', limit: 500 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [
      { min: 300000, max: 999999999, rate: 0, desc: "건당 500원 캐시백" }
    ],
    bestPerformance: 300000,
    baseRate: 0,
    maxBenefit: "15,000원",
    officialLink: "https://www.kbanknow.com"
  },
  {
    id: 14,
    name: "신한카드 Deep Dream Platinum+",
    company: "신한카드",
    annualFee: 30000,
    image: "https://www.shinhancard.com/pconts/images/v2/card/img_card_deepdream_plat.png",
    mainBenefits: ["모든 가맹점 0.7~1.1% 적립", "Dream 영역 최대 3.3% 적립"],
    categories: ["모든가맹점", "적립", "심플"],
    isOwned: false,
    type: "신용",
    summary: "포인트 적립 한도가 높고 자동으로 가장 많이 쓴 곳을 적립",
    statistics: {
      ageGroup: [
        { label: "20대", value: 15 },
        { label: "30대", value: 35 },
        { label: "40대", value: 35 },
        { label: "50대+", value: 15 }
      ],
      gender: { male: 60, female: 40 }
    },
    detailBenefits: [
      { title: "모두 드림", content: "전 가맹점 기본 0.7% 적립", limit: "무제한" },
      { title: "더해 드림", content: "자주 가는 Dream 영역 2.1% 적립", limit: "월 최대 5만P" }
    ],
    benefitRules: [
      { category: "기본", rate: 0.007, type: 'SAVE', limit: 999999999 },
      { category: "선택", rate: 0.033, type: 'SAVE', limit: 50000 }
    ],
    condition: "전월 실적 50만원 이상",
    performanceTiers: [
      { min: 500000, max: 1000000, rate: 0.007, desc: "기본 적립" },
      { min: 1000000, max: 1500000, rate: 0.01, desc: "적립률 우대" }
    ],
    bestPerformance: 1000000,
    baseRate: 0.007,
    maxBenefit: "50,000P + 무제한",
    officialLink: "https://www.shinhancard.com"
  },
  {
    id: 15,
    name: "신협 CU Big Pay 체크",
    company: "신협",
    annualFee: 0,
    image: "https://www.cu.union.or.kr/img/card/cubigpay.png",
    mainBenefits: ["CU 편의점 5% 할인", "음식점 5% 할인", "통신 1,000원 할인"],
    categories: ["편의점", "푸드", "통신"],
    isOwned: false,
    type: "체크",
    summary: "생활 반경 내 CU와 식당 이용이 많은 분들을 위한 체크카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 40 },
        { label: "30대", value: 20 },
        { label: "40대", value: 20 },
        { label: "50대+", value: 20 }
      ],
      gender: { male: 45, female: 55 }
    },
    detailBenefits: [
      { title: "CU 할인", content: "CU 편의점 이용 시 5% 결제 할인", limit: "월 5천원" },
      { title: "푸드 할인", content: "오후 6시 이후 식당/주점 5% 할인", limit: "월 5천원" }
    ],
    benefitRules: [
      { category: "편의점", rate: 0.05, type: 'DISCOUNT', limit: 5000 },
      { category: "식비", rate: 0.05, type: 'DISCOUNT', limit: 5000 }
    ],
    condition: "전월 실적 20만원 이상",
    performanceTiers: [
      { min: 200000, max: 999999999, rate: 0.05, desc: "최소 실적 기준" }
    ],
    bestPerformance: 200000,
    baseRate: 0.05,
    maxBenefit: "15,000원",
    officialLink: "·"
  },
  {
    id: 16,
    name: "우체국 개미 체크카드",
    company: "우체국",
    annualFee: 0,
    image: "https://www.epostbank.go.kr/img/card/ant_card.png",
    mainBenefits: ["대형마트 10% 캐시백", "우체국 10% 캐시백", "편의점 5% 캐시백"],
    categories: ["마트", "생활", "편의점"],
    isOwned: false,
    type: "체크",
    summary: "쇼핑과 우체국 이용 시 체감 혜택이 큰 알뜰 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 20 },
        { label: "30대", value: 25 },
        { label: "40대", value: 35 },
        { label: "50대+", value: 20 }
      ],
      gender: { male: 30, female: 70 }
    },
    detailBenefits: [
      { title: "마트 혜택", content: "이마트, 홈플러스, 롯데마트 10% 캐시백", limit: "월 5천원" },
      { title: "우체국 혜택", content: "우편, 택배, 쇼핑 이용 시 10% 캐시백", limit: "월 5천원" }
    ],
    benefitRules: [
      { category: "마트", rate: 0.1, type: 'SAVE', limit: 5000 },
      { category: "우체국", rate: 0.1, type: 'SAVE', limit: 5000 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [
      { min: 300000, max: 999999999, rate: 0.1, desc: "캐시백 한도 적용" }
    ],
    bestPerformance: 300000,
    baseRate: 0.05,
    maxBenefit: "20,000원",
    officialLink: "https://www.epostbank.go.kr"
  },
  {
    id: 17,
    name: "새마을금고 꿀카드",
    company: "새마을금고",
    annualFee: 0,
    image: "https://www.kfcc.co.kr/img/card/honey_card.png",
    mainBenefits: ["음식점/카페 1,000원 캐시백", "OTT 2,000원 캐시백"],
    categories: ["푸드", "카페", "구독"],
    isOwned: false,
    type: "체크",
    summary: "심플한 건당 정액 캐시백으로 복잡함을 없앤 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 40 },
        { label: "30대", value: 30 },
        { label: "40대", value: 20 },
        { label: "50대+", value: 10 }
      ],
      gender: { male: 40, female: 60 }
    },
    detailBenefits: [
      { title: "데일리 캐시백", content: "식당, 카페 건당 1만원 이상 결제 시 1천원 캐시백", limit: "월 10회" },
      { title: "구독 서비스", content: "넷플릭스 등 OTT 2천원 캐시백", limit: "월 1회" }
    ],
    benefitRules: [
      { category: "푸드", rate: 0, type: 'FIXED', limit: 1000 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [
      { min: 300000, max: 999999999, rate: 0.1, desc: "캐시백 혜택 제공" }
    ],
    bestPerformance: 300000,
    baseRate: 0,
    maxBenefit: "12,000원",
    officialLink: "·"
  },
  {
    id: 18,
    name: "부산은행 BNK 썸 체크",
    company: "부산은행",
    annualFee: 0,
    image: "https://www.busanbank.co.kr/img/card/thumb_check.png",
    mainBenefits: ["국내 모든 가맹점 0.2% 캐시백", "전통시장 2% 캐시백"],
    categories: ["모든가맹점", "전통시장"],
    isOwned: false,
    type: "체크",
    summary: "부산 지역 특화 혜택과 기본 적립을 동시에",
    statistics: {
      ageGroup: [
        { label: "20대", value: 30 },
        { label: "30대", value: 25 },
        { label: "40대", value: 25 },
        { label: "50대+", value: 20 }
      ],
      gender: { male: 45, female: 55 }
    },
    detailBenefits: [
      { title: "기본 캐시백", content: "실적 조건 없는 0.2% 기본 캐시백", limit: "무제한" },
      { title: "지역 특화", content: "부산 내 전통시장 이용 시 2% 캐시백", limit: "월 1만원" }
    ],
    benefitRules: [
      { category: "전통시장", rate: 0.02, type: 'SAVE', limit: 10000 }
    ],
    condition: "실적 조건 없음 (특화 혜택은 실적 필요)",
    performanceTiers: [
      { min: 0, max: 999999999, rate: 0.002, desc: "기본 무제한" }
    ],
    bestPerformance: 200000,
    baseRate: 0.002,
    maxBenefit: "무제한",
    officialLink: "https://www.busanbank.co.kr"
  },
  {
    id: 19,
    name: "대구은행 DGB Z 체크",
    company: "대구은행",
    annualFee: 0,
    image: "https://www.dgb.co.kr/img/card/dgbz_check.png",
    mainBenefits: ["카페 20% 할인", "온라인 쇼핑 10% 할인"],
    categories: ["카페", "온라인쇼핑"],
    isOwned: false,
    type: "체크",
    summary: "지역 청년층을 타겟으로 한 카페와 쇼핑 특화 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 65 },
        { label: "30대", value: 20 },
        { label: "40대", value: 10 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 35, female: 65 }
    },
    detailBenefits: [
      { title: "카페 집중", content: "스타벅스, 이디야 등 20% 할인", limit: "월 3천원" },
      { title: "쇼핑 할인", content: "무신사, 지그재그 등 10% 할인", limit: "월 3천원" }
    ],
    benefitRules: [
      { category: "카페", rate: 0.2, type: 'DISCOUNT', limit: 3000 }
    ],
    condition: "전월 실적 20만원 이상",
    performanceTiers: [
      { min: 200000, max: 999999999, rate: 0.2, desc: "Z세대 맞춤 혜택" }
    ],
    bestPerformance: 200000,
    baseRate: 0.1,
    maxBenefit: "10,000원",
    officialLink: "https://www.dgb.co.kr"
  },
  {
    id: 20,
    name: "광주은행 K-패스 체크",
    company: "광주은행",
    annualFee: 0,
    image: "https://www.kjbank.com/img/card/kpass_check.png",
    mainBenefits: ["교통비 최대 53% 환급", "커피 10% 캐시백"],
    categories: ["교통", "카페"],
    isOwned: false,
    type: "체크",
    summary: "정부 지원 교통비 환급에 은행 자체 캐시백을 더한 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 45 },
        { label: "30대", value: 35 },
        { label: "40대", value: 15 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 42, female: 58 }
    },
    detailBenefits: [
      { title: "K-패스 환급", content: "정부 정책에 따른 월 교통비 차등 환급", limit: "월 60회" },
      { title: "카드사 혜택", content: "스타벅스 이용 시 10% 추가 캐시백", limit: "월 2천원" }
    ],
    benefitRules: [
      { category: "교통", rate: 0.2, type: 'SAVE', limit: 30000 }
    ],
    condition: "전월 실적 20만원 이상",
    performanceTiers: [
      { min: 200000, max: 999999999, rate: 0.1, desc: "캐시백 조건 충족" }
    ],
    bestPerformance: 200000,
    baseRate: 0.2,
    maxBenefit: "교통비 환급액 + 5,000원",
    officialLink: "https://www.kjbank.com"
  },
  {
    id: 21,
    name: "전북은행 JB Card One",
    company: "전북은행",
    annualFee: 10000,
    image: "https://www.jbbank.co.kr/img/card/jb_one.png",
    mainBenefits: ["모든 가맹점 0.5% 할인", "영화관 3,000원 할인"],
    categories: ["모든가맹점", "영화"],
    isOwned: false,
    type: "신용",
    summary: "전북 지역 고객을 위한 군더더기 없는 기본형 할인 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 15 },
        { label: "30대", value: 25 },
        { label: "40대", value: 40 },
        { label: "50대+", value: 20 }
      ],
      gender: { male: 50, female: 50 }
    },
    detailBenefits: [
      { title: "기본 할인", content: "어디서나 조건 없이 0.5% 청구 할인", limit: "무제한" },
      { title: "영화 혜택", content: "CGV, 롯데시네마 1만원 이상 시 3천원 할인", limit: "월 1회" }
    ],
    benefitRules: [
      { category: "기본", rate: 0.005, type: 'DISCOUNT', limit: 999999999 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [
      { min: 300000, max: 999999999, rate: 0.005, desc: "전 가맹점 할인" }
    ],
    bestPerformance: 300000,
    baseRate: 0.005,
    maxBenefit: "무제한",
    officialLink: "https://www.jbbank.co.kr"
  },
  {
    id: 22,
    name: "제주은행 탐나는전 체크",
    company: "제주은행",
    annualFee: 0,
    image: "https://www.e-jejubank.com/img/card/tamna.png",
    mainBenefits: ["제주 지역화폐 결제 혜택", "전통시장 2% 적립"],
    categories: ["지역화폐", "전통시장"],
    isOwned: false,
    type: "체크",
    summary: "제주도 생활 필수품, 탐나는전 가맹점 특화 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 20 },
        { label: "30대", value: 30 },
        { label: "40대", value: 35 },
        { label: "50대+", value: 15 }
      ],
      gender: { male: 45, female: 55 }
    },
    detailBenefits: [
      { title: "탐나는전", content: "제주 지역화폐 가맹점 이용 시 추가 인센티브", limit: "정책에 따름" },
      { title: "적립 혜택", content: "전통시장 및 대중교통 이용 시 포인트 적립", limit: "월 5천P" }
    ],
    benefitRules: [
      { category: "전통시장", rate: 0.02, type: 'SAVE', limit: 5000 }
    ],
    condition: "지자체 정책 연동",
    performanceTiers: [
      { min: 0, max: 999999999, rate: 0.01, desc: "제주 거주자/여행객 특화" }
    ],
    bestPerformance: 0,
    baseRate: 0.01,
    maxBenefit: "정책별 상이",
    officialLink: "https://www.e-jejubank.com"
  },
  {
    id: 23,
    name: "경남은행 BNK 주거래 체크",
    company: "경남은행",
    annualFee: 0,
    image: "https://www.knbank.co.kr/img/card/main_check.png",
    mainBenefits: ["생활 전 영역 0.2% 적립", "학원/병원 추가 적립"],
    categories: ["모든가맹점", "교육", "의료"],
    isOwned: false,
    type: "체크",
    summary: "학부모와 고정 지출이 많은 고객을 위한 주거래용 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 15 },
        { label: "30대", value: 30 },
        { label: "40대", value: 40 },
        { label: "50대+", value: 15 }
      ],
      gender: { male: 30, female: 70 }
    },
    detailBenefits: [
      { title: "기본 적립", content: "모든 결제 금액 0.2% 포인트 적립", limit: "무제한" },
      { title: "교육/의료", content: "학원, 병원 업종 이용 시 0.5% 추가 적립", limit: "월 1만P" }
    ],
    benefitRules: [
      { category: "의료", rate: 0.007, type: 'SAVE', limit: 10000 }
    ],
    condition: "전월 실적 30만원 이상",
    performanceTiers: [
      { min: 300000, max: 999999999, rate: 0.002, desc: "기본 적립 적용" }
    ],
    bestPerformance: 300000,
    baseRate: 0.002,
    maxBenefit: "무제한",
    officialLink: "https://www.knbank.co.kr"
  },
  {
    id: 24,
    name: "수협 Real? Real! 카드",
    company: "수협",
    annualFee: 10000,
    image: "https://www.suhyup-bank.com/img/card/real.png",
    mainBenefits: ["국내 전 가맹점 1% 할인", "매분기 캐시백 추가 지급"],
    categories: ["모든가맹점", "심플"],
    isOwned: false,
    type: "신용",
    summary: "조건 없는 할인에 분기별 보너스 캐시백까지",
    statistics: {
      ageGroup: [
        { label: "20대", value: 10 },
        { label: "30대", value: 30 },
        { label: "40대", value: 40 },
        { label: "50대+", value: 20 }
      ],
      gender: { male: 55, female: 45 }
    },
    detailBenefits: [
      { title: "상시 할인", content: "전 가맹점 이용금액 1% 청구 할인", limit: "무제한" },
      { title: "보너스", content: "분기별 결제실적에 따라 추가 캐시백", limit: "연 최대 20만원" }
    ],
    benefitRules: [
      { category: "전체", rate: 0.01, type: 'DISCOUNT', limit: 999999999 }
    ],
    condition: "실적 조건 없음 (보너스는 실적 필요)",
    performanceTiers: [
      { min: 0, max: 999999999, rate: 0.01, desc: "무제한 할인" }
    ],
    bestPerformance: 0,
    baseRate: 0.01,
    maxBenefit: "연 20만원 + 무제한",
    officialLink: "·"
  },
  {
    id: 25,
    name: "현대카드 M3 Edition3",
    company: "현대카드",
    annualFee: 60000,
    image: "https://www.hyundaicard.com/img/card/card_m3_3_h.png",
    mainBenefits: ["업종별 0.5~6% 적립", "M포인트 사용처 무제한"],
    categories: ["적립", "프리미엄"],
    isOwned: false,
    type: "신용",
    summary: "포인트 적립의 끝판왕, 높은 연회비만큼 강력한 포인트",
    statistics: {
      ageGroup: [
        { label: "20대", value: 5 },
        { label: "30대", value: 45 },
        { label: "40대", value: 40 },
        { label: "50대+", value: 10 }
      ],
      gender: { male: 65, female: 35 }
    },
    detailBenefits: [
      { title: "강력 적립", content: "업종별 기본 대비 1.5배~2배 적립", limit: "무제한" },
      { title: "M포인트", content: "외식, 쇼핑, 자동차 구매 시 포인트 결제", limit: "제한없음" }
    ],
    benefitRules: [
      { category: "적립", rate: 0.03, type: 'SAVE', limit: 999999999 }
    ],
    condition: "전월 실적 50만원 이상",
    performanceTiers: [
      { min: 500000, max: 1000000, rate: 0.005, desc: "기본 적립" },
      { min: 2000000, max: 999999999, rate: 0.02, desc: "2배 적립" }
    ],
    bestPerformance: 2000000,
    baseRate: 0.005,
    maxBenefit: "무제한",
    officialLink: "https://www.hyundaicard.com"
  },
  {
    id: 26,
    name: "롯데카드 DIGI-LOCA Paris",
    company: "롯데카드",
    annualFee: 20000,
    image: "https://www.lottecard.co.kr/img/card/digi_paris.png",
    mainBenefits: ["국내외 모든 가맹점 0.7% 할인", "온라인 쇼핑 추가 할인"],
    categories: ["모든가맹점", "온라인쇼핑"],
    isOwned: false,
    type: "신용",
    summary: "디지털 라이프에 맞춘 심플한 전 영역 할인 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 35 },
        { label: "30대", value: 40 },
        { label: "40대", value: 15 },
        { label: "50대+", value: 10 }
      ],
      gender: { male: 40, female: 60 }
    },
    detailBenefits: [
      { title: "전 영역", content: "국내외 모든 가맹점 0.7% 결제일 할인", limit: "무제한" },
      { title: "온라인 특별", content: "주요 온라인 쇼핑몰 이용 시 추가 할인", limit: "월 1만원" }
    ],
    benefitRules: [
      { category: "기본", rate: 0.007, type: 'DISCOUNT', limit: 999999999 }
    ],
    condition: "실적 조건 없음",
    performanceTiers: [
      { min: 0, max: 999999999, rate: 0.007, desc: "조건 없는 기본 할인" }
    ],
    bestPerformance: 0,
    baseRate: 0.007,
    maxBenefit: "무제한",
    officialLink: "https://www.lottecard.co.kr"
  },
  {
    id: 27,
    name: "삼성카드 iD MOVE",
    company: "삼성카드",
    annualFee: 20000,
    image: "https://static11.samsungcard.com/wcms/home/scard/image/card/id_move.png",
    mainBenefits: ["교통/통신 10% 할인", "커피/배달앱 10% 할인"],
    categories: ["교통", "통신", "푸드"],
    isOwned: false,
    type: "신용",
    summary: "매일 이동하고 매일 배달시키는 직장인 맞춤 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 30 },
        { label: "30대", value: 50 },
        { label: "40대", value: 15 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 45, female: 55 }
    },
    detailBenefits: [
      { title: "이동 할인", content: "대중교통, 택시, 알뜰교통카드 앱 10% 할인", limit: "월 1.2만원" },
      { title: "생활 할인", content: "커피, 편의점, 배달앱 10% 할인", limit: "월 1.2만원" }
    ],
    benefitRules: [
      { category: "교통", rate: 0.1, type: 'DISCOUNT', limit: 12000 },
      { category: "생활", rate: 0.1, type: 'DISCOUNT', limit: 12000 }
    ],
    condition: "전월 실적 40만원 이상",
    performanceTiers: [
      { min: 400000, max: 800000, rate: 0.1, desc: "한도 1.2만원" },
      { min: 800000, max: 999999999, rate: 0.1, desc: "한도 2.4만원" }
    ],
    bestPerformance: 400000,
    baseRate: 0.1,
    maxBenefit: "44,000원",
    officialLink: "https://www.samsungcard.com"
  },
  {
    id: 28,
    name: "국민카드 위시올(WE:SH All) 카드",
    company: "국민카드",
    annualFee: 20000,
    image: "https://img1.kbcard.com/img/card/cms/wishall.png",
    mainBenefits: ["모든 가맹점 1% 할인", "자동이체 10% 할인"],
    categories: ["모든가맹점", "생활"],
    isOwned: false,
    type: "신용",
    summary: "어디서나 1% 할인받고 고정비는 더 크게 아끼는 카드",
    statistics: {
      ageGroup: [
        { label: "20대", value: 20 },
        { label: "30대", value: 40 },
        { label: "40대", value: 30 },
        { label: "50대+", value: 10 }
      ],
      gender: { male: 50, female: 50 }
    },
    detailBenefits: [
      { title: "어디서나", content: "국내 모든 가맹점 1% 청구 할인", limit: "무제한" },
      { title: "고정지출", content: "통신, 아파트관리비 등 자동이체 10% 할인", limit: "월 5천원" }
    ],
    benefitRules: [
      { category: "기본", rate: 0.01, type: 'DISCOUNT', limit: 999999999 }
    ],
    condition: "전월 실적 40만원 이상",
    performanceTiers: [
      { min: 400000, max: 999999999, rate: 0.01, desc: "실적 달성 시 혜택" }
    ],
    bestPerformance: 400000,
    baseRate: 0.01,
    maxBenefit: "무제한 + 5,000원",
    officialLink: "https://card.kbcard.com"
  },
  {
    id: 29,
    name: "하나카드 Any PLUS",
    company: "하나카드",
    annualFee: 15000,
    image: "https://www.hanacard.co.kr/img/card/anyplus.png",
    mainBenefits: ["국내 0.7% 할인", "온라인 쇼핑 1.7% 할인"],
    categories: ["모든가맹점", "온라인쇼핑"],
    isOwned: false,
    type: "신용",
    summary: "온라인 쇼핑을 즐기는 분들에게 유리한 무실적 할인형",
    statistics: {
      ageGroup: [
        { label: "20대", value: 40 },
        { label: "30대", value: 40 },
        { label: "40대", value: 15 },
        { label: "50대+", value: 5 }
      ],
      gender: { male: 38, female: 62 }
    },
    detailBenefits: [
      { title: "국내 할인", content: "국내 가맹점 어디서나 0.7% 할인", limit: "무제한" },
      { title: "온라인 쇼핑", content: "국내 온라인 가맹점 1.7% 할인", limit: "월 10만원 한도" }
    ],
    benefitRules: [
      { category: "온라인쇼핑", rate: 0.017, type: 'DISCOUNT', limit: 100000 }
    ],
    condition: "실적 조건 없음",
    performanceTiers: [
      { min: 0, max: 999999999, rate: 0.007, desc: "실적 무관 상시 할인" }
    ],
    bestPerformance: 0,
    baseRate: 0.007,
    maxBenefit: "10만원 + 무제한",
    officialLink: "https://www.hanacard.co.kr"
  },
  {
    id: 30,
    name: "농협카드 zgm.고향으로",
    company: "농협카드",
    annualFee: 12000,
    image: "https://card.nonghyup.com/img/card/zgm_home.png",
    mainBenefits: ["고향사랑기부 시 혜택", "주말 전 가맹점 1% 적립"],
    categories: ["지역활성", "적립"],
    isOwned: false,
    type: "신용",
    summary: "지역 경제 활성화 기여와 주말 적립을 동시에",
    statistics: {
      ageGroup: [
        { label: "20대", value: 10 },
        { label: "30대", value: 20 },
        { label: "40대", value: 40 },
        { label: "50대+", value: 30 }
      ],
      gender: { male: 55, female: 45 }
    },
    detailBenefits: [
      { title: "주말 적립", content: "주말 전 국내 가맹점 1.7% NH포인트 적립", limit: "월 5만P" },
      { title: "기부 혜택", content: "고향사랑기부금 참여 시 우대 서비스", limit: "별도 적용" }
    ],
    benefitRules: [
      { category: "주말", rate: 0.017, type: 'SAVE', limit: 50000 }
    ],
    condition: "전월 실적 40만원 이상",
    performanceTiers: [
      { min: 400000, max: 999999999, rate: 0.017, desc: "주말 적립 한도 적용" }
    ],
    bestPerformance: 400000,
    baseRate: 0.005,
    maxBenefit: "50,000P",
    officialLink: "https://card.nonghyup.com"
  }
];