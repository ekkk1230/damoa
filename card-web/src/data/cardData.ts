import type { Card } from '../type/Card';

export const CARD_LIST: Card[] = [
  {
    id: 1,
    name: "신한카드 Mr.Life",
    company: "신한카드",
    type: "신용",
    annualFee: 15000,
    image: "https://placehold.co/100x64?text=SHINHAN",
    mainBenefits: ["공과금 10% 할인", "편의점 10% 할인"],
    categories: ["생활", "편의점", "쇼핑", "공과금"],
    isOwned: true,
    summary: "자취생의 구원자, 월납요금부터 편의점까지 빈틈없는 할인",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 5만원 할인",
    officialLink: "https://www.shinhancard.com",
    detailBenefits: [
      { title: "공과금", content: "전기/도시가스 요금 10% 할인", limit: "월 최대 1만원" },
      { title: "타임할인", content: "오후 9시~오전 9시 온라인 쇼핑 10% 할인", limit: "월 최대 1만원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 45 }, { label: "30대", value: 35 }, { label: "40대", value: 15 }, { label: "50대+", value: 5 }],
      gender: { male: 42, female: 58 }
    }
  },
  {
    id: 2,
    name: "삼성 taptap O",
    company: "삼성카드",
    type: "신용",
    annualFee: 10000,
    image: "https://placehold.co/100x64?text=SAMSUNG",
    mainBenefits: ["스타벅스 50% 할인", "대중교통 10% 할인"],
    categories: ["카페", "교통", "쇼핑", "영화"],
    isOwned: true,
    summary: "내 맘대로 고르는 라이프스타일 패키지",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 3만원 할인",
    officialLink: "https://www.samsungcard.com",
    detailBenefits: [
      { title: "커피", content: "스타벅스 50% 또는 10대 커피 전문점 30% 할인", limit: "월 1만원" },
      { title: "쇼핑", content: "오픈마켓/소셜커머스/트렌디숍 7% 할인", limit: "월 5천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 50 }, { label: "30대", value: 30 }, { label: "40대", value: 15 }, { label: "50대+", value: 5 }],
      gender: { male: 38, female: 62 }
    }
  },
  {
    id: 3,
    name: "현대 M BOOST",
    company: "현대카드",
    type: "신용",
    annualFee: 30000,
    image: "https://placehold.co/100x64?text=HYUNDAI",
    mainBenefits: ["온라인 페이 5% 적립", "배달앱 5% 적립"],
    categories: ["온라인쇼핑", "배달", "편의점"],
    isOwned: false,
    summary: "쓰면 쓸수록 강력해지는 포인트 적립의 끝판왕",
    condition: "전월 실적 50만원 이상",
    maxBenefit: "한도 없는 M포인트 적립",
    officialLink: "https://www.hyundaicard.com",
    detailBenefits: [
      { title: "적립", content: "업종별 0.5~3% 기본 적립", limit: "무제한" },
      { title: "보너스", content: "당월 이용금액 100만원 이상 시 1만 포인트 보너스", limit: "월 1회" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 25 }, { label: "30대", value: 45 }, { label: "40대", value: 20 }, { label: "50대+", value: 10 }],
      gender: { male: 60, female: 40 }
    }
  },
  {
    id: 4,
    name: "KB 다담카드",
    company: "KB국민카드",
    type: "하이브리드",
    annualFee: 15000,
    image: "https://placehold.co/100x64?text=KB",
    mainBenefits: ["대중교통 10% 적립", "이동통신 10% 적립"],
    categories: ["통신", "교통", "교육", "주유"],
    isOwned: false,
    summary: "다양한 영역에서 꼼꼼하게 담아내는 포인트 혜택",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 4만원 적립",
    officialLink: "https://card.kbcard.com",
    detailBenefits: [
      { title: "대중교통", content: "버스/지하철 10% 포인트리 적립", limit: "월 2천점" },
      { title: "주유", content: "SK주유소 리터당 60원 적립", limit: "월 20만원 한도" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 20 }, { label: "30대", value: 35 }, { label: "40대", value: 30 }, { label: "50대+", value: 15 }],
      gender: { male: 55, female: 45 }
    }
  },
  {
    id: 5,
    name: "롯데 LIKIT FUN+",
    company: "롯데카드",
    type: "신용",
    annualFee: 10000,
    image: "https://placehold.co/100x64?text=LOTTE",
    mainBenefits: ["영화 50% 할인", "카페 50% 할인"],
    categories: ["영화", "카페", "배달", "교통"],
    isOwned: false,
    summary: "즐거움에 진심인 당신을 위한 고율 할인 카드",
    condition: "전월 실적 40만원 이상",
    maxBenefit: "월 최대 3.5만원 할인",
    officialLink: "https://www.lottecard.co.kr",
    detailBenefits: [
      { title: "커피", content: "스타벅스/엔제리너스 50% 결제일 할인", limit: "월 1만원" },
      { title: "영화", content: "롯데시네마/CGV 50% 결제일 할인", limit: "월 1만원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 55 }, { label: "30대", value: 25 }, { label: "40대", value: 15 }, { label: "50대+", value: 5 }],
      gender: { male: 40, female: 60 }
    }
  },
  {
    id: 6,
    name: "우리카드 카드의정석 Every 1",
    company: "우리카드",
    type: "신용",
    annualFee: 12000,
    image: "https://placehold.co/100x64?text=WOORI",
    mainBenefits: ["모든 가맹점 1% 할인", "온라인 간편결제 할인"],
    categories: ["쇼핑", "카페", "영화"],
    isOwned: false,
    summary: "할인의 정석을 보여주는 깔끔한 무실적 카드",
    condition: "전월 실적 없음",
    maxBenefit: "한도 없는 무제한 할인",
    officialLink: "https://pc.wooricard.com",
    detailBenefits: [
      { title: "기본", content: "국내외 모든 가맹점 1% 청구할인", limit: "한도 없음" },
      { title: "추가", content: "온라인 간편결제 이용 시 추가 혜택", limit: "조건부 제공" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 30 }, { label: "30대", value: 35 }, { label: "40대", value: 25 }, { label: "50대+", value: 10 }],
      gender: { male: 48, female: 52 }
    }
  },
  {
    id: 7,
    name: "하나 Any PLUS",
    company: "하나카드",
    type: "신용",
    annualFee: 15000,
    image: "https://placehold.co/100x64?text=HANA",
    mainBenefits: ["국내 가맹점 0.7% 할인", "온라인 쇼핑 1.7% 할인"],
    categories: ["적립", "온라인쇼핑", "무실적"],
    isOwned: false,
    summary: "실적 조건 없이 언제 어디서나 플러스 할인",
    condition: "실적 조건 없음",
    maxBenefit: "한도 없는 기본 할인",
    officialLink: "https://www.hanacard.co.kr",
    detailBenefits: [
      { title: "기본", content: "국내 가맹점 0.7% 결제일 할인", limit: "한도 없음" },
      { title: "온라인", content: "국내 온라인 가맹점 1.7% 할인", limit: "월 10만원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 35 }, { label: "30대", value: 40 }, { label: "40대", value: 20 }, { label: "50대+", value: 5 }],
      gender: { male: 45, female: 55 }
    }
  },
  {
    id: 8,
    name: "NH 올바른 FLEX",
    company: "NH농협카드",
    type: "신용",
    annualFee: 12000,
    image: "https://placehold.co/100x64?text=NH",
    mainBenefits: ["스타벅스 50% 할인", "배달앱 10% 할인"],
    categories: ["카페", "배달", "넷플릭스", "유튜브"],
    isOwned: false,
    summary: "디지털 라이프를 즐기는 MZ세대를 위한 플렉스",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 3.2만원 할인",
    officialLink: "https://card.nonghyup.com",
    detailBenefits: [
      { title: "스트리밍", content: "넷플릭스/유튜브 20% 할인", limit: "월 5천원" },
      { title: "커피", content: "스타벅스 사이렌오더 50% 할인", limit: "일 1회" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 60 }, { label: "30대", value: 25 }, { label: "40대", value: 10 }, { label: "50대+", value: 5 }],
      gender: { male: 35, female: 65 }
    }
  },
  {
    id: 9,
    name: "IBK 무민카드",
    company: "IBK기업은행",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=IBK",
    mainBenefits: ["전통시장 10% 할인", "소셜커머스 20% 할인"],
    categories: ["쇼핑", "전통시장", "생활"],
    isOwned: false,
    summary: "귀여운 디자인에 담긴 알뜰한 생활 밀착 혜택",
    condition: "전월 실적 20만원 이상",
    maxBenefit: "월 최대 1.5만원 할인",
    officialLink: "https://www.ibk.co.kr",
    detailBenefits: [
      { title: "쇼핑", content: "쿠팡/티몬/위메프 20% 할인", limit: "월 2회" },
      { title: "생활", content: "전통시장 이용금액 10% 할인", limit: "월 1만원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 40 }, { label: "30대", value: 30 }, { label: "40대", value: 20 }, { label: "50대+", value: 10 }],
      gender: { male: 30, female: 70 }
    }
  },
  {
    id: 10,
    name: "BC 바로 클리어 플러스",
    company: "BC카드",
    type: "신용",
    annualFee: 5000,
    image: "https://placehold.co/100x64?text=BC",
    mainBenefits: ["점심시간 7% 할인", "배달앱 7% 할인"],
    categories: ["식비", "배달", "생활"],
    isOwned: false,
    summary: "직장인의 점심값 부담을 덜어주는 가성비 카드",
    condition: "전월 실적 15만원 이상",
    maxBenefit: "월 최대 1만원 할인",
    officialLink: "https://www.bccard.com",
    detailBenefits: [
      { title: "점심", content: "전국 식당 업종 7% 할인 (11시~14시)", limit: "월 1만원" },
      { title: "교통", content: "버스/지하철 7% 할인", limit: "월 1만원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 25 }, { label: "30대", value: 45 }, { label: "40대", value: 20 }, { label: "50대+", value: 10 }],
      gender: { male: 52, female: 48 }
    }
  },
  {
    id: 11,
    name: "현대카드 ZERO Edition2",
    company: "현대카드",
    type: "신용",
    annualFee: 10000,
    image: "https://placehold.co/100x64?text=HYUNDAI",
    mainBenefits: ["모든 가맹점 0.7% 할인", "생활 필수영역 1.5% 할인"],
    categories: ["무실적", "마트", "편의점"],
    isOwned: false,
    summary: "실적 조건도 한도 제한도 없는 0순위 서브 카드",
    condition: "실적 조건 없음",
    maxBenefit: "한도 없는 무제한 할인",
    officialLink: "https://www.hyundaicard.com",
    detailBenefits: [
      { title: "기본", content: "국내외 가맹점 0.7% 할인", limit: "무제한" },
      { title: "생활", content: "온라인 쇼핑/마트/편의점 1.5% 할인", limit: "무제한" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 30 }, { label: "30대", value: 35 }, { label: "40대", value: 25 }, { label: "50대+", value: 10 }],
      gender: { male: 50, female: 50 }
    }
  },
  {
    id: 12,
    name: "삼성카드 6 v4",
    company: "삼성카드",
    type: "신용",
    annualFee: 20000,
    image: "https://placehold.co/100x64?text=SAMSUNG",
    mainBenefits: ["주유 리터당 최대 90원 할인", "자동차 정비 서비스"],
    categories: ["주유", "자동차", "쇼핑"],
    isOwned: false,
    summary: "드라이버를 위한 주유와 차량 관리 최적화 혜택",
    condition: "전월 실적 50만원 이상",
    maxBenefit: "월 최대 3만원 할인",
    officialLink: "https://www.samsungcard.com",
    detailBenefits: [
      { title: "주유", content: "모든 주유소 리터당 70~90원 할인", limit: "월 30만원 한도" },
      { title: "정비", content: "닥터카 서비스 (엔진오일 교환 등)", limit: "연 1회" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 10 }, { label: "30대", value: 40 }, { label: "40대", value: 35 }, { label: "50대+", value: 15 }],
      gender: { male: 75, female: 25 }
    }
  },
  {
    id: 13,
    name: "KB 노리2 체크",
    company: "KB국민카드",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=KB",
    mainBenefits: ["스타벅스 10% 할인", "구글플레이 10% 할인"],
    categories: ["카페", "게임", "통신"],
    isOwned: false,
    summary: "대학생과 사회초년생의 필수 체크카드",
    condition: "전월 실적 20만원 이상",
    maxBenefit: "월 최대 2만원 할인",
    officialLink: "https://card.kbcard.com",
    detailBenefits: [
      { title: "카페", content: "스타벅스 10% 할인", limit: "회당 1천원" },
      { title: "게임", content: "구글플레이/앱스토어 10% 할인", limit: "월 2천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 80 }, { label: "30대", value: 15 }, { label: "40대", value: 3 }, { label: "50대+", value: 2 }],
      gender: { male: 45, female: 55 }
    }
  },
  {
    id: 14,
    name: "롯데 Loca 365",
    company: "롯데카드",
    type: "신용",
    annualFee: 20000,
    image: "https://placehold.co/100x64?text=LOTTE",
    mainBenefits: ["아파트관리비 10% 할인", "도시가스/전기 10% 할인"],
    categories: ["공과금", "통신", "보험"],
    isOwned: false,
    summary: "숨만 쉬어도 나가는 고정 지출을 잡아주는 생활비 카드",
    condition: "전월 실적 50만원 이상",
    maxBenefit: "월 최대 3.5만원 할인",
    officialLink: "https://www.lottecard.co.kr",
    detailBenefits: [
      { title: "관리비", content: "아파트 관리비 10% 할인", limit: "월 5천원" },
      { title: "보험", content: "생명/손해보험료 10% 할인", limit: "월 5천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 5 }, { label: "30대", value: 35 }, { label: "40대", value: 45 }, { label: "50대+", value: 15 }],
      gender: { male: 40, female: 60 }
    }
  },
  {
    id: 15,
    name: "하나 Mile 1.8",
    company: "하나카드",
    type: "신용",
    annualFee: 45000,
    image: "https://placehold.co/100x64?text=HANA",
    mainBenefits: ["대한항공 1.8 마일리지 적립", "전 세계 공항 라운지"],
    categories: ["항공", "여행", "해외"],
    isOwned: false,
    summary: "여행을 즐기는 프로 여행러를 위한 고율 마일리지 카드",
    condition: "전월 실적 50만원 이상",
    maxBenefit: "마일리지 무제한 적립",
    officialLink: "https://www.hanacard.co.kr",
    detailBenefits: [
      { title: "항공", content: "이용금액 1,500원당 1.8~2.0 마일 적립", limit: "무제한" },
      { title: "라운지", content: "전 세계 공항 라운지 무료 이용", limit: "연 2회" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 20 }, { label: "30대", value: 50 }, { label: "40대", value: 25 }, { label: "50대+", value: 5 }],
      gender: { male: 48, female: 52 }
    }
  },
  {
    id: 16,
    name: "우리 010PAY 체크",
    company: "우리카드",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=WOORI",
    mainBenefits: ["결제 시 랜덤 적립", "대중교통 10% 적립"],
    categories: ["적립", "교통", "간편결제"],
    isOwned: false,
    summary: "결제할 때마다 터지는 잭팟, 재미있는 적립 라이프",
    condition: "실적 조건 없음",
    maxBenefit: "월 최대 1만 포인트 적립",
    officialLink: "https://pc.wooricard.com",
    detailBenefits: [
      { title: "적립", content: "결제 시 최대 10% 랜덤 포인트 적립", limit: "회당 1만점" },
      { title: "응모", content: "매월 10일 '응또' 리워드 제공", limit: "월 1회" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 70 }, { label: "30대", value: 20 }, { label: "40대", value: 8 }, { label: "50대+", value: 2 }],
      gender: { male: 55, female: 45 }
    }
  },
  {
    id: 17,
    name: "삼성카드 iD ON",
    company: "삼성카드",
    type: "신용",
    annualFee: 20000,
    image: "https://placehold.co/100x64?text=SAMSUNG",
    mainBenefits: ["온라인 간편결제 3% 할인", "많이 쓰는 영역 30% 할인"],
    categories: ["간편결제", "배달", "쇼핑"],
    isOwned: false,
    summary: "내 소비 패턴을 알아서 분석해 가장 많이 쓴 영역 할인",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 4만원 할인",
    officialLink: "https://www.samsungcard.com",
    detailBenefits: [
      { title: "자동맞춤", content: "커피/해외/배달앱 중 가장 많이 쓴 영역 30% 할인", limit: "월 1만원" },
      { title: "온라인", content: "삼성페이/네이버페이 등 간편결제 3% 할인", limit: "월 1만원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 40 }, { label: "30대", value: 40 }, { label: "40대", value: 15 }, { label: "50대+", value: 5 }],
      gender: { male: 35, female: 65 }
    }
  },
  {
    id: 18,
    name: "현대 네이버 현대카드",
    company: "현대카드",
    type: "신용",
    annualFee: 10000,
    image: "https://placehold.co/100x64?text=HYUNDAI",
    mainBenefits: ["네이버페이 최대 5% 적립", "멤버십 무료 이용권"],
    categories: ["적립", "온라인쇼핑", "네이버페이"],
    isOwned: false,
    summary: "네이버 쇼핑 헤비유저라면 고민 말고 이 카드",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 2만 포인트 적립",
    officialLink: "https://www.hyundaicard.com",
    detailBenefits: [
      { title: "네이버", content: "네이버플러스 멤버십 적립 대상 5% 적립", limit: "월 20만원 한도" },
      { title: "멤버십", content: "네이버플러스 멤버십 매월 무료 이용권", limit: "월 1회" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 35 }, { label: "30대", value: 45 }, { label: "40대", value: 15 }, { label: "50대+", value: 5 }],
      gender: { male: 42, female: 58 }
    }
  },
  {
    id: 19,
    name: "KB 탄탄대로 마트",
    company: "KB국민카드",
    type: "신용",
    annualFee: 15000,
    image: "https://placehold.co/100x64?text=KB",
    mainBenefits: ["대형마트 15% 할인", "주유 리터당 100원 할인"],
    categories: ["마트", "주유", "쇼핑"],
    isOwned: false,
    summary: "주말 대형마트 장보기와 주유에 최적화된 가족 카드",
    condition: "전월 실적 40만원 이상",
    maxBenefit: "월 최대 5만원 할인",
    officialLink: "https://card.kbcard.com",
    detailBenefits: [
      { title: "마트", content: "이마트/홈플러스/롯데마트 15% 할인", limit: "월 2만원" },
      { title: "주유", content: "SK/GS주유소 리터당 100원 할인", limit: "월 20만원 한도" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 5 }, { label: "30대", value: 25 }, { label: "40대", value: 50 }, { label: "50대+", value: 20 }],
      gender: { male: 45, female: 55 }
    }
  },
  {
    id: 20,
    name: "신한카드 Air 1.5",
    company: "신한카드",
    type: "신용",
    annualFee: 45000,
    image: "https://placehold.co/100x64?text=SHINHAN",
    mainBenefits: ["아시아나 1.5마일 적립", "해외 더블 적립"],
    categories: ["항공", "여행", "해외"],
    isOwned: false,
    summary: "마일리지 적립 가성비의 전설, 아시아나형 추천",
    condition: "전월 실적 50만원 이상",
    maxBenefit: "마일리지 무제한 적립",
    officialLink: "https://www.shinhancard.com",
    detailBenefits: [
      { title: "마일리지", content: "국내 이용금액 1,000원당 1.5마일 적립", limit: "무제한" },
      { title: "해외", content: "해외 이용금액 1,000원당 3.0마일 적립", limit: "월 2천마일 한도" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 15 }, { label: "30대", value: 45 }, { label: "40대", value: 30 }, { label: "50대+", value: 10 }],
      gender: { male: 50, female: 50 }
    }
  },
  {
    id: 21,
    name: "롯데 카카오뱅크 카드",
    company: "롯데카드",
    type: "신용",
    annualFee: 15000,
    image: "https://placehold.co/100x64?text=LOTTE",
    mainBenefits: ["스트리밍 50% 할인", "배달앱 5% 할인"],
    categories: ["배달", "넷플릭스", "유튜브"],
    isOwned: false,
    summary: "카카오뱅크와 롯데카드가 만난 디지털 혜택 모음집",
    condition: "전월 실적 40만원 이상",
    maxBenefit: "월 최대 3만원 할인",
    officialLink: "https://www.lottecard.co.kr",
    detailBenefits: [
      { title: "디지털", content: "넷플릭스/유튜브/왓챠 50% 할인", limit: "월 5천원" },
      { title: "배달", content: "배달의민족/요기요 5% 할인", limit: "월 5천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 65 }, { label: "30대", value: 25 }, { label: "40대", value: 8 }, { label: "50대+", value: 2 }],
      gender: { male: 40, female: 60 }
    }
  },
  {
    id: 22,
    name: "우리 위비ON",
    company: "우리카드",
    type: "신용",
    annualFee: 12000,
    image: "https://placehold.co/100x64?text=WOORI",
    mainBenefits: ["온라인 쇼핑 10% 할인", "해외 가맹점 3% 적립"],
    categories: ["쇼핑", "해외", "적립"],
    isOwned: false,
    summary: "온라인 쇼핑부터 해외 직구까지 스마트한 소비",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 4만원 적립/할인",
    officialLink: "https://pc.wooricard.com",
    detailBenefits: [
      { title: "쇼핑", content: "국내 모든 온라인 쇼핑 10% 할인", limit: "월 2만원" },
      { title: "해외", content: "해외 결제 및 직구 3% 적립", limit: "월 5만점" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 30 }, { label: "30대", value: 45 }, { label: "40대", value: 20 }, { label: "50대+", value: 5 }],
      gender: { male: 45, female: 55 }
    }
  },
  {
    id: 23,
    name: "하나 1Q Living",
    company: "하나카드",
    type: "신용",
    annualFee: 10000,
    image: "https://placehold.co/100x64?text=HANA",
    mainBenefits: ["주유 리터당 100원 적립", "학원/병원 적립"],
    categories: ["주유", "병원", "교육"],
    isOwned: false,
    summary: "주거와 생활 핵심 영역에서 1Q에 적립 완료",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 5만 머니 적립",
    officialLink: "https://www.hanacard.co.kr",
    detailBenefits: [
      { title: "주유", content: "SK/GS/S-OIL 주유 시 리터당 100원 적립", limit: "월 20만원 한도" },
      { title: "교육", content: "학원 업종 이용 시 10% 적립", limit: "월 1만 머니" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 5 }, { label: "30대", value: 30 }, { label: "40대", value: 50 }, { label: "50대+", value: 15 }],
      gender: { male: 42, female: 58 }
    }
  },
  {
    id: 24,
    name: "NH NEW HAVE",
    company: "NH농협카드",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=NH",
    mainBenefits: ["모든 가맹점 0.7% 적립", "해외 가맹점 1% 적립"],
    categories: ["무실적", "적립", "해외"],
    isOwned: false,
    summary: "어디서나 고민 없이 결제하는 무실적 적립 카드",
    condition: "실적 조건 없음",
    maxBenefit: "한도 없는 무제한 적립",
    officialLink: "https://card.nonghyup.com",
    detailBenefits: [
      { title: "기본", content: "국내외 모든 가맹점 0.7% 적립", limit: "무제한" },
      { title: "추가", content: "자주 쓰는 영역은 3배(2.1%) 적립", limit: "월 1만점" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 20 }, { label: "30대", value: 35 }, { label: "40대", value: 30 }, { label: "50대+", value: 15 }],
      gender: { male: 50, female: 50 }
    }
  },
  {
    id: 25,
    name: "IBK 일상의 기쁨",
    company: "IBK기업은행",
    type: "신용",
    annualFee: 10000,
    image: "https://placehold.co/100x64?text=IBK",
    mainBenefits: ["주요 놀이공원 50% 할인", "카페 20% 할인"],
    categories: ["카페", "여가", "생활"],
    isOwned: false,
    summary: "매일매일 즐거운 소소한 할인 혜택의 즐거움",
    condition: "전월 실적 50만원 이상",
    maxBenefit: "월 최대 2.5만원 할인",
    officialLink: "https://www.ibk.co.kr",
    detailBenefits: [
      { title: "카페", content: "스타벅스/커피빈 20% 할인", limit: "일 1회" },
      { title: "영화", content: "CGV/롯데시네마 1만원 할인", limit: "월 1회" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 45 }, { label: "30대", value: 30 }, { label: "40대", value: 15 }, { label: "50대+", value: 10 }],
      gender: { male: 35, female: 65 }
    }
  },
  {
    id: 26,
    name: "삼성 iD MOVE",
    company: "삼성카드",
    type: "신용",
    annualFee: 20000,
    image: "https://placehold.co/100x64?text=SAMSUNG",
    mainBenefits: ["대중교통 10% 할인", "이동통신 10% 할인"],
    categories: ["교통", "통신", "보험"],
    isOwned: false,
    summary: "매일 반복되는 이동과 통신비 부담을 덜어주는 무버",
    condition: "전월 실적 40만원 이상",
    maxBenefit: "월 최대 3만원 할인",
    officialLink: "https://www.samsungcard.com",
    detailBenefits: [
      { title: "교통", content: "버스/지하철/택시 10% 할인", limit: "월 1만원" },
      { title: "통신", content: "이동통신 요금 10% 결제일 할인", limit: "월 5천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 35 }, { label: "40대", value: 20 }, { label: "30대", value: 40 }, { label: "50대+", value: 5 }],
      gender: { male: 42, female: 58 }
    }
  },
  {
    id: 27,
    name: "현대 코스트코 리워드",
    company: "현대카드",
    type: "신용",
    annualFee: 10000,
    image: "https://placehold.co/100x64?text=HYUNDAI",
    mainBenefits: ["코스트코 포인트 최대 3% 적립", "모든 가맹점 1% 적립"],
    categories: ["마트", "적립", "코스트코"],
    isOwned: false,
    summary: "코스트코 쇼퍼라면 필수로 챙겨야 할 리워드 카드",
    condition: "전월 실적 50만원 이상",
    maxBenefit: "연 최대 50만 포인트 적립",
    officialLink: "https://www.hyundaicard.com",
    detailBenefits: [
      { title: "코스트코", content: "코스트코 매장 및 온라인몰 3% 적립", limit: "연 50만점" },
      { title: "기본", content: "모든 가맹점 1% 적립", limit: "무제한" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 10 }, { label: "30대", value: 40 }, { label: "40대", value: 40 }, { label: "50대+", value: 10 }],
      gender: { male: 55, female: 45 }
    }
  },
  {
    id: 28,
    name: "KB 톡톡 with 넷플릭스",
    company: "KB국민카드",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=KB",
    mainBenefits: ["넷플릭스 20% 할인", "간편결제 10% 할인"],
    categories: ["넷플릭스", "유튜브", "간편결제"],
    isOwned: false,
    summary: "구독 서비스와 간편결제에 올인한 디지털 특화 카드",
    condition: "전월 실적 20만원 이상",
    maxBenefit: "월 최대 2만원 할인",
    officialLink: "https://card.kbcard.com",
    detailBenefits: [
      { title: "구독", content: "넷플릭스/유튜브 프리미엄 20% 할인", limit: "월 1만원" },
      { title: "페이", content: "KB Pay/네이버페이 10% 할인", limit: "월 1만원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 75 }, { label: "30대", value: 20 }, { label: "40대", value: 4 }, { label: "50대+", value: 1 }],
      gender: { male: 38, female: 62 }
    }
  },
  {
    id: 29,
    name: "신한카드 YaY",
    company: "신한카드",
    type: "하이브리드",
    annualFee: 23000,
    image: "https://placehold.co/100x64?text=SHINHAN",
    mainBenefits: ["배달앱 10% 적립", "홈테인먼트 적립"],
    categories: ["배달", "생활", "여가"],
    isOwned: false,
    summary: "넷플릭스와 배달음식, 집콕 라이프의 완성",
    condition: "전월 실적 50만원 이상",
    maxBenefit: "월 최대 3만 포인트 적립",
    officialLink: "https://www.shinhancard.com",
    detailBenefits: [
      { title: "홈테인먼트", content: "넷플릭스/유튜브/왓챠 10% 적립", limit: "월 1만점" },
      { title: "배달앱", content: "배달의민족/요기요 10% 적립", limit: "월 1만점" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 60 }, { label: "30대", value: 30 }, { label: "40대", value: 8 }, { label: "50대+", value: 2 }],
      gender: { male: 40, female: 60 }
    }
  },
  {
    id: 30,
    name: "우리 카드의정석 카드의정석 COOKIE CHECK",
    company: "우리카드",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=WOORI",
    mainBenefits: ["온라인 쇼핑 2천원 캐시백", "공항 라운지 무료 이용"],
    categories: ["쇼핑", "여행", "편의점"],
    isOwned: false,
    summary: "체크카드로 누리는 전 세계 공항 라운지 혜택",
    condition: "전월 실적 20만원 이상",
    maxBenefit: "월 최대 2만원 캐시백",
    officialLink: "https://pc.wooricard.com",
    detailBenefits: [
      { title: "쇼핑", content: "11번가/G마켓/쿠팡 2천원 캐시백", limit: "월 3회" },
      { title: "라운지", content: "전 세계 공항 라운지 무료 이용 (더라운지멤버스)", limit: "월 1회, 연 2회" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 70 }, { label: "30대", value: 20 }, { label: "40대", value: 8 }, { label: "50대+", value: 2 }],
      gender: { male: 30, female: 70 }
    }
  },
  {
    id: 31,
    name: "신협 CU Big Life",
    company: "신협",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=CU",
    mainBenefits: ["편의점 10% 캐시백", "대형마트 5% 캐시백"],
    categories: ["생활", "편의점", "마트"],
    isOwned: false,
    summary: "지역 사회와 함께하는 신협의 생활 밀착형 체크카드",
    condition: "전월 실적 20만원 이상",
    maxBenefit: "월 최대 1.5만원 캐시백",
    officialLink: "https://www.cu.co.kr",
    detailBenefits: [
      { title: "편의점", content: "CU 편의점 결제 시 10% 캐시백", limit: "월 5천원" },
      { title: "마트", content: "대형마트(이마트, 홈플러스 등) 5% 캐시백", limit: "월 5천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 15 }, { label: "30대", value: 25 }, { label: "40대", value: 40 }, { label: "50대+", value: 20 }],
      gender: { male: 48, female: 52 }
    }
  },
  {
    id: 32,
    name: "수협 Real 체크카드",
    company: "수협",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=SUHYUP",
    mainBenefits: ["모든 가맹점 0.2% 적립", "음식점/커피 0.5% 적립"],
    categories: ["무실적", "식비", "카페"],
    isOwned: false,
    summary: "조건 없이 쌓이는 수협의 리얼 적립 라이프",
    condition: "실적 조건 없음",
    maxBenefit: "한도 없는 무제한 적립",
    officialLink: "https://www.suhyup-bank.com",
    detailBenefits: [
      { title: "기본", content: "국내 전 가맹점 이용금액 0.2% 적립", limit: "무제한" },
      { title: "특별", content: "음식점 및 커피전문점 0.5% 적립", limit: "무제한" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 20 }, { label: "30대", value: 30 }, { label: "40대", value: 30 }, { label: "50대+", value: 20 }],
      gender: { male: 50, female: 50 }
    }
  },
  {
    id: 33,
    name: "토스뱅크 외화통장 체크",
    company: "토스뱅크",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=TOSS",
    mainBenefits: ["해외 결제 수수료 면제", "해외 ATM 출금 면제"],
    categories: ["여행", "해외", "무실적"],
    isOwned: false,
    summary: "환전부터 결제까지, 해외 여행의 새로운 기준",
    condition: "실적 조건 없음",
    maxBenefit: "해외 수수료 전액 면제",
    officialLink: "https://www.toss.im",
    detailBenefits: [
      { title: "해외결제", content: "해외 가맹점 이용 수수료 100% 면제", limit: "무제한" },
      { title: "ATM", content: "해외 ATM 출금 수수료 면제", limit: "무제한" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 55 }, { label: "30대", value: 35 }, { label: "40대", value: 8 }, { label: "50대+", value: 2 }],
      gender: { male: 45, female: 55 }
    }
  },
  {
    id: 34,
    name: "카카오뱅크 프렌즈 체크",
    company: "카카오뱅크",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=KAKAO",
    mainBenefits: ["주말 모든 가맹점 0.4% 적립", "배달/커피 캐시백"],
    categories: ["생활", "카페", "배달"],
    isOwned: false,
    summary: "귀여운 라이언과 함께 받는 매일의 캐시백",
    condition: "전월 실적 30만원 이상 (시즌별 상이)",
    maxBenefit: "월 최대 3.5만원 캐시백",
    officialLink: "https://www.kakaobank.com",
    detailBenefits: [
      { title: "기본", content: "평일 0.2%, 주말/공휴일 0.4% 적립", limit: "무제한" },
      { title: "시즌", content: "넷플릭스/배달의민족 등 추가 캐시백", limit: "영역별 다름" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 48 }, { label: "30대", value: 32 }, { label: "40대", value: 15 }, { label: "50대+", value: 5 }],
      gender: { male: 40, female: 60 }
    }
  },
  {
    id: 35,
    name: "새마을금고 꿀카드",
    company: "새마을금고",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=MG",
    mainBenefits: ["쿠팡 2천원 캐시백", "어학시험 2천원 캐시백"],
    categories: ["쇼핑", "교육", "카페"],
    isOwned: false,
    summary: "2030 세대의 꿀같은 혜택을 모은 MG 체크",
    condition: "전월 실적 20만원 이상",
    maxBenefit: "월 최대 1.2만원 캐시백",
    officialLink: "https://www.kfcc.co.kr",
    detailBenefits: [
      { title: "쇼핑", content: "쿠팡/티몬/위메프 2천원 캐시백", limit: "월 4회" },
      { title: "교육", content: "토익/JPT 등 어학시험 2천원 캐시백", limit: "월 2회" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 65 }, { label: "30대", value: 20 }, { label: "40대", value: 10 }, { label: "50대+", value: 5 }],
      gender: { male: 35, female: 65 }
    }
  },
  {
    id: 36,
    name: "우체국 영리한 체크",
    company: "우체국",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=POST",
    mainBenefits: ["편의점 10% 캐시백", "영화관 10% 캐시백"],
    categories: ["생활", "편의점", "영화"],
    isOwned: false,
    summary: "영리한 소비자를 위한 우체국의 대표 체크카드",
    condition: "전월 실적 20만원 이상",
    maxBenefit: "월 최대 1.1만원 캐시백",
    officialLink: "https://www.epostbank.go.kr",
    detailBenefits: [
      { title: "문화", content: "CGV/메가박스 10% 캐시백", limit: "월 3천원" },
      { title: "생활", content: "GS25/CU 10% 캐시백", limit: "월 2천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 70 }, { label: "30대", value: 15 }, { label: "40대", value: 10 }, { label: "50대+", value: 5 }],
      gender: { male: 42, female: 58 }
    }
  },
  {
    id: 37,
    name: "케이뱅크 MY 체크카드",
    company: "케이뱅크",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=KBANK",
    mainBenefits: ["편의점/카페 500원 캐시백", "모든 은행 ATM 무료"],
    categories: ["생활", "카페", "교통"],
    isOwned: false,
    summary: "결제할 때마다 즉시 쏟아지는 현금 혜택",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "일 최대 5,000원 캐시백",
    officialLink: "https://www.kbanknow.com",
    detailBenefits: [
      { title: "영역별", content: "편의점/카페/패스트푸드 500원 캐시백", limit: "영역별 일 1회" },
      { title: "금융", content: "모든 은행 및 GS25 ATM 수수료 무료", limit: "무제한" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 45 }, { label: "30대", value: 40 }, { label: "40대", value: 12 }, { label: "50대+", value: 3 }],
      gender: { male: 55, female: 45 }
    }
  },
  {
    id: 38,
    name: "신한카드 Deep Dream",
    company: "신한카드",
    type: "신용",
    annualFee: 8000,
    image: "https://placehold.co/100x64?text=DEEP",
    mainBenefits: ["모든 가맹점 0.7% 적립", "가장 많이 쓴 곳 3.5% 적립"],
    categories: ["무실적", "적립", "마트"],
    isOwned: false,
    summary: "더 깊게, 더 많이 적립되는 국민 포인트 카드",
    condition: "실적 조건 없음",
    maxBenefit: "한도 없는 포인트 적립",
    officialLink: "https://www.shinhancard.com",
    detailBenefits: [
      { title: "기본", content: "전 가맹점 0.7% 기본 적립", limit: "무제한" },
      { title: "드림", content: "자주 가는 영역 2.1%, 최다 이용 3.5% 적립", limit: "조건별 상이" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 20 }, { label: "30대", value: 35 }, { label: "40대", value: 30 }, { label: "50대+", value: 15 }],
      gender: { male: 48, female: 52 }
    }
  },
  {
    id: 39,
    name: "삼성카드 taptap DRIVE",
    company: "삼성카드",
    type: "신용",
    annualFee: 10000,
    image: "https://placehold.co/100x64?text=DRIVE",
    mainBenefits: ["모든 주유소 리터당 150원 할인", "편의점 10% 할인"],
    categories: ["주유", "자동차", "편의점"],
    isOwned: false,
    summary: "운전자를 위한 주유와 일상 혜택의 완벽한 드라이브",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 2.5만원 할인",
    officialLink: "https://www.samsungcard.com",
    detailBenefits: [
      { title: "주유", content: "모든 주유소 리터당 60~150원 할인", limit: "월 1.5만원" },
      { title: "생활", content: "편의점/커피전문점 10% 할인", limit: "월 5천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 15 }, { label: "30대", value: 45 }, { label: "40대", value: 30 }, { label: "50대+", value: 10 }],
      gender: { male: 70, female: 30 }
    }
  },
  {
    id: 40,
    name: "현대카드 American Express Green",
    company: "현대카드",
    type: "신용",
    annualFee: 100000,
    image: "https://placehold.co/100x64?text=AMEX",
    mainBenefits: ["멤버십 리워즈 무제한 적립", "항공/호텔 멤버십 전환"],
    categories: ["프리미엄", "여행", "해외"],
    isOwned: false,
    summary: "글로벌 라이프스타일을 위한 아멕스의 아이코닉 카드",
    condition: "전월 실적 50만원 이상",
    maxBenefit: "한도 없는 MR 적립",
    officialLink: "https://www.hyundaicard.com",
    detailBenefits: [
      { title: "적립", content: "이용금액 1,000원당 1 MR 적립", limit: "무제한" },
      { title: "특별", content: "해외/항공 이용 시 최대 3배 적립", limit: "무제한" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 10 }, { label: "30대", value: 50 }, { label: "40대", value: 30 }, { label: "50대+", value: 10 }],
      gender: { male: 60, female: 40 }
    }
  },
  {
    id: 41,
    name: "KB국민 My WEsh 카드",
    company: "KB국민카드",
    type: "신용",
    annualFee: 15000,
    image: "https://placehold.co/100x64?text=WISH",
    mainBenefits: ["나를 위한 10% 할인", "음식점/편의점 10% 할인"],
    categories: ["생활", "식비", "배달"],
    isOwned: false,
    summary: "나의 행복을 위한 맞춤형 혜택 세트",
    condition: "전월 실적 40만원 이상",
    maxBenefit: "월 최대 2.5만원 할인",
    officialLink: "https://card.kbcard.com",
    detailBenefits: [
      { title: "나에게", content: "음식점/편의점/앱스토어 10% 할인", limit: "영역별 5천원" },
      { title: "더하기", content: "배달/커피 5% 추가 할인", limit: "월 5천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 40 }, { label: "30대", value: 40 }, { label: "40대", value: 15 }, { label: "50대+", value: 5 }],
      gender: { male: 35, female: 65 }
    }
  },
  {
    id: 42,
    name: "우리 위비 트래블 체크",
    company: "우리카드",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=TRAVEL",
    mainBenefits: ["해외 가맹점 수수료 면제", "전 세계 라운지 무료"],
    categories: ["여행", "해외", "공항라운지"],
    isOwned: false,
    summary: "여행 고수들이 선택하는 프리미엄 트래블 체크",
    condition: "전월 실적 20만원 이상 (해외 면제는 무실적)",
    maxBenefit: "해외 이용 수수료 100% 면제",
    officialLink: "https://pc.wooricard.com",
    detailBenefits: [
      { title: "해외", content: "해외 이용 수수료 및 ATM 인출 수수료 면제", limit: "무제한" },
      { title: "라운지", content: "전 세계 1,300여 개 공항 라운지 무료", limit: "연 2회" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 50 }, { label: "30대", value: 35 }, { label: "40대", value: 10 }, { label: "50대+", value: 5 }],
      gender: { male: 40, female: 60 }
    }
  },
  {
    id: 43,
    name: "하나카드 트래블로그 신용",
    company: "하나카드",
    type: "신용",
    annualFee: 20000,
    image: "https://placehold.co/100x64?text=LOG",
    mainBenefits: ["해외 가맹점 3% 적립", "국내 모든 가맹점 1% 적립"],
    categories: ["여행", "해외", "적립"],
    isOwned: false,
    summary: "해외에선 환전 없이 결제하고 국내에선 포인트 적립",
    condition: "전월 실적 없음 (국내 적립 기준)",
    maxBenefit: "해외 수수료 면제 및 무제한 적립",
    officialLink: "https://www.hanacard.co.kr",
    detailBenefits: [
      { title: "환전", content: "26종 통화 환전 수수료 100% 우대", limit: "무제한" },
      { title: "적립", content: "국내 이용 시 하나머니 1.0% 적립", limit: "무제한" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 45 }, { label: "30대", value: 40 }, { label: "40대", value: 12 }, { label: "50대+", value: 3 }],
      gender: { male: 42, female: 58 }
    }
  },
  {
    id: 44,
    name: "농협 zgm.휴가중",
    company: "NH농협카드",
    type: "신용",
    annualFee: 25000,
    image: "https://placehold.co/100x64?text=VACATION",
    mainBenefits: ["해외 전 가맹점 2% 적립", "항공/면세점 1% 적립"],
    categories: ["여행", "해외", "항공"],
    isOwned: false,
    summary: "지금, 휴가 중인 당신을 위한 여행 맞춤 카드",
    condition: "전월 실적 40만원 이상",
    maxBenefit: "해외 포인트 무제한 적립",
    officialLink: "https://card.nonghyup.com",
    detailBenefits: [
      { title: "해외", content: "해외 가맹점 이용 시 2~5% 포인트 적립", limit: "무제한" },
      { title: "여행", content: "전 세계 호텔/항공권 예약 할인", limit: "조건별 다름" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 30 }, { label: "30대", value: 40 }, { label: "40대", value: 20 }, { label: "50대+", value: 10 }],
      gender: { male: 45, female: 55 }
    }
  },
  {
    id: 45,
    name: "기업은행 I-알뜰교통플러스",
    company: "IBK기업은행",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=ALTTL",
    mainBenefits: ["교통비 최대 15% 할인", "온라인 쇼핑 5% 할인"],
    categories: ["교통", "쇼핑", "생활"],
    isOwned: false,
    summary: "교통비 마일리지에 추가 할인까지 더한 경제적 체크",
    condition: "전월 실적 20만원 이상",
    maxBenefit: "월 최대 1만원 할인 + 마일리지",
    officialLink: "https://www.ibk.co.kr",
    detailBenefits: [
      { title: "교통", content: "대중교통 이용 시 10~15% 할인", limit: "월 3천원" },
      { title: "쇼핑", content: "쿠팡/G마켓/11번가 5% 할인", limit: "월 2천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 60 }, { label: "30대", value: 25 }, { label: "40대", value: 10 }, { label: "50대+", value: 5 }],
      gender: { male: 40, female: 60 }
    }
  },
  {
    id: 46,
    name: "롯데 LOCA LIKIT Work",
    company: "롯데카드",
    type: "신용",
    annualFee: 15000,
    image: "https://placehold.co/100x64?text=WORK",
    mainBenefits: ["점심식사 10% 할인", "대중교통 10% 할인"],
    categories: ["식비", "교통", "커피"],
    isOwned: false,
    summary: "직장인의 완벽한 워크 라이프를 위한 필수 혜택",
    condition: "전월 실적 40만원 이상",
    maxBenefit: "월 최대 2.5만원 할인",
    officialLink: "https://www.lottecard.co.kr",
    detailBenefits: [
      { title: "식비", content: "음식점 10% 결제일 할인 (11시~14시)", limit: "월 1만원" },
      { title: "커피", content: "커피전문점 10% 할인", limit: "월 5천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 25 }, { label: "30대", value: 50 }, { label: "40대", value: 20 }, { label: "50대+", value: 5 }],
      gender: { male: 55, female: 45 }
    }
  },
  {
    id: 47,
    name: "신협 어부바 체크카드",
    company: "신협",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=EOBUBA",
    mainBenefits: ["편의점 5% 캐시백", "카페 5% 캐시백"],
    categories: ["생활", "카페", "편의점"],
    isOwned: false,
    summary: "언제나 당신 곁에서 든든하게 어부바, 신협 체크",
    condition: "전월 실적 20만원 이상",
    maxBenefit: "월 최대 1만원 캐시백",
    officialLink: "https://www.cu.co.kr",
    detailBenefits: [
      { title: "생활", content: "편의점/카페/병원 5% 캐시백", limit: "영역별 2천원" },
      { title: "쇼핑", content: "전통시장 이용 시 5% 캐시백", limit: "월 2천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 20 }, { label: "30대", value: 30 }, { label: "40대", value: 30 }, { label: "50대+", value: 20 }],
      gender: { male: 45, female: 55 }
    }
  },
  {
    id: 48,
    name: "수협 라온 체크카드",
    company: "수협",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=RAON",
    mainBenefits: ["전통시장 2% 적립", "대중교통 0.5% 적립"],
    categories: ["생활", "전통시장", "교통"],
    isOwned: false,
    summary: "즐거운 생활을 함께하는 수협 라온 적립",
    condition: "실적 조건 없음",
    maxBenefit: "한도 없는 포인트 적립",
    officialLink: "https://www.suhyup-bank.com",
    detailBenefits: [
      { title: "전통시장", content: "전통시장 가맹점 이용 시 2% 적립", limit: "무제한" },
      { title: "기본", content: "국내외 모든 가맹점 0.2~0.5% 적립", limit: "무제한" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 10 }, { label: "30대", value: 20 }, { label: "40대", value: 40 }, { label: "50대+", value: 30 }],
      gender: { male: 52, female: 48 }
    }
  },
  {
    id: 49,
    name: "BC카드 시 바로 G-On",
    company: "BC카드",
    type: "신용",
    annualFee: 15000,
    image: "https://placehold.co/100x64?text=GON",
    mainBenefits: ["온라인 쇼핑 10% 할인", "간편결제 10% 할인"],
    categories: ["쇼핑", "간편결제", "생활"],
    isOwned: false,
    summary: "온라인 쇼핑 헤비유저를 위한 강력한 할인 지온",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 3만원 할인",
    officialLink: "https://www.bccard.com",
    detailBenefits: [
      { title: "쇼핑", content: "오픈마켓/소셜커머스 10% 할인", limit: "월 1만원" },
      { title: "페이", content: "네이버페이/카카오페이 10% 할인", limit: "월 1만원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 40 }, { label: "30대", value: 40 }, { label: "40대", value: 15 }, { label: "50대+", value: 5 }],
      gender: { male: 38, female: 62 }
    }
  },
  {
    id: 50,
    name: "광주은행 KJ 플러스체크",
    company: "광주은행",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=GWANGJU",
    mainBenefits: ["지역 식당 5% 할인", "대형마트 5% 할인"],
    categories: ["생활", "식비", "마트"],
    isOwned: false,
    summary: "광주 지역 생활에 특화된 혜택의 플러스",
    condition: "전월 실적 20만원 이상",
    maxBenefit: "월 최대 1만원 할인",
    officialLink: "https://www.kjbank.com",
    detailBenefits: [
      { title: "지역", content: "지역 음식점 및 카페 5% 할인", limit: "월 5천원" },
      { title: "쇼핑", content: "이마트/홈플러스 5% 할인", limit: "월 5천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 25 }, { label: "30대", value: 30 }, { label: "40대", value: 30 }, { label: "50대+", value: 15 }],
      gender: { male: 46, female: 54 }
    }
  },
  {
    id: 51,
    name: "새마을금고 더담은 체크",
    company: "새마을금고",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=MG_THE",
    mainBenefits: ["학원비 5% 캐시백", "병원/약국 5% 캐시백"],
    categories: ["교육", "병원", "생활"],
    isOwned: false,
    summary: "가족의 건강과 교육을 더 담은 든든한 체크",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 2만원 캐시백",
    officialLink: "https://www.kfcc.co.kr",
    detailBenefits: [
      { title: "교육", content: "전국 학원 업종 5% 캐시백", limit: "월 1만원" },
      { title: "의료", content: "병원/약국 이용 시 5% 캐시백", limit: "월 5천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 5 }, { label: "30대", value: 30 }, { label: "40대", value: 45 }, { label: "50대+", value: 20 }],
      gender: { male: 40, female: 60 }
    }
  },
  {
    id: 52,
    name: "카카오뱅크 개인사업자 체크",
    company: "카카오뱅크",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=BIZ",
    mainBenefits: ["사업 운영 0.3% 적립", "세금신고 지원 서비스"],
    categories: ["비즈니스", "적립", "생활"],
    isOwned: false,
    summary: "사장님의 사업과 일상을 하나로 관리하는 체크",
    condition: "실적 조건 없음",
    maxBenefit: "한도 없는 사업 포인트 적립",
    officialLink: "https://www.kakaobank.com",
    detailBenefits: [
      { title: "적립", content: "국내외 모든 가맹점 0.3% 적립", limit: "무제한" },
      { title: "주유", content: "모든 주유소 리터당 60원 캐시백", limit: "월 1만원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 10 }, { label: "30대", value: 40 }, { label: "40대", value: 35 }, { label: "50대+", value: 15 }],
      gender: { male: 65, female: 35 }
    }
  },
  {
    id: 53,
    name: "토스뱅크 체크카드 v2",
    company: "토스뱅크",
    type: "체크",
    annualFee: 0,
    image: "https://placehold.co/100x64?text=TOSS_V2",
    mainBenefits: ["매일 최대 3,500원 캐시백", "모든 편의점 할인"],
    categories: ["생활", "카페", "편의점"],
    isOwned: false,
    summary: "쓰는 만큼 돌려받는 토스만의 강력한 캐시백",
    condition: "전월 실적 30만원 이상 (프로모션별 상이)",
    maxBenefit: "월 최대 4만원 캐시백",
    officialLink: "https://www.toss.im",
    detailBenefits: [
      { title: "일상", content: "카페/편의점/택시 등 영역별 100~500원 캐시백", limit: "일 1회" },
      { title: "구독", content: "넷플릭스 등 스트리밍 결제 시 캐시백", limit: "월 1회" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 60 }, { label: "30대", value: 30 }, { label: "40대", value: 8 }, { label: "50대+", value: 2 }],
      gender: { male: 48, female: 52 }
    }
  },
  {
    id: 54,
    name: "신한카드 Deep Oil",
    company: "신한카드",
    type: "신용",
    annualFee: 10000,
    image: "https://placehold.co/100x64?text=OIL",
    mainBenefits: ["직접 고른 주유소 10% 할인", "차량 정비 10% 할인"],
    categories: ["주유", "자동차", "편의점"],
    isOwned: false,
    summary: "내가 자주 가는 주유소를 직접 골라 10% 할인",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 3만원 할인",
    officialLink: "https://www.shinhancard.com",
    detailBenefits: [
      { title: "주유", content: "GS/SK/S-OIL/현대오일뱅크 중 선택 1개소 10% 할인", limit: "월 1.5만원" },
      { title: "주차", content: "전국 모든 주차장 10% 할인", limit: "월 5천원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 10 }, { label: "30대", value: 45 }, { label: "40대", value: 35 }, { label: "50대+", value: 10 }],
      gender: { male: 80, female: 20 }
    }
  },
  {
    id: 55,
    name: "삼성카드 iD PET",
    company: "삼성카드",
    type: "신용",
    annualFee: 20000,
    image: "https://placehold.co/100x64?text=PET",
    mainBenefits: ["동물병원 30% 할인", "반려동물 쇼핑몰 30% 할인"],
    categories: ["반려동물", "쇼핑", "의료"],
    isOwned: false,
    summary: "소중한 반려동물을 위한 프리미엄 케어 솔루션",
    condition: "전월 실적 40만원 이상",
    maxBenefit: "월 최대 4만원 할인",
    officialLink: "https://www.samsungcard.com",
    detailBenefits: [
      { title: "펫케어", content: "동물병원/애견미용/펫샵 30% 할인", limit: "월 1.5만원" },
      { title: "온라인", content: "반려동물 전용 쇼핑몰 30% 할인", limit: "월 1만원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 30 }, { label: "30대", value: 40 }, { label: "40대", value: 20 }, { label: "50대+", value: 10 }],
      gender: { male: 30, female: 70 }
    }
  },
  {
    id: 56,
    name: "현대카드 M 포인트형 전용",
    company: "현대카드",
    type: "신용",
    annualFee: 30000,
    image: "https://placehold.co/100x64?text=M_POINT",
    mainBenefits: ["전 가맹점 M포인트 적립", "외식/영화 최대 50% 사용"],
    categories: ["적립", "여가", "외식"],
    isOwned: false,
    summary: "적립된 포인트로 일상의 가치를 높이는 M포인트 라이프",
    condition: "전월 실적 50만원 이상",
    maxBenefit: "무제한 M포인트 적립",
    officialLink: "https://www.hyundaicard.com",
    detailBenefits: [
      { title: "적립", content: "업종별 0.5~3% 기본 적립", limit: "무제한" },
      { title: "사용", content: "M포인트 사용처에서 10~50% 결제 가능", limit: "보유 포인트 내" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 25 }, { label: "30대", value: 40 }, { label: "40대", value: 25 }, { label: "50대+", value: 10 }],
      gender: { male: 55, female: 45 }
    }
  },
  {
    id: 57,
    name: "KB국민 비즈티타늄",
    company: "KB국민카드",
    type: "신용",
    annualFee: 40000,
    image: "https://placehold.co/100x64?text=BIZ_T",
    mainBenefits: ["사업 지원 영역 15% 적립", "대형마트 15% 적립"],
    categories: ["비즈니스", "마트", "적립"],
    isOwned: false,
    summary: "성공하는 사장님을 위한 강력한 비즈니스 리워드",
    condition: "전월 실적 40만원 이상",
    maxBenefit: "월 최대 5만 포인트 적립",
    officialLink: "https://card.kbcard.com",
    detailBenefits: [
      { title: "사업", content: "주유/통신/사무용품 15% 적립", limit: "월 2만점" },
      { title: "쇼핑", content: "이마트/롯데마트/홈플러스 15% 적립", limit: "월 1.5만점" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 5 }, { label: "30대", value: 35 }, { label: "40대", value: 40 }, { label: "50대+", value: 20 }],
      gender: { male: 70, female: 30 }
    }
  },
  {
    id: 58,
    name: "우리 카드의정석 UniMile",
    company: "우리카드",
    type: "신용",
    annualFee: 20000,
    image: "https://placehold.co/100x64?text=UNI",
    mainBenefits: ["저가항공사 통합 마일리지", "LCC 부가서비스 무료"],
    categories: ["항공", "여행", "LCC"],
    isOwned: false,
    summary: "국내 6대 저가항공사 통합 적립으로 가성비 여행",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "무제한 유니마일 적립",
    officialLink: "https://pc.wooricard.com",
    detailBenefits: [
      { title: "적립", content: "항공사 결제 시 3.0% 유니마일 적립", limit: "무제한" },
      { title: "면세점", content: "국내외 면세점 결제 시 2.0% 적립", limit: "무제한" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 40 }, { label: "30대", value: 40 }, { label: "40대", value: 15 }, { label: "50대+", value: 5 }],
      gender: { male: 35, female: 65 }
    }
  },
  {
    id: 59,
    name: "하나카드 #any",
    company: "하나카드",
    type: "신용",
    annualFee: 12000,
    image: "https://placehold.co/100x64?text=ANY",
    mainBenefits: ["온라인 쇼핑 1% 적립", "모든 가맹점 0.5% 적립"],
    categories: ["무실적", "쇼핑", "적립"],
    isOwned: false,
    summary: "조건도 한도도 없는 심플한 적립의 정석",
    condition: "실적 조건 없음",
    maxBenefit: "한도 없는 무제한 적립",
    officialLink: "https://www.hanacard.co.kr",
    detailBenefits: [
      { title: "기본", content: "전 가맹점 하나머니 0.5% 적립", limit: "무제한" },
      { title: "온라인", content: "온라인 가맹점 이용 시 1.0% 적립", limit: "무제한" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 30 }, { label: "30대", value: 35 }, { label: "40대", value: 25 }, { label: "50대+", value: 10 }],
      gender: { male: 45, female: 55 }
    }
  },
  {
    id: 60,
    name: "NH 올원 파이",
    company: "NH농협카드",
    type: "신용",
    annualFee: 10000,
    image: "https://placehold.co/100x64?text=PIE",
    mainBenefits: ["온라인 쇼핑 7~20% 할인", "주유 5% 할인"],
    categories: ["쇼핑", "주유", "생활"],
    isOwned: false,
    summary: "내 생활의 파이를 키우는 강력한 온라인 특화 할인",
    condition: "전월 실적 30만원 이상",
    maxBenefit: "월 최대 4만원 할인",
    officialLink: "https://card.nonghyup.com",
    detailBenefits: [
      { title: "선택", content: "온라인 쇼핑/마트 중 선택 영역 최대 20% 할인", limit: "월 1만원" },
      { title: "고정", content: "주유/카페/편의점 5~10% 할인", limit: "월 1만원" }
    ],
    statistics: {
      ageGroup: [{ label: "20대", value: 25 }, { label: "30대", value: 45 }, { label: "40대", value: 20 }, { label: "50대+", value: 10 }],
      gender: { male: 42, female: 58 }
    }
  }
];