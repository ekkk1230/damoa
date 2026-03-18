import { create } from 'zustand';
import type { Card } from '../type/Card';
import { MOCK_SPENDING } from '../data/MOCK_SPENDING';

type ModalType = 'CARD_DETAIL' | 'SPENDING_ADD' | null;

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

    
    // 지출 내역 등록
    spendings: any[];
    addSpending: (newSpending: any) => void;
}

export const useCardStore = create<CardState>((set) => ({
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

    spendings: MOCK_SPENDING,
    addSpending: (newSpending) => set((state) => ({ spendings: [newSpending, ...state.spendings] })),
}))
