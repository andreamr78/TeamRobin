import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedDestinations {
        travelId
        photos
        price
        description
        weather
        activities
        videos
        temperature
        country
        city
      }
    }
  }
`;