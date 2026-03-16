import type { Card } from "./Card";

export interface UserCard {
    cardInfo: Card;
    nickname: string;
    targetAmount: number;
    currentAmount: number;
}

export interface Spending {
    id: string;
    date: string;
    store: string;
    amount: number;
    category: string;
    cardId: number;
}