import "./SingleCard.css";
const SingleCard = ({ card, handleChoice, flipped, disabled }) => {

    const handleClick = () => {
        if (!disabled){
            handleChoice(card)
        }
    }
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}> 
        <img
          className="front"
          src={card.src}
          alt="front"
          width="200px"
          height="200px"
        />
        <img
          className="back"
          src="/img/cover.jpg"
          alt="back"
          width="200px"
          height="200px"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
