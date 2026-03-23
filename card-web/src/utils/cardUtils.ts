import { BRAND_COLORS } from "../App.styles";

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