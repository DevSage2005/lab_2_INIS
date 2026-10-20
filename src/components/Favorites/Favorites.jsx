import { useFavoritesStore } from '../../store/useFavoritesStore';
import './Favorites.css';

export default function Favorites() {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <div className="favorites">
      <span className="favorites__icon">★</span>
      <span className="favorites__count">Избранное: {favorites.length}</span>
    </div>
  );
}