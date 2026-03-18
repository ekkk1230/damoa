import type { Card } from "./Card";

export interface UserCard {
    cardInfo: Card;
    nickname: string;
    targetAmount: number;
    currentAmount: number;

    billingDate?: number; // 신용카드의 경우 (결제일)
    performancePeriod: { // YYYY-MM-DD
        startDate: string;
        endDate: string;
    }
}

export interface Spending {
    id: string;
    date: string;
    store: string;
    amount: number;
    category: string;
    cardId: number;
}