import SpeakerCard from '../SpeakerCard/SpeakerCard.jsx';
import Button from '../Button/Button.jsx';
import './SpeakersSection.css';


import svetlanaImg from '../../assets/svetlana.svg';
import elenaImg from '../../assets/elena.svg';
import ilyaImg from '../../assets/ilya.svg';
import ekaterynaImg from '../../assets/ekateryna.svg';

const SPEAKERS = [
  {
    id: 1,
    name: 'Светлана Морозова',
    role: 'CTO',
    company: 'Cloudline',
    description: 'Создаёт масштабируемые продукты и команды, которые меняют индустрию.',
    image: svetlanaImg,
  },
  {
    id: 2,
    name: 'Елена Ким',
    role: 'AI Research Lead',
    company: 'NeuralWorks',
    description: 'Создаёт масштабируемые продукты и команды, которые меняют индустрию.',
    image: elenaImg,
    highlighted: true,
  },
  {
    id: 3,
    name: 'Илья Соколов',
    role: 'VP Product',
    company: 'Flowbase',
    description: 'Создаёт масштабируемые продукты и команды, которые меняют индустрию.',
    image: ilyaImg,
  },
  {
    id: 4,
    name: 'Екатерина Ивановна',
    role: 'Staff Engineer',
    company: 'Hexa',
    description: 'Создаёт масштабируемые продукты и команды, которые меняют индустрию.',
    image: ekaterynaImg,
  },
];

export default function SpeakersSection({ onRegister }) {
  return (
    <section className="speakers-section">
      <header className="speakers-section__header">
        <p className="speakers-section__eyebrow">ЭКСПЕРТЫ И ПРАКТИКИ</p>
        <h2 className="speakers-section__title">Спикеры NextConf</h2>
        <p className="speakers-section__subtitle">
          Лидеры инженерных команд, исследователи и продуктовые визионеры —
          без теории ради теории.
        </p>
      </header>

      <div className="speakers-section__grid">
        {SPEAKERS.map((speaker) => (
          <SpeakerCard
            key={speaker.id}
            id={speaker.id} // <--- Передаем ID
            name={speaker.name}
            role={speaker.role}
            company={speaker.company}
            description={speaker.description}
            image={speaker.image}
            highlighted={speaker.highlighted}
          />
        ))}
      </div>

      <div className="speakers-section__cta">
        <Button variant="primary" size="lg" onClick={onRegister}>
          Записаться на конференцию
        </Button>
      </div>
    </section>
  );
}