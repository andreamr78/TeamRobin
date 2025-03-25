import React, { useState } from "react";

const destinations = [
  {
    id: 1,
    name: "Zurich, Switzerland",
    description:
      "Zurich is a city of modern architecture and world-class innovation...",
    pricePerPerson: 1300,
    pricePerNight: 800,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "New Mexico, USA",
    description:
      "Every aspect of travel in New Mexico is defined by both culture...",
    pricePerPerson: 300,
    pricePerNight: 200,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Okinawa, Japan",
    description:
      "From exploring cultural sites and ancient ruins to diving into...",
    pricePerPerson: 2500,
    pricePerNight: 745,
    image: "https://via.placeholder.com/200",
  },
];

function HomePage() {
  const [search, setSearch] = useState(""); // Estado para la búsqueda
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);

    const filtered = destinations.filter(
      (destination) =>
        destination.name.toLowerCase().includes(query) ||
        destination.description.toLowerCase().includes(query)
    );

    setFilteredDestinations(filtered);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Search destinations..."
        value={search}
        onChange={handleSearch}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {/* Lista de destinos filtrados */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                width: "250px",
                borderRadius: "10px",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              <img
                src={destination.image}
                alt={destination.name}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
              <p>💰 {destination.pricePerPerson}$ per person</p>
              <p>🏨 {destination.pricePerNight}$ per night</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;