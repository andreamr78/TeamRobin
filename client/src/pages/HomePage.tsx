import React, { useEffect, useState } from 'react'
import data from '../assets/places.json'
import InfoCards from '../components/InfoCards'
//import type { travelFormat, TravelJson } from '../models/TravelJson';
import { Travel } from '../models/Travel';
import { SAVE_DESTINATION } from '../utils/mutations';
import { getSavedDestinationsIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';

function HomePage() {

  const [searchedTravel, setSearchedTravels] = useState<Travel[]>([]);
  // create state for holding our search field data
  const [saveDestination] = useMutation(SAVE_DESTINATION);
  // create state to hold saved bookId values
  const [savedDestinationId, setSavedDestinationId] = useState(getSavedDestinationsIds());

  useEffect(() => {
    formatData();
  }, [])
  

  function formatData (){
    //console.log(data);

    let destinations = data.map((item : Travel) => {
      return {
        travelId: item.travelId,
        photos: item.photos,
        price: item.price,
        description: item.description,
        weather: item.weather,
        //longitude: item.longitude,
        activities: item.activities,
        videos: item.videos,
        temperature: item.temperature,
        country: item.country,
        city: item.city
      }
    });

    setSearchedTravels(destinations);

  }

  const handleSave = async (travelId: number) => {
    const destToSave: any = searchedTravel.find((item) => item.travelId === travelId)!;

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
 
      await saveDestination({
        variables: { travelData: destToSave },
      });

      setSavedDestinationId([...savedDestinationId, destToSave.travelId]);
      console.log(savedDestinationId);
    } catch (err) {
      console.error(err);
    }

  }
  return (
    <div>
      {searchedTravel.map((items, i) => {
        return (
          <div>
            <h1 key={i}>{items.city}</h1>
            {/* <InfoCards props={items}/> */}

          <Button
              disabled={savedDestinationId?.some((savedDestinationId: number) => savedDestinationId === items.travelId)}
              className='btn-block btn-info'
              onClick={() => handleSave(items.travelId)}>
              {savedDestinationId?.some((savedDestinationId: number) => savedDestinationId === items.travelId)
                ? 'This book has already been saved!'
                : 'Save this Book!'}
            </Button>
          </div>
        )
      })}
    </div>
  )
}

export default HomePage