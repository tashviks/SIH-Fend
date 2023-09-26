import React, { useState } from 'react';
import Card from './card.jsx';
import '../../css/cards.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';

const Cards = () => {
  const defaultImages = [img1, img2, img3];
  const [visibleCards, setVisibleCards] = useState(4);
  const [cards, setCards] = useState(defaultImages);
  const [newCard, setNewCard] = useState(null);

  const showMoreCards = () => {
    setVisibleCards(cards.length);
  };

  const addCard = () => {
    const randomImageIndex = Math.floor(Math.random() * defaultImages.length);
    const newCardImage = defaultImages[randomImageIndex];
    
    if (visibleCards <= 4 || visibleCards % 4 != 0) {
      // If there are less than 4 visible cards, add the new card and update visibleCards
      setCards([...cards, newCardImage]);
      setVisibleCards(visibleCards + 1);
    } else {
      // If there are already 4 visible cards, add the new card to the cards array
      setCards([...cards, newCardImage]);
    }
  };

  return (
    <>
      <div className="parent-container">
        
        <div className="card-container">
          {cards.slice(0, visibleCards).map((img, index) => (
            <Card img={defaultImages}
            className={`card ${visibleCards <= 4 ? 'show' : ''}`}/>
          ))}
        </div>
      </div>
      {cards.length > 4 && visibleCards < cards.length && (
        <button onClick={showMoreCards} className="more">
          Show More
        </button>
      )}
      <button onClick={addCard} className="more">
        Add Card
      </button>
      {newCard && visibleCards <= 4 && <Card img={newCard} className="fade-in"/>}
    </>
  );
};

export default Cards;
