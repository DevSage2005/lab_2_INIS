import { create } from 'zustand';

export const useFavoritesStore = create((set, get) => ({
  favorites: [],

  toggleFavorite: (id) => {
    const { favorites } = get();
    if (favorites.includes(id)) {
      set({ favorites: favorites.filter((favId) => favId !== id) });
    } else {
      set({ favorites: [...favorites, id] });
    }
  },
}));