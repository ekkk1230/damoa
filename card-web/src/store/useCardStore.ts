import { create } from 'zustand';
import type { Card } from '../type/Card';
import { MOCK_SPENDING } from '../data/MOCK_SPENDING';

type ModalType = 'CARD_DETAIL' | 'SPENDING_ADD' | null;

interface CardState {
    // 모달 및 선택 상태
    selectedCard: Card | null;
    modalType: ModalType;

    // 필터 상태
    searchTerm: string;
    selectedCompany: string;
    isExpanded: boolean;
    
    // 지출 내역 등록
    spedings: any[];
    addSpending: (newSpending: any) => void;

    // 액션
    openModal: (type: ModalType, data?: Card) => void;
    closeModal: () => void;
    setSearchTerm: (term: string) => void;
    setSelectedCompany: (company: string) => void;
    setIsExpanded: (expanded: boolean) => void;

    resetFilters: () => void;
}

export const useCardStore = create<CardState>((set) => ({
    selectedCard: null,
    modalType: null,

    searchTerm: '',
    selectedCompany: '전체',
    isExpanded: false,

    spedings: MOCK_SPENDING,
    addSpending: (newSpending) => set((state) => ({ spedings: [newSpending, ...state.spedings] })),

    openModal: (type, data) => set({ modalType: type, selectedCard: data || null }),
    closeModal: () => set({ modalType: null, selectedCard: null }),
    setSearchTerm: term => set({ searchTerm: term }),
    setSelectedCompany: company => set({ selectedCompany: company }),
    setIsExpanded: expanded => set({ isExpanded: expanded }),

    resetFilters: () => set({
        searchTerm: "",
        selectedCompany: "전체",
        isExpanded: false,
    }),
}))
