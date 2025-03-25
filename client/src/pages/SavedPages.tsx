import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { GET_ME } from '../utils/queries';
import { REMOVE_DESTINATION } from '../utils/mutations';
import Auth from '../utils/auth';
import { removeDestinationId } from '../utils/localStorage';

function SavedPages() {
  const { loading, data } = useQuery(GET_ME);
  const [removeTravel] = useMutation(REMOVE_DESTINATION);
  const userData = data?.me || {
    username: '',
    email: '',
    password: '',
    savedDestinations: [],
  };
  const userDataLength = Object.keys(userData).length;
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

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }
  return (
    <div>SavedPages</div>
  )
}

export default SavedPages