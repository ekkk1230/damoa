import { create } from 'zustand';
import type { Card } from '../type/Card';
import type { MyCardProgress, UserCard } from '../type/User';
import type { AnalyzedReceipt, Spending } from '../type/Spending';
import { MOCK_SPENDING } from '../data/MOCK_SPENDING';
import { CARD_LIST } from '../data/CARD_LIST';
import { USER_CARDS } from '../data/USER_CARD_LIST';
import { fetchReceiptAnalysis } from '../api/receipt';

type ModalType = 'CARD_DETAIL' | 'SPENDING_ADD' | null;

const analyzeSpendings = (spendings: any[]) => {
    if (spendings.length === 0) {
        return { topCategory: "지출 없음", spendingMap: {}, totalSpending: 0, myCards: [], recommendedCards: [], recentSpend: [], totalBenefit: 0, benefitMap: {} };
    };

    let totalSpending = 0;
    const categoryMap: Record<string, number> = {}; // 카테고리별 지출 내역
    const spendingMap: Record<number, number> = {}; // 카드별 지출 내역
    const benefitMap: Record<number, number> = {};  // 카드별 혜택

    let totalBenefit = 0;

    spendings.forEach(s => {
        totalSpending += s.amount;
        
        const cardId = Number(s.cardId);
        const card = CARD_LIST.find(c => c.id === Number(s.cardId));
        const rule = card?.benefitRules?.find(r => r.category === s.category);
        const rate = rule ? Number(rule.rate) : Number(card?.baseRate);
        const benefit = Math.floor(s.amount * rate);

        spendingMap[cardId] = (spendingMap[cardId] || 0) + s.amount;
        categoryMap[s.category] = (categoryMap[s.category] || 0) + s.amount;

        totalBenefit += benefit;
        benefitMap[cardId] = (benefitMap[cardId] || 0) + benefit;
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

    const recentSpend: AnalyzedReceipt[] = spendings.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return { topCategory, spendingMap, categoryMap, totalSpending, myCards, recommendedCards, recentSpend, totalBenefit, benefitMap };
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
    spendings: Spending[];
    addSpending: (newSpending: Spending) => void;

    topSpendingCategory: string;    
    totalSpending: number;

    getMyCards: MyCardProgress[];
    recommendedCards: Card[];

    recentSpendList: Spending[];

    totalBenefit: number;
    benefit: any;

    // 영수증 분석
    analyzedList: AnalyzedReceipt[],
    isAnalyzing: boolean, 
    uploadAndAnalyze: (file: File) => Promise<void>;
    deleteAnalyzedItem: (id: number) => void;
    confirmAllSpendings: (cardId: number) => void;
    updateAnalyzedItem: (id:number, updatedItem: any) => void;

    deleteCard: (cardId: number) => void;
}

export const useCardStore = create<CardState>((set, get) => {

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
                totalBenefit: result.totalBenefit,
                benefit: result.benefitMap,
            }
        }),

        topSpendingCategory: initial.topCategory,
        totalSpending: initial.totalSpending,

        getMyCards: initial.myCards,
        recommendedCards: initial.recommendedCards,

        recentSpendList: initial.recentSpend,

        totalBenefit: initial.totalBenefit,
        benefit: initial.benefitMap,

        analyzedList: [], 
        isAnalyzing: false, 
        uploadAndAnalyze: async (file: File) => {
            set({ isAnalyzing: true });

            try {
                const data: any[] = await fetchReceiptAnalysis(file);

                set({ 
                    analyzedList: data, 
                    isAnalyzing: false 
                });
            } catch(err) {
                console.error("분석 중 오류 발생:", err);
                set({ isAnalyzing: false });
            }
        }, 

        deleteAnalyzedItem: (id) => {
            set((state) => ({
                analyzedList: state.analyzedList.filter(item => item.id !== id)
            }))
        },

        confirmAllSpendings: (cardId: number) => {
            const { analyzedList, addSpending } = get();

            analyzedList.forEach(item => {
                addSpending({
                    ...item,
                    cardId: cardId
                })
            })

            set({ analyzedList: []});
        },

        updateAnalyzedItem: (id: number, updatedItem: any) => {
            set((state) => ({
                analyzedList: state.analyzedList.map(item => item.id === id ? 
                    { ...item, ...updatedItem, 
                        amount: updatedItem.amount !== undefined 
                        ? Number(String(updatedItem.amount).replace(/[^0-9]/g, ''))  
                        : item.amount } 
                    : item)
            }))
        },

        deleteCard: (cardId: number) => {
            const { getMyCards } = get();
            const deleteItem = getMyCards.find(c => c.cardInfo.id === cardId);

            if (!deleteItem)  return;

            const cardAmount = deleteItem ? deleteItem.currentAmount : 0;
            set ((state) => {
                const newBenefit = {...state.benefit};
                delete newBenefit[cardId];
                return {
                    totalSpending: state.totalSpending - cardAmount,
                    getMyCards: state.getMyCards.filter(c => c.cardInfo.id !== cardId),
                    recentSpendList: state.recentSpendList.filter(s => s.cardId !== cardId),  
                    benefit: newBenefit,
                }
            })

            analyzeSpendings(get().recentSpendList);
        },
    }
});
