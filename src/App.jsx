import SpeakersSection from './components/SpeakerCard/SpeakersSection.jsx';
import FaqSection from './components/FaqSection/FaqSection.jsx';
import Favorites from './components/Favorites/Favorites.jsx'; // <--- Импорт
import './App.css';

export default function App() {
  const handleRegister = () => {
    console.log('Записаться на конференцию');
  };

  return (
    <main className="app">
      <header style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        <Favorites />
      </header>

      <SpeakersSection onRegister={handleRegister} />
      <FaqSection />
      
    </main>
  );
}