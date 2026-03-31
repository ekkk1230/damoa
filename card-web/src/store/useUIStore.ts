import { create } from "zustand";

interface UIState {
    modalType: string | null;
    modalData: any;
    openModal: (type: string, data?: any) => void;
    closeModal: () => void;
}

export const useUIStore = create<UIState>((set) => {
    return {
        modalType: null,
        modalData: null,
        openModal: (type, data) => {
            set({ modalType: type, modalData: data, })
        },
        closeModal: () => {
            set({ modalType: null, modalData: null, })
        }
    }
})