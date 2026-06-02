import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesState {
  propertyIds: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clearAll: () => void;
  count: () => number;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      propertyIds: [],
      toggleFavorite: (id: string) => {
        const current = get().propertyIds;
        if (current.includes(id)) {
          set({ propertyIds: current.filter((pid) => pid !== id) });
        } else {
          set({ propertyIds: [...current, id] });
        }
      },
      isFavorite: (id: string) => get().propertyIds.includes(id),
      clearAll: () => set({ propertyIds: [] }),
      count: () => get().propertyIds.length,
    }),
    { name: "nwtr-favorites" }
  )
);
