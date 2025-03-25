import React, { useState, useEffect } from "react";
import CommentCard from "../components/CommentCard";
import CommentPopup from "../components/CommentPopup";
import TravelCard from "../components/TravelCard";
import { useLocation } from "react-router-dom";

function IndividualPage() {
  const {state} = useLocation();
  console.log(state.item);
  // const data = JSON.parse(state);
  const newTemp = parseFloat(state.item.temperature).toFixed(2);
  const [showModal, setShowModal] = useState(false);
  const [storeValue, setStoreValue] = useState([]);
  var newValue = parseFloat(state.item.price + (Math.random()*500)).toFixed(2);
  var imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Link_Airways_%28VH-VEC%29_Saab_340B%2C_in_Link_Airways_livery%2C_at_Wagga_Wagga_Airport.jpg'
  //const [location, setLocation] = useState("Beautiful Destination");
  //const [imageUrl, setImageUrl] = useState("https://example.com/image.jpg");
  //const [description, setDescription] = useState("This is a detailed description of the location.");

  useEffect(() => {
    const comments = localStorage.getItem("comments");
    if (comments) {
      setStoreValue(JSON.parse(comments));
    }
  }, []);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    // Refresh state or trigger data re-fetch instead of reloading.
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.logwork.com/widget/currency_converter.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={styles.card}>
      <TravelCard
        location= {`${state.item.city}, ${state.item.country}`}
        description={state.item.description}
        airfare={`$ ${newValue} USD`}
        accommodation={`$ ${newValue} USD`}
        temperature={`${newTemp}°C`}
        weather="Sunny"
        imageUrl={imageUrl}
      />
      <a
        href="https://logwork.com/free-currency-converter-calculator"
        className="currency_convertor"
        data-currencies="USD,EUR,JPY,GBP,CNY,INR"
      >
        Currency Converter
      </a>
      {storeValue.map(({ username, comment, starRating }, index) => (
        <CommentCard
          username={username}
          review={comment}
          starRating={starRating}
          key={`${username}-${starRating}-${index}`}
        />
      ))}
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handleClick}
      >
        Add Review
      </button>
      <CommentPopup show={showModal} handleClose={handleClose} />
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "600px",
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
  },
  location: {
    margin: "0 0 8px",
    fontSize: "2rem",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "8px",
  },
  description: {
    fontSize: "1rem",
    marginBottom: "8px",
  },
  button: {
    padding: "10px 16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default IndividualPage;