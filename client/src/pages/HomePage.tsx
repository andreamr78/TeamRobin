import "../assets/styles/homePage.css";
import React, { useEffect, useState } from "react";
import data from "../assets/places.json";
import InfoCards from "../components/InfoCards";
import { Travel } from '../models/Travel';
import { SAVE_DESTINATION } from '../utils/mutations';
import { getSavedDestinationsIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { Link } from "react-router-dom";

import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";
import TopBar from "../components/TopBar";

function HomePage() {
  const [searchedTravel, setSearchedTravels] = useState<Travel[]>([]);
  // create state for holding our search field data
  const [saveDestination] = useMutation(SAVE_DESTINATION);
  // create state to hold saved bookId values
  const [savedDestinationId, setSavedDestinationId] = useState(
    getSavedDestinationsIds()
  );

  useEffect(() => {
    formatData();
  }, []);

  function formatData() {
    let destinations = data.map((item: Travel) => {
      return {
        travelId: item.travelId,
        photos: item.photos,
        price: item.price,
        description: item.description,
        weather: item.weather,
        activities: item.activities,
        videos: item.videos,
        temperature: item.temperature,
        country: item.country,
        city: item.city,
      };
    });

    setSearchedTravels(destinations);
  }

  const handleSave = async (travelId: number) => {
    const destToSave: any = searchedTravel.find(
      (item) => item.travelId === travelId
    )!;

    // const token = Auth.loggedIn() ? Auth.getToken() : null;

    // if (!token) {
    //   return false;
    // }

    setSavedDestinationId([...savedDestinationId, destToSave.travelId]);

    // try {
    //   await saveDestination({
    //     variables: { travelData: destToSave },
    //   });

    //   setSavedDestinationId([...savedDestinationId, destToSave.travelId]);
    //   //console.log(savedDestinationId);
    // } catch (err) {
    //   console.error(err);
    // }
  };
  return (
    <Container>
      <TopBar />
      <div id="product-featured-box">
      {searchedTravel.map((item, i) => {
        return (
          <Card key={i} id='card-style'>
          <InfoCards data={item}/>
          <div>
          <Button
              disabled={savedDestinationId?.some((savedDestinationId: number) => savedDestinationId === item.travelId)}
              className='btn-block btn-info'
              onClick={() => handleSave(item.travelId)}>
              {savedDestinationId?.some((savedDestinationId: number) => savedDestinationId === item.travelId)
                ? 'This destination has already been saved!'
                : 'Save this!'}
            </Button>
            <Button>
              <Link to={item.city} state={{item: item}}> See More</Link>
            </Button>
        </div>
        </Card>
        )
      })}
    </div>
    </Container>
  );
}

export default HomePage;
