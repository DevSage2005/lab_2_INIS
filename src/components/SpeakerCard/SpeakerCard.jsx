import { Card } from 'react-bootstrap';
import { useFavoritesStore } from '../../store/useFavoritesStore';


export default function SpeakerCard({
  id,
  name,
  role,
  company,
  description,
  image,
  highlighted = false,
}) {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const isFavorite = favorites.includes(id);

  return (
    <Card className={`h-100 shadow-sm ${highlighted ? 'border-warning' : ''}`}>
      <Card.Img 
        variant="top" 
        src={image} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{role} · {company}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        
        <div className="mt-auto">
          <button
            className={`btn w-100 ${isFavorite ? 'btn-warning' : 'btn-outline-secondary'}`}
            onClick={() => toggleFavorite(id)}
          >
            {isFavorite ? '★ В избранном' : '☆ В избранное'}
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}