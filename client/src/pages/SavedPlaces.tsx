import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { GET_ME } from '../utils/queries';
import { REMOVE_DESTINATION } from '../utils/mutations';
import Auth from '../utils/auth';
import { removeDestinationId } from '../utils/localStorage';
import InfoCards from '../components/InfoCards';
import { Card, Button, Container } from 'react-bootstrap';
import '../assets/styles/homePage.css'
import TopBar from '../components/TopBar';

function SavedPlaces() {
  const {  data } = useQuery(GET_ME);
  const [removeTravel] = useMutation(REMOVE_DESTINATION);
  const userData = data?.me || {
    username: '',
    email: '',
    password: '',
    savedDestinations: [],
  };
  //const userDataLength = Object.keys(userData).length;
  const handleDelete = async (travelId: number) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removeTravel({
        variables: { travelId },
      });

      // upon success, remove book's id from localStorage
      removeDestinationId(travelId);
    } catch (err) {
      console.error(err);
    }
  };

  return (
   <div>
      <TopBar />
     <Container>
      <div id="product-featured-box">
      {userData.savedDestinations.map((item:any) => {
        return (
          <Card id='card-style'>
          <InfoCards data={item}/>
          <div>
          <Button
              className='btn-block btn-danger'
              onClick={() => handleDelete(item.travelId)}
            >
              Delete this!
            </Button>
        </div>
        </Card>
        )
      })}
    </div>
    </Container>
   </div>
  )
}

export default SavedPlaces