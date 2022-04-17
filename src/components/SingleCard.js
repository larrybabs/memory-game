import "./SingleCard.css"
const SingleCard = ({card}) => {
  return (
    <div className="card">
            <div>
              <img className="front" src={card.src} alt="front" width="200px" height="200px"/>
              <img className="back" src="/img/cover.jpg" alt="back"  width="200px" height="200px"/>
            </div>
    </div>
  );
}

export default SingleCard;
