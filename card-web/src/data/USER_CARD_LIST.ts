import type { UserCard } from '../type/User';
import { CARD_LIST } from './CARD_LIST';

export const USER_CARDS: UserCard[] = CARD_LIST
    .filter(card => card.isOwned)
    .map(card => {
        const isCredit = card.type === "신용" || card.type === "하이브리드";
        const defaultBillingDate = isCredit ? 14 : undefined;
        
        const period = {
            startDate: "2026-03-01",
            endDate: "2026-03-31"
        };

        return {
            cardInfo: card,
            nickname: `${card.name} (내 카드)`,
            targetAmount: 300000,
            currentAmount: 0,
            billingDate: defaultBillingDate, 
            performancePeriod: period
        };
});