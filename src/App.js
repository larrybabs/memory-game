
import { useState } from 'react';
import './App.css';

const cardImages = [
  { "src": "/img/car.jpg" },
  { "src": "/img/disk.jpg" },
  { "src": "/img/golden-egg.jpg" },
  { "src": "/img/mouse.jpg" },
  { "src": "/img/pc.jpg" },
  { "src": "/img/youTube.jpg" },
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New game</button>

      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="front" width="200px" height="200px"/>
              <img className="back" src="/img/cover.jpg" alt="back"  width="200px" height="200px"/>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
} 

export default App;
