import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($input: UserInput!) {
    addUser(input: $input) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_DESTINATION = gql`
  mutation saveDestination($travelData: travelInput!) {
    saveDestination(travelData: $travelData) {
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

export const REMOVE_DESTINATION = gql`
  mutation removeDestination($travelId: Float!) {
    removeDestination(travelId: $travelId) {
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