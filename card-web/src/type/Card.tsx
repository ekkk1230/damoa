export interface Card {
    id: number;
    name: string;
    company: string;
    annualFee: number;
    image: string;
    mainBenefits: string[];
    categories: string[];
    isOwned: boolean;
}