import React, { useState, useEffect } from "react";
import CommentCard from "../components/CommentCard";
import CommentPopup from "../components/CommentPopup";
import TravelCard from "../components/TravelCard";

function IndividualPage() {
  const [showModal, setShowModal] = useState(false);
  const [storeValue, setStoreValue] = useState([]);
  const [location, setLocation] = useState("Beautiful Destination");
  const [imageUrl, setImageUrl] = useState("https://example.com/image.jpg");
  const [description, setDescription] = useState("This is a detailed description of the location.");

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

  const handleSeeMore = () => {
    alert("See more details!");
  };

  return (
    <div style={styles.card}>
      <h1 style={styles.location}>{location}</h1>
      <img src={imageUrl} alt={location} style={styles.image} />
      <p style={styles.description}>{description}</p>
      <button style={styles.button} onClick={handleSeeMore}>
        See More
      </button>
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