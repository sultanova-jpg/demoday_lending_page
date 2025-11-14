import { create } from 'zustand'

const useDarkMode = create((set) => ({
  isDark: false,
  changeMode: () => set((state) => ({ isDark: !state.isDark})),
}))

export default useDarkMode