import SpeakersSection from './components/SpeakerCard/SpeakersSection.jsx';
import FaqSection from './components/FaqSection/FaqSection.jsx';
import './App.css';

export default function App() {
  const handleRegister = () => {
    console.log('Записаться на конференцию');
  };

  return (
    <main className="app">
      <SpeakersSection onRegister={handleRegister} />
      <FaqSection />
    </main>
  );
}