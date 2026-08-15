import { create } from "zustand";

type HeaderStore = {
    isHeaderVisible: boolean;
    setHeaderVisibility: (isVisible: boolean) => void;
};

export const useHeaderStore = create<HeaderStore>((set) => ({
    isHeaderVisible: true,
    setHeaderVisibility: (isVisible: boolean) => set({ isHeaderVisible: isVisible }),
}));