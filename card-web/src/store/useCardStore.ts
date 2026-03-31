import { create } from 'zustand';
import type { Card } from '../type/Card';
import type { MyCardProgress, UserCard } from '../type/User';
import type { AnalyzedReceipt, Spending } from '../type/Spending';
import { CARD_LIST } from '../data/CARD_LIST';
import { USER_CARDS } from '../data/USER_CARD_LIST';
import { fetchReceiptAnalysis } from '../api/receipt';
import { MOCK_SPENDING } from '../data/MOCK_SPENDING';

export const analyzeSpendings = (spendings: any[], currentCards: MyCardProgress[], allCards: Card[]) => {
    if (spendings.length === 0) {
        return { 
            topCategory: "지출 없음", spendingMap: {}, totalSpending: 0, 
            myCards: currentCards, 
            recommendedCards: [], recentSpend: [], 
            totalBenefit: 0, benefitMap: {} 
        };
    };

    let totalSpending = 0;
    let totalBenefit = 0;

    const categoryMap: Record<string, number> = {}; // 카테고리별 지출 내역
    const spendingMap: Record<number, number> = {}; // 카드별 지출 내역
    const benefitMap: Record<number, number> = {};  // 카드별 혜택

    spendings.forEach(s => {
        const amount = Number(s.amount) || 0;
        totalSpending += amount;
        const cardId = Number(s.cardId);

        // 현재 카드의 실적 확인
        const myCard = currentCards.find(c => c.cardInfo.id === cardId);
        const cardInfo = myCard?.cardInfo;
        const currentPerformance = myCard?.currentAmount || 0;

        // 실적 구간(Tier) 찾기
        const activeTier = cardInfo?.performanceTiers?.find(tier => currentPerformance >= tier.min && currentPerformance < (tier.max) || Infinity);

        // 혜택 룰 적용
        const rule = cardInfo?.benefitRules?.find(r => r.category === s.category);

        // 실적 구간이 있으면 해당 구간의 rate, 없으면 기본 baseRate 사용
        const effectiveRate = rule ? (activeTier?.rate || rule.rate) : (cardInfo?.baseRate || 0);
        let benefit = Math.floor(amount * Number(effectiveRate || 0));

        // 한도(Limit) 적용
        if (rule?.limit) {
            const alreadyUsedBenefit = benefitMap[cardId] || 0;
            // 이번에 받을 혜택이 남은 한도를 넘지 않게 계산
            const remainingLimit = rule.limit - (alreadyUsedBenefit % rule.limit); // 간이 로직
            benefit = Math.min(benefit, rule.limit); 
        }
    
        spendingMap[cardId] = (spendingMap[cardId] || 0) + amount;
        categoryMap[s.category] = (categoryMap[s.category] || 0) + amount;
    
        totalBenefit += benefit;
        benefitMap[cardId] = (benefitMap[cardId] || 0) + benefit;
    });

    const topCategory = Object.keys(categoryMap).reduce((acc, cur) => {
        return categoryMap[cur] > categoryMap[acc] ? cur : acc;
    });

    const myCards: MyCardProgress[] = currentCards
        .map(card => {
            const current = spendingMap[card.cardInfo.id] || 0;
            const tiers = card.cardInfo.performanceTiers || [];

            const nextTier = tiers.find(tier => tier.min > current);

            const dynamicTarget = nextTier ? nextTier.min : (tiers[tiers.length - 1]?.min || card.targetAmount || 300000);

            const progress = Math.min(Math.round((current / dynamicTarget) * 100), 100);

            return {
                ...card,
                targetAmount: dynamicTarget,
                currentAmount: current,
                progress: isNaN(progress) ? 0 : progress
            };
        });

    const recommendedCards: Card[] = allCards
        .filter(card => card.categories.map(cate => cate.trim()).includes(topCategory.trim()))
        .sort(() => Math.random() - .5)
        .slice(0, 5);

    const recentSpend: AnalyzedReceipt[] = spendings.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const finalRecommended = recommendedCards.length > 0
        ? recommendedCards
        : allCards.slice(0, 5);

    return { 
        topCategory, 
        spendingMap, categoryMap, totalSpending, 
        myCards, 
        recommendedCards: finalRecommended, 
        recentSpend, 
        totalBenefit: isNaN(totalBenefit) ? 0 : totalBenefit, 
        benefitMap 
    };
}

