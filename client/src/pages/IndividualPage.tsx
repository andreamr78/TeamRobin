import React, { useEffect } from 'react';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.logwork.com/widget/currency_converter.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
    imageUrl,
  }) => {
  const handleSeeMore = () => {
    console.log("See More button clicked!"); 
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
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "350px",
    fontFamily: "Arial, sans-serif",
  },
  location: {
    margin: "0 0 8px",
    fontSize: "1.5rem",
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
  details: {
    marginTop: "12px",
    fontSize: "0.9rem",
  },
};

export default TravelCard;

// }

//   return (
//     <div>
//       <div>IndividualPage</div>
//       <div style={styles.card}>
//       <img src={imageUrl} alt={destination} style={styles.image} />
//       <h2>{destination}</h2>
//       <p>{description}</p>
//       <div style={styles.section}>
//         <h3>Travel Costs</h3>
//         <p>{travelCosts.perPerson} per person</p>
//         <p>{travelCosts.perNight} per night</p>
//         <Button variant="primary" onClick={moreInfo}>See More</Button>
//       </div>
//       <div style={styles.section}>
//         <h3>Money Exchange</h3>
//         <p>{moneyExchange}</p>
//       </div>
//        <a href="https://logwork.com/free-currency-converter-calculator" className="currency_convertor" 
//         data-currencies="USD,EUR,JPY,GBP,CNY,INR">
//         Currency Converter
//        </a>
//     </div>
//   );
// }

export default IndividualPage;
