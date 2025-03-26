import React, { useState, useEffect } from "react";
import CommentCard from "../components/CommentCard";
import CommentPopup from "../components/CommentPopup";
import TravelCard from "../components/TravelCard";
import { useLocation } from "react-router-dom";
import WeatherWidget from "../components/WeatherWidget";
import '../assets/styles/individualPage.css'
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import TopBar from "../components/TopBar";

function IndividualPage() {
  const {state} = useLocation();
  console.log(state.item);
  let navigate = useNavigate();
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
    <div className="wholePage">
      <TopBar />
      <Button onClick={() => navigate(-1)}>Back</Button> 
      <Row>
          <Col className="col-1">
          <Card id="travel-card">
            <TravelCard
                location= {`${state.item.city}, ${state.item.country}`}
                description={state.item.description}
                airfare={`$ ${newValue} USD`}
                accommodation={`$ ${newValue} USD`}
                temperature={`${newTemp}°C`}
                weather="Sunny"
                imageUrl={imageUrl}
              />
        </Card>
        </Col>
        <Col className="col-2">
          <a
            href="https://logwork.com/free-currency-converter-calculator"
            className="currency_convertor"
            data-currencies="USD,EUR,JPY,GBP,CNY,INR"
          >
            Currency Converter
          </a>
          <WeatherWidget city={state.item.city}/>
          <div className="btn-div">
            <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={handleClick}
              >
                Add Review
              </button>
            </div>
      </Col>
    </Row>
    <Row className="btn-row">
    {storeValue.map(({ username, comment, starRating }, index) => (
          <CommentCard
            username={username}
            review={comment}
            starRating={starRating}
            key={`${username}-${starRating}-${index}`}
          />
        ))}
        <CommentPopup show={showModal} handleClose={handleClose} />
    </Row>
    </div>
  );
}

export default IndividualPage;