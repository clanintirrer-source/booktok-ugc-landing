import { create } from 'zustand';

interface AppState {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollPosition: number;
  setScrollPosition: (position: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (open) => set({ isMenuOpen: open }),
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
  scrollPosition: 0,
  setScrollPosition: (position) => set({ scrollPosition: position }),
}));
