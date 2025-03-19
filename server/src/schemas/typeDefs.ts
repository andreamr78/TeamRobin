import { gql } from 'graphql-tag';

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    savedDestinations: [Destinations]
  }

  input UserInput {
    username: String
    email: String
    password: String
  }

  input travelInput {
    travelId: String
    location: String
    description: String
    ticketPrice: String
    hotelPrice: String
    link: String
  }

  type Travel {
    travelId: String
    location: String
    description: String
    ticketPrice: String
    hotelPrice: String
    link: String
  }
    
  type Auth {
    token: ID!
    user: User
  }
    
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(input: UserInput!): Auth
    saveDestination(travelData: travelInput!): User
    removeDestination(travelId: String!): User
  }

`;

export default typeDefs;