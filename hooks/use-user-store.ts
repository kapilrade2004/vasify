// hooks/use-user-store.ts
import { create } from 'zustand'

// Define an interface for your store's shape
interface UserStoreState {
    aiChatUsername: string;
    aiChatUserMobile: string;
    setAIChatUsername: (name: string) => void;
    setAIChatUserMobile: (mobile: string) => void;
}

// Create the shared store
export const useUserStore = create<UserStoreState>((set) => ({
    aiChatUsername: "",
    aiChatUserMobile: "",
    setAIChatUsername: (name: string) => set({ aiChatUsername: name }),
    setAIChatUserMobile: (mobile: string) => set({ aiChatUserMobile: mobile })
}))