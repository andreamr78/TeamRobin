import React, { useEffect, useState } from 'react';
import data from '../assets/places.json';
import InfoCards from '../components/InfoCards';
import { Travel } from '../models/Travel';
import { SAVE_DESTINATION } from '../utils/mutations';
import { getSavedDestinationsIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { Button } from 'react-bootstrap';

function HomePage() {
  const [searchedTravel, setSearchedTravels] = useState<Travel[]>([]);
  const [saveDestination] = useMutation(SAVE_DESTINATION);
  const [savedDestinationId, setSavedDestinationId] = useState(getSavedDestinationsIds());

  useEffect(() => {
    const destinations = data.map((item: Travel) => ({
      travelId: item.travelId,
      photos: item.photos,
      price: item.price,
      description: item.description,
      weather: item.weather,
      activities: item.activities,
      videos: item.videos,
      temperature: item.temperature,
      country: item.country,
      city: item.city
    }));
    setSearchedTravels(destinations);
  }, []);

  const handleSave = async (travelId: number) => {
    const destToSave = searchedTravel.find(item => item.travelId === travelId);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token || !destToSave) return;

    try {
      await saveDestination({
        variables: { travelData: destToSave }
      });
      setSavedDestinationId((prev: any) => [...prev, destToSave.travelId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {searchedTravel.map((item, i) => (
        <div key={i}>
          <h1>{item.city}</h1>
          {/* Uncomment if you want to use InfoCards */}
          {/* <InfoCards props={item} /> */}

          <Button
            disabled={savedDestinationId.includes(item.travelId)}
            className="btn-block btn-info"
            onClick={() => handleSave(item.travelId)}
          >
            {savedDestinationId.includes(item.travelId)
              ? 'This destination has already been saved!'
              : 'Save this destination!'}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