export const calculateExpectedBenefit = (categoryMap: Record<string, number> = {}, card: Card) => {
    if (!card) return { totalBenefit: 0, categoryBenefits: {} as Record<string, number> };

    let totalBenefit = 0;
    let categoryBenefits: Record<string, number> = {};

    const totalSpent = Object.values(categoryMap).reduce((acc, cur) => { return acc + cur; }, 0);

    const minTier = card.performanceTiers?.[0].min || 0;
    if (totalSpent < minTier) {
       return { totalBenefit: 0, categoryBenefits };
    };

    card.benefitRules?.forEach(rule => {
        const spentInCategory = categoryMap[rule.category] || 0;

        const estimated = Math.min(Math.round(spentInCategory * rule.rate), rule.limit);

        categoryBenefits[rule.category] = estimated;
        totalBenefit += estimated;
    })

    return { totalBenefit, categoryBenefits };
}
 
interface CardState {
    // 모달 및 선택 상태
    selectedCard: Card | null;
    setSelectedCard: (card: Card) => void;
    setSearchTerm: (term: string) => void;
    setSelectedCompany: (company: string) => void;
    setIsExpanded: (expanded: boolean) => void;

    cardList: Card[];

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
    addCard: (newCard: MyCardProgress) => void;

    categoryTotals: any | string | number [],
}

export const useCardStore = create<CardState>((set, get) => {

    const initialMyCards: MyCardProgress[] = USER_CARDS.map(uc => ({
        ...uc,
        currentAmount: 0,
        progress: 0
    }))

    const initialCards: Card[] = CARD_LIST.map(card => ({
        ...card
    }))

    const initial = analyzeSpendings([], initialMyCards, initialCards);

    return {
        selectedCard: null,
        setSelectedCard: (card) => set({ selectedCard: card }),
        setSearchTerm: term => set({ searchTerm: term }),
        setSelectedCompany: company => set({ selectedCompany: company }),
        setIsExpanded: expanded => set({ isExpanded: expanded }),

        cardList: initialCards,

        searchTerm: '',
        selectedCompany: '전체',
        isExpanded: false,
        resetFilters: () => set({
            searchTerm: "",
            selectedCompany: "전체",
            isExpanded: false,
        }),

        userCards: USER_CARDS,

        spendings: [],
        addSpending: (newSpending) => set((state) => {
            const updatedSpendings = [newSpending, ...state.spendings];
            const result = analyzeSpendings(updatedSpendings, state.getMyCards, state.cardList);

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
            set((state) => {
                const remainingCards = state.getMyCards.filter(c => c.cardInfo.id !== cardId );
                const remainingSpendins = state.spendings.filter(s => s.cardId);

                const result = analyzeSpendings(state.spendings, remainingCards, state.cardList);

                return {
                    spendings: remainingSpendins,
                    getMyCards: result.myCards,
                    recommendedCards: result.recommendedCards,
                    topSpendingCategory: result.topCategory,
                    totalBenefit: result.totalBenefit,
                    benefit: result.benefitMap,
                    totalSpending: result.totalSpending,
                    recentSpendList: result.recentSpend,
                }
            })
        },

        addCard: (newCard: MyCardProgress) => {
            set((state) => {
                const updatedCards = [...state.getMyCards, newCard];
                const result = analyzeSpendings(state.spendings, updatedCards, state.cardList);

                return {
                    getMyCards: result.myCards,
                    recommendedCards: result.recommendedCards,
                    topSpendingCategory: result.topCategory,
                    totalBenefit: result.totalBenefit,
                    benefit: result.benefitMap,
                    totalSpending: result.totalSpending,
                }
            })
        },

        categoryTotals: initial.categoryMap,
    }
});
