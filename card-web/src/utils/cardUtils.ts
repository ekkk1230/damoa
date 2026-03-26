import { BRAND_COLORS } from "../App.styles";
import { EXPENDITURE_CATEGORIES } from "../constance/categories";

export const getTextColorByBackground = (hexColor: string): string => {
    if (!hexColor) return "#333";
    
    // # 문 제거
    const hex = hexColor.replace("#", "");
    
    // RGB 값 추출
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // 밝기 계산 공식 (YIQ)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    
    return yiq >= 128 ? "#333333" : "#ffffff";
};

export const normalizeCompanyName = (name: string): string => {
    if (!name) return "기타";
  
    // 1. 공백 제거 및 소문자 변환 (비교를 위해)
    const n = name.replace(/\s/g, "").toLowerCase();
  
    // 2. 통합 규칙 정의 (우선순위 고려)
    if (n.includes("국민") || n.includes("kb")) return "국민카드";
    if (n.includes("신한") || n.includes("shinhan")) return "신한카드";
    if (n.includes("삼성") || n.includes("samsung")) return "삼성카드";
    if (n.includes("현대") || n.includes("hyundai")) return "현대카드";
    if (n.includes("우리") || n.includes("woori")) return "우리카드";
    if (n.includes("하나") || n.includes("hana")) return "하나카드";
    if (n.includes("롯데") || n.includes("lotte")) return "롯데카드";
    if (n.includes("농협") || n.includes("nh")) return "농협카드";
    if (n.includes("기업") || n.includes("ibk")) return "기업은행";
    if (n.includes("외환") || n.includes("keb")) return "하나카드"; 
    if (n.includes("카카오") || n.includes("kakao")) return "카카오뱅크";
    if (n.includes("토스") || n.includes("toss")) return "토스뱅크";
    if (n.includes("케이") || n.includes("kbank")) return "케이뱅크";
    if (n.includes("비씨") || n.includes("bc")) return "BC카드";
    if (n.includes("kjb") || n.includes("광주")) return "광주은행";
    if (n.includes("dgb") || n.includes("대구")) return "대구은행";
    if (n.includes("bnk") || n.includes("부산")) return "부산은행";
    if (n.includes("jb") || n.includes("전북")) return "전북은행";
  
    return name;
};

export const getCategoryLabel = (categoryKey: string) => {
    const category = (EXPENDITURE_CATEGORIES as any)[categoryKey];
    return category ? category.label : categoryKey;
}

export const getCardColor = (companyName: string) => {
    const matchedKey = Object.keys(BRAND_COLORS).find(key =>
        companyName.includes(key) || key.includes(companyName)
    )

    const colorCode = matchedKey ? BRAND_COLORS[matchedKey] : BRAND_COLORS["기타"];
    return colorCode.replace('#', '');
}

export const getPerformancePeriod = (billingDate: number) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const formatDate = (date: Date) => {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    let start: Date;
    let end: Date;

    if (billingDate === 14)  {
        start = new Date(year, month - 1, 1);
        end = new Date(year, month, 0);
    }
    else {
        start = new Date(year, month, 1);
        end = new Date(year, month + 1, 0);
    }

    return {
        startDate: formatDate(start),
        endDate: formatDate(end),
    }
}