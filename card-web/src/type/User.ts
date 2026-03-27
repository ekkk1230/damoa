import type { Card } from "./Card";

export interface UserCard {
    cardInfo: Card;
    nickname?: string;
    targetAmount: number;
    currentAmount: number;

    billingDate?: number; // 신용카드의 경우 (결제일)
    performancePeriod?: { // YYYY-MM-DD
        startDate: string;
        endDate: string;
    }
}

export interface MyCardProgress extends UserCard {
    progress: number;
};

export interface User {
    id: string;
    name: string;
    joinDate: string;
}

export interface AuthFormData {
    id: string;
    password: string;
    confirmPassword?: string;
    name?: string;
}