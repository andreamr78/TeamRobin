import React from 'react';

const InfoCards: React.FC<InfoCardsProps> = ({ cards }) => {
    return (
        <div className="cards-container">
            {cards.map((card) => (
                <div className="card" key={card.travelId}>
                    <h3>{card.location}</h3>
                    <p>{card.description}</p>
                    <p>Ticket Price: {card.ticketPrice}</p>
                    <p>Hotel Price: {card.hotelPrice}</p>
                    <a href={card.link} target="_blank" rel="noopener noreferrer" className="explore-button">Explore</a>
                </div>
            ))}
        </div>
    );
};

export default InfoCards;
