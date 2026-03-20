export const fetchReceiptAnalysis =async (file: File): Promise<any[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return [
        { id: 1, storeName: "안양주유소", amount: 50000, date: "2026-03-15", category: "교통/주유" },
        { id: 2, storeName: "스타벅스", amount: 6100, date: "2026-03-16", category: "카페" },
      ];
}

