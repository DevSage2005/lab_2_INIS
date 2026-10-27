import { Container, Row, Col } from 'react-bootstrap';
import SpeakerCard from './SpeakerCard.jsx';
import Button from '../Button/Button.jsx';


import svetlanaImg from '../../assets/svetlana.svg';
import elenaImg from '../../assets/elena.svg';
import ilyaImg from '../../assets/ilya.svg';
import ekaterynaImg from '../../assets/ekateryna.svg';

const SPEAKERS = [
  { id: 1, name: 'Светлана Морозова', role: 'CTO', company: 'Cloudline', description: 'Создаёт...', image: svetlanaImg },
  { id: 2, name: 'Елена Ким', role: 'AI Research Lead', company: 'NeuralWorks', description: 'Создаёт...', image: elenaImg, highlighted: true },
  { id: 3, name: 'Илья Соколов', role: 'VP Product', company: 'Flowbase', description: 'Создаёт...', image: ilyaImg },
  { id: 4, name: 'Екатерина Ивановна', role: 'Staff Engineer', company: 'Hexa', description: 'Создаёт...', image: ekaterynaImg },
];

export default function SpeakersSection({ onRegister }) {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <p className="text-uppercase text-warning fw-bold">ЭКСПЕРТЫ И ПРАКТИКИ</p>
        <h2 className="display-5 fw-bold">Спикеры NextConf</h2>
        <p className="text-muted">Лидеры инженерных команд, исследователи и продуктовые визионеры — без теории ради теории.</p>
      </div>

      <Row xs={1} md={2} lg={4} className="g-4">
        {SPEAKERS.map((speaker) => (
          <Col key={speaker.id}>
            <SpeakerCard
              id={speaker.id}
              name={speaker.name}
              role={speaker.role}
              company={speaker.company}
              description={speaker.description}
              image={speaker.image}
              highlighted={speaker.highlighted}
            />
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5">
        <Button variant="warning" size="lg" onClick={onRegister}>
          Записаться на конференцию
        </Button>
      </div>
    </Container>
  );
}