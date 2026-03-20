export interface AnalyzedReceipt {
    id: number;
    storeName: string
    amount: number;
    date: string;
    category: string;
}

export interface Spending extends Omit<AnalyzedReceipt, 'id'> {
    id: string | number;
    cardId?: number;
}