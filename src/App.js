
import { useState, useEffect } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

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
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)
  const handleChoice = (card) =>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo){
      if (choiceOne.src === choiceTwo.src){
        console.log('Match')
        resetTurn()
      } else {
        console.log('no match')
        resetTurn()
      }
    }
  }, [choiceOne,choiceTwo])
 
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
}
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} 
          card={card}
          handleChoice={handleChoice}
          />

         
        ))}

      </div>
    </div>
  );
} 

export default App;
