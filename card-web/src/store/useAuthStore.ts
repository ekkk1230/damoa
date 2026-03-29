import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
    id: string;
    name: string;
    joinDate: string;
}

interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
    isLoading: boolean; 

    login: (id: string, password: string) => Promise<boolean>;
    logout: () => void;
    signup: (id: string, password: string, name: string) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            isLoggedIn: false,
            isLoading: false,

            login: async (id, password) => {
                set({ isLoading: true });

                if (id === 'test' && password === '1234') {
                    set({ 
                        user: {
                            id: 'test',
                            name: '테스트 유저',
                            joinDate: new Date().toISOString().split('T')[0],
                        },
                        isLoading: false,
                        isLoggedIn: true,
                    });
                    return true; 
                } else {
                    set({ isLoading: false });
                    return false;
                }
            },

            logout: () => {
                set({ 
                    user: null,
                    isLoggedIn: false,
                    isLoading: false
                })
            },

            signup: async (id, password, name) => {
                set({ isLoading: true });
                // 가입 로직 구현...
                set({ isLoading: false });
                return true;
            }
        }),
        { name: "auth-storage" }
    )
);