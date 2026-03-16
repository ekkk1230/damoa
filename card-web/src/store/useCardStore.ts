import { create } from 'zustand';
import type { Card } from '../type/Card';

interface CardState {
    // 모달 및 선택 상태
    selectedCard: Card | null;
    isModalOpen: boolean;

    // 필터 상태
    searchTerm: string;
    selectedCompany: string;
    isExpanded: boolean;

    // 액션
    openModal: (card: Card) => void;
    closeModal: () => void;
    setSearchTerm: (term: string) => void;
    setSelectedCompany: (company: string) => void;
    setIsExpanded: (expanded: boolean) => void;

    resetFilters: () => void;
}

export const useCardStore = create<CardState>((set) => ({
    selectedCard: null,
    isModalOpen: false,

    searchTerm: '',
    selectedCompany: '전체',
    isExpanded: false,

    openModal: card => set({ selectedCard: card, isModalOpen: true }),
    closeModal: () => set({ selectedCard: null, isModalOpen: false }),
    setSearchTerm: term => set({ searchTerm: term }),
    setSelectedCompany: company => set({ selectedCompany: company }),
    setIsExpanded: expanded => set({ isExpanded: expanded }),

    resetFilters: () => set({
        searchTerm: "",
        selectedCompany: "전체",
        isExpanded: false,
    }),
}))
