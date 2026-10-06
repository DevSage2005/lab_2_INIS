import './SpeakerCard.css';

export default function SpeakerCard({
  name,
  role,
  company,
  description,
  image,
  highlighted = false,
  variant = 'default',
}) {
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
    </article>
  );
}