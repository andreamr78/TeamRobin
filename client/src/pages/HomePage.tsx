
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


const HomePage = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 3;

    const fetchCards = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/destinations', {
                params: { page: currentPage, limit: itemsPerPage, search: searchQuery }
            });
            setCards(response.data.destinations);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch data');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCards();
    }, [currentPage, searchQuery]);

    const handleNextPage = () => setCurrentPage((prev) => prev + 1);
    const handlePreviousPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <TopBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <InfoCards cards={cards} />
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <button onClick={handlePreviousPage} disabled={currentPage === 1} style={{ marginRight: '10px' }}>
                    Previous
                </button>
                <button onClick={handleNextPage}>Next</button>
            </div>
        </div>
    );
};

export default HomePage;

