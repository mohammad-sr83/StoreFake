// store/useFilterStore.ts
import { create } from "zustand";

export type FilterValue = string | string[] | boolean | null;

interface FilterState {
  filters: Record<string, FilterValue>;
  setFilter: (id: string, value: FilterValue) => void;
  clearFilters: () => void;
  getActiveCount: () => number; // ✅ به‌جای getter
}

export const useFilterStore = create<FilterState>((set, get) => ({
  filters: {},

  setFilter: (id, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [id]: value,
      },
    })),

  clearFilters: () => set({ filters: {} }),

  getActiveCount: () => {
    const filters = get().filters;
    let count = 0;

    for (const key in filters) {
      const val = filters[key];
      if (
        (Array.isArray(val) && val.length > 0) ||
        (typeof val === "boolean" && val === true) ||
        (typeof val === "string" && val.trim() !== "")
      ) {
        count++;
      }
    }

    return count;
  },
}));
