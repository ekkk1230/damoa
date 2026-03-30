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

    isInitialized: boolean;
    setInitialized: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
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
                
                const newUser: User = {
                    id,
                    name,
                    joinDate: new Date().toISOString().split('T')[0],
                }

                set({ 
                    user: newUser,
                    isLoggedIn: true,
                    isLoading: false 
                });
                return true;
            },

            isInitialized: false,
            setInitialized: (value) => set({ isInitialized: value }),


        }),
        { name: "auth-storage" }
    )
);