import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
    id: number;   
    name: string;
    joinDate: string;
    gender: string;
    birthDate: string;
    age: number
}

interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
    isLoading: boolean; 
    login: (id: string, password: string) => Promise<boolean>;
    logout: () => void;
    signup: (id: string, password: string, name: string, gender: string, birthDate: string) => Promise<boolean>;
    isInitialized: boolean;
    setInitialized: (value: boolean) => void;
}

const getUserAge = (birthDateStr: String) => {
    if (!birthDateStr) return 0;
    const [year, month, day] = birthDateStr.split('-').map(Number);
    const today = new Date();
    let age = today.getFullYear() - year;
    const m = (today.getMonth() + 1) - month;
    if (m < 0 || (m === 0 && today.getDate() < day)) age--;

    return age;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            userAge: 0,
            isLoggedIn: false,
            isLoading: false,

            login: async (loginId, password) => {
                set({ isLoading: true });
                try {
                    const response = await fetch("http://localhost:8080/damoa/auth/login", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ loginId, password }),
                    });

                    if (response.ok) {
                        const userData = await response.json();
                        const age = getUserAge(userData.birthDate);
                        set({ 
                            user: {
                                id: userData.id,
                                name: userData.name,
                                joinDate: userData.joinDate,
                                gender: userData.gender,
                                birthDate: userData.birthDate,
                                age: age,
                            },
                            isLoggedIn: true,
                            isLoading: false,
                        });
                        return true;
                    }
                    throw new Error("로그인 실패");
                } catch (error) {
                    set({ isLoading: false });
                    return false;
                }
            },

            logout: () => {
                set({ user: null, isLoggedIn: false, isLoading: false });
                localStorage.removeItem("auth-storage");
            },

            signup: async (loginId, password, name, gender, birthDate) => {
                set({ isLoading: true });
                try {
                    const response = await fetch("http://localhost:8080/damoa/auth/signup", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ loginId, password, name, gender, birthDate }),
                    });

                    if (response.ok) {
                        const userData = await response.json();
                        const age = getUserAge(userData.birthDate);
                        set({ 
                            user: {
                                id: userData.id,
                                name: userData.name,
                                joinDate: userData.joinDate,
                                gender: userData.gender,
                                birthDate: userData.birthDate,
                                age: age,
                            },
                            isLoggedIn: true, 
                            isLoading: false,
                        });
                        return true;
                    }
                    throw new Error("회원가입 실패");
                } catch (error) {
                    console.error("Signup Error:", error);
                    set({ isLoading: false });
                    return false;
                }
            },

            isInitialized: false,
            setInitialized: (value) => set({ isInitialized: value }),
        }),
        { name: "auth-storage" }
    )
);