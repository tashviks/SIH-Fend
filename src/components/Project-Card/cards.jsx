import React, { useState } from 'react';
import Card from './card.jsx';
import '../../css/cards.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';

const Cards = ({ids = [["abc" , img1, img2, img3,img4,img5,img6,img7,img8],["bcd" , img1, img2, img3,img4,img5,img6,img7,img8],["cde" , img1, img2, img3,img4,img5,img6,img7,img8],["efg" , img1, img2, img3,img4,img5,img6,img7,img8],["ghi" , img1, img2, img3,img4,img5,img6,img7,img8]]}) => {
  const defaultImages = [img1, img2, img3,img4,img5,img6,img7,img8];
  const [visibleCards, setVisibleCards] = useState(1);
  const [cards, setCards] = useState(defaultImages);
  const showMoreCards = () => {
    setVisibleCards(ids.length - 2);
  };

  const addCard = () => {
    const randomImageIndex = Math.floor(Math.random() * defaultImages.length);
    const newCardImage = defaultImages[randomImageIndex];
    if (visibleCards <= 4 || visibleCards % 4 !== 0) {
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
          {ids.map((val) => (
            <Card cardId={val[0]} img={val.slice(1,val.length)}
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
    </>
  );
};

export default Cards;
