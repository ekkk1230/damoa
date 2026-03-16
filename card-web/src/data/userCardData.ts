import type { UserCard } from '../type/User';
import { CARD_LIST } from './cardData';

export const MY_CARDS: UserCard[] = CARD_LIST
.filter(card => card.isOwned)
.map(card => {
    const extractedTarget = card.id === 1 ? 300000 : 300000;

    return {
        cardInfo: card,
        nickname: `${card.name} (내 카드)`,
        targetAmount: extractedTarget,
        currentAmount: 0,
    }
});