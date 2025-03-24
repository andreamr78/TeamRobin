import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        username
        email
      }
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($input: UserInput!) {
    addUser(input: $input) {
      user {
        _id
        username
        email
      }
      token
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
        location
        description
        ticketPrice
        hotelPrice
        link
      }
    }
  }
`;

export const REMOVE_DESTINATION = gql`
  mutation removeDestination($travelId: String!) {
    removeDestination(travelId: $travelId) {
      _id
      username
      email
      savedDestinations {
        travelId
        location
        description
        ticketPrice
        hotelPrice
        link
      }
    }
  }
`;