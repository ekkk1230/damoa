import { create } from 'zustand';
import type { Card } from '../type/Card';
import type { UserCard } from '../type/User';
import { MOCK_SPENDING } from '../data/MOCK_SPENDING';
import { CARD_LIST } from '../data/CARD_LIST';
import { USER_CARDS } from '../data/USER_CARD_LIST';

type ModalType = 'CARD_DETAIL' | 'SPENDING_ADD' | null;

interface MyCardProgress {
    cardInfo: Card;
    targetAmount: number;
    currentAmount: number;
    progress: number;
};

const analyzeSpendings = (spendings: any[]) => {
    if (spendings.length === 0) {
        return { topCategory: "지출 없음", spendingMap: {}, totalSpending: 0, myCards: [], recommendedCards: [], recentSpend: [], totalBenefit: 0 };
    };

    let totalSpending = 0;
    const categoryMap: Record<string, number> = {}; // 카테고리별 지출 내역
    const spendingMap: Record<number, number> = {}; // 카드별 지출 내역

    let totalBenefit = 0;

    spendings.forEach(s => {
        totalSpending += s.amount;
        
        const cardId = Number(s.cardId);
        spendingMap[cardId] = (spendingMap[cardId] || 0) + s.amount;

        categoryMap[s.category] = (categoryMap[s.category] || 0) + s.amount;

        const card = CARD_LIST.find(c => c.id === Number(s.cardId));
        const rule = card?.benefitRules?.find(r => r.category === s.category);
        const rate = rule ? Number(rule.rate) : Number(card?.baseRate);
        totalBenefit += Math.floor(s.amount * rate);
    });

    const topCategory = Object.keys(categoryMap).reduce((acc, cur) => {
        return categoryMap[cur] > categoryMap[acc] ? cur : acc;
    });

    const myCards: MyCardProgress[] = CARD_LIST
        .filter(card => card.isOwned)
        .map(card => {
            const current = spendingMap[card.id] || 0;
            const target = 300000;

            const progress = Math.min(Math.round((current / target) * 100), 100);

            return {
                cardInfo: card,
                targetAmount: 300000,
                currentAmount: spendingMap[card.id] || 0,
                progress
            }
        });

    const recommendedCards: Card[] = CARD_LIST
        .filter(card => card.categories.includes(topCategory))
        .sort(() => Math.random() - .5)
        .slice(0, 5);

    const recentSpend: Card[] = spendings.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    })

    return { topCategory, spendingMap, categoryMap, totalSpending, myCards, recommendedCards, recentSpend, totalBenefit };
}
 
interface CardState {
    // 모달 및 선택 상태
    selectedCard: Card | null;
    modalType: ModalType;
    openModal: (type: ModalType, data?: Card) => void;
    closeModal: () => void;
    setSearchTerm: (term: string) => void;
    setSelectedCompany: (company: string) => void;
    setIsExpanded: (expanded: boolean) => void;

    // 필터 상태
    searchTerm: string;
    selectedCompany: string;
    isExpanded: boolean;
    resetFilters: () => void;

    userCards: UserCard[]

    // 지출 내역 등록
    spendings: any[];
    addSpending: (newSpending: any) => void;

    topSpendingCategory: string;    
    totalSpending: number;

    getMyCards: MyCardProgress[];
    recommendedCards: Card[];

    recentSpendList: any[];

    totalBenefit: number;
}

export const useCardStore = create<CardState>((set) => {

    const initial = analyzeSpendings(MOCK_SPENDING);

    return {
        selectedCard: null,
        modalType: null,
        openModal: (type, data) => set({ modalType: type, selectedCard: data || null }),
        closeModal: () => set({ modalType: null, selectedCard: null }),
        setSearchTerm: term => set({ searchTerm: term }),
        setSelectedCompany: company => set({ selectedCompany: company }),
        setIsExpanded: expanded => set({ isExpanded: expanded }),

        searchTerm: '',
        selectedCompany: '전체',
        isExpanded: false,
        resetFilters: () => set({
            searchTerm: "",
            selectedCompany: "전체",
            isExpanded: false,
        }),

        userCards: USER_CARDS,

        spendings: MOCK_SPENDING,
        addSpending: (newSpending) => set((state) => {
            const updatedSpendings = [newSpending, ...state.spendings];
            const result = analyzeSpendings(updatedSpendings);

            return { 
                spendings: updatedSpendings,
                topSpendingCategory: result.topCategory,
                totalSpending: result.totalSpending,
                getMyCards: result.myCards,
                recommendedCards: result.recommendedCards,
                recentSpendList: result.recentSpend,
            }
        }),

        topSpendingCategory: initial.topCategory,
        totalSpending: initial.totalSpending,

        getMyCards: initial.myCards,
        recommendedCards: initial.recommendedCards,

        recentSpendList: initial.recentSpend,

        totalBenefit: initial.totalBenefit,
    }
});
