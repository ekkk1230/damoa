import { BRAND_COLORS } from "../App.styles";

export const getCardColor = (companyName: string) => {
    const matchedKey = Object.keys(BRAND_COLORS).find(key =>
        companyName.includes(key) || key.includes(companyName)
    )

    const colorCode = matchedKey ? BRAND_COLORS[matchedKey] : BRAND_COLORS["기타"];
    return colorCode.replace('#', '');
}