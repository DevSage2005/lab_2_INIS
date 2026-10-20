import { useFavoritesStore } from '../../store/useFavoritesStore';
import './SpeakerCard.css';

export default function SpeakerCard({
  id, // <--- Добавили id
  name,
  role,
  company,
  description,
  image,
  highlighted = false,
  variant = 'default',
}) {
  // Подключаемся к глобальному хранилищу
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  // Проверяем, в избранном ли эта карточка
  const isFavorite = favorites.includes(id);

  return (
    <article
      className={`speaker-card speaker-card--${variant} ${highlighted ? 'speaker-card--highlighted' : ''}`}
    >
      <img
        className="speaker-card__image"
        src={image}
        alt={name}
        loading="lazy"
      />

      <h3 className="speaker-card__name">{name}</h3>
      <p className="speaker-card__role">{role} · {company}</p>
      <p className="speaker-card__description">{description}</p>

      <div className="speaker-card__socials">
        {/* ... соцсети ... */}
      </div>

      {/* Новая кнопка избранного */}
      <button
        className={`speaker-card__fav-btn ${isFavorite ? 'is-active' : ''}`}
        onClick={() => toggleFavorite(id)}
      >
        {isFavorite ? '★ В избранном' : '☆ В избранное'}
      </button>
    </article>
  );
}