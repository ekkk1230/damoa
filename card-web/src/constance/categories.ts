export const EXPENDITURE_CATEGORIES = {
    FOOD: { 
      label: '식비', 
      examples: '식당, 카페, 커피숍, 배달의민족, 쿠팡이츠, 편의점(GS25, CU, 7ELEVEN), 베이커리, 음식점, 포차, 이자카야, 레스토랑, 바' 
    },
    TRANSPORT: { 
      label: '교통', 
      examples: '시내버스, 지하철, 택시(카카오T), 기차(SRT, KTX, ITX, 무궁화호, 새마을호), 주유소, 충전소, 주차장, 하이패스' 
    },
    SHOPPING: { 
      label: '쇼핑', 
      examples: '대형마트(이마트, 홈플러스, 아울렛), 백화점, 쿠팡, 네이버쇼핑, 무신사, 올리브영' 
    },
    MEDICAL: { 
      label: '의료', 
      examples: '종합병원, 의원, 치과, 한의원, 약국, 동물병원, 내과, 소아과, 이비인후과, 정형외과, 피부과' 
    },
    CULTURE: { 
      label: '문화/여가', 
      examples: 'CGV, 롯데시네마, 교보문고, 영풍문고, 호텔, 펜션, 에어비앤비, 비행기표, 골프장, 헬스장' 
    },
    SUBSCRIPTION: { 
      label: '구독/정기결제', 
      examples: '넷플릭스, 유튜브 프리미엄, 쿠팡 와우멤버십, 멜론, 티빙, 웨이브, 디즈니플러스' 
    },
    LIVING: { 
      label: '생활', 
      examples: 'SKT/KT/LGU+ 통신비, 전기요금, 가스요금, 아파트관리비, 세탁소, 공과금' 
    },
    EDUCATION: { 
      label: '교육/학원', 
      examples: '입시학원, 어학원, 온라인 강의(인강), 교육 사이트, 서점(교재), 토익 응시료' 
    },
    ETC: { 
      label: '기타', 
      examples: '경조사, 축의금, 조의금, 세금, 현금서비스' 
    },
} as const;

export const CATEGORY_COLORS = {
    FOOD: '#FF9F43',       
    TRANSPORT: '#0984E3',  
    SHOPPING: '#E84393',   
    MEDICAL: '#00B894',    
    CULTURE: '#6C5CE7',    
    SUBSCRIPTION: '#FD79A8',
    LIVING: '#636E72',     
    EDUCATION: '#F1C40F',  
    ETC: '#B2BEC3',        
  };