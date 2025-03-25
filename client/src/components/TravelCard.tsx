import React from "react";
import "./TravelCard.css";

type TravelCardProps = {
  location: string;
  description: string;
  airfare: string;
  accommodation: string;
  temperature: string;
  weather: string;
  imageUrl: string;
};

const TravelCard: React.FC<TravelCardProps> = ({
  location,
  description,
  airfare,
  accommodation,
  temperature,
  weather,
  imageUrl,
}) => {
  const handleSeeMore = () => {
    console.log("See More button clicked!");
  };

  return (
    <div className="travel-card">
      <img src={imageUrl} alt={location} className="travel-card-image" />
      <h2 className="travel-card-location">{location}</h2>
      <p className="travel-card-description">{description}</p>
      <p className="travel-card-airfare">Airfare: {airfare}</p>
      <p className="travel-card-accommodation">Accommodation: {accommodation}</p>
      <p className="travel-card-temperature">Temperature: {temperature}</p>
      <p className="travel-card-weather">Weather: {weather}</p>
      <button className="travel-card-button" onClick={handleSeeMore}>
        See More
      </button>
    </div>
  );
};

export default TravelCard;