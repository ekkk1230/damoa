export const fetchReceiptAnalysis =async (file: File): Promise<any[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return [
      { id: 1, date: '2026-03-01', storeName: '에듀윌 온라인강의', amount: 150000, category: 'EDUCATION' },
      { id: 2, date: '2026-03-02', storeName: '스타벅스 강남점', amount: 5800, category: 'FOOD' },
      { id: 3, date: '2026-03-03', storeName: '유튜브 프리미엄', amount: 14900, category: 'SUBSCRIPTION' },
      { id: 4, date: '2026-03-05', storeName: '쿠팡(와우멤버십)', amount: 4990, category: 'SUBSCRIPTION' },
      { id: 5, date: '2026-03-07', storeName: 'GS25 편의점', amount: 12500, category: 'FOOD' },
      { id: 6, date: '2026-03-08', storeName: '올리브영 명동점', amount: 85000, category: 'SHOPPING' },
      { id: 7, date: '2026-03-10', storeName: '서울내과', amount: 15200, category: 'MEDICAL' },
      { id: 8, date: '2026-03-10', storeName: '행복약국', amount: 8000, category: 'MEDICAL' },
      { id: 9, date: '2026-03-12', storeName: '배달의민족(처갓집)', amount: 24000, category: 'FOOD' },
      { id: 10, date: '2026-03-14', storeName: 'CGV 영화관', amount: 15000, category: 'CULTURE' },
      { id: 11, date: '2026-03-15', storeName: '카카오T 택시', amount: 12800, category: 'TRANSPORT' },
      { id: 12, date: '2026-03-17', storeName: '이마트 자양점', amount: 89000, category: 'SHOPPING' },
      { id: 13, date: '2026-03-18', storeName: '넷플릭스', amount: 17000, category: 'SUBSCRIPTION' },
      { id: 14, date: '2026-03-20', storeName: 'SKT 통신비', amount: 55000, category: 'LIVING' },
      { id: 15, date: '2026-03-21', storeName: '교보문고 광화문점', amount: 22000, category: 'CULTURE' },
      { id: 16, date: '2026-03-22', storeName: '반려동물병원', amount: 45000, category: 'MEDICAL' },
      { id: 17, date: '2026-03-23', storeName: '아파트 관리비', amount: 215000, category: 'LIVING' },
      { id: 18, date: '2026-03-24', storeName: '스타벅스 강남점', amount: 6200, category: 'FOOD' },
      { id: 19, date: '2026-03-25', storeName: '친구 결혼식 축의금', amount: 100000, category: 'ETC' },
      { id: 18, date: '2026-03-27', storeName: '스타벅스 강남점', amount: 12200, category: 'FOOD' },
      { id: 11, date: '2026-03-27', storeName: '카카오T 택시', amount: 16800, category: 'TRANSPORT' },
      { id: 20, date: '2026-03-28', storeName: 'GS칼텍스 주유', amount: 75000, category: 'TRANSPORT' },
      ];
}

