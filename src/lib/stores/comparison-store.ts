import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ComparisonState {
  propertyIds: string[];
  addProperty: (id: string) => void;
  removeProperty: (id: string) => void;
  clearAll: () => void;
  isSelected: (id: string) => boolean;
  canAdd: () => boolean;
}

export const useComparisonStore = create<ComparisonState>()(
  persist(
    (set, get) => ({
      propertyIds: [],
      addProperty: (id: string) => {
        const current = get().propertyIds;
        if (current.length >= 3 || current.includes(id)) return;
        set({ propertyIds: [...current, id] });
      },
      removeProperty: (id: string) => {
        set({ propertyIds: get().propertyIds.filter((pid) => pid !== id) });
      },
      clearAll: () => set({ propertyIds: [] }),
      isSelected: (id: string) => get().propertyIds.includes(id),
      canAdd: () => get().propertyIds.length < 3,
    }),
    { name: "nwtr-comparison" }
  )
);
