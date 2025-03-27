import { gql } from 'graphql-tag';

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    savedDestinations: [Travel]
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
    savedDestinations: [travelInput] 
  }

  input travelInput {
    travelId: Float
    photos: [String]
    price: Float
    description: String
    weather: Float
    activities: [Float]
    videos: [String]
    temperature: Float
    country: String
    city: String
  }

  type Travel {
    travelId: Float
    photos: [String]
    price: Float
    description: String
    weather: Float
    activities: [Float]
    videos: [String]
    temperature: Float
    country: String
    city: String
  }
    
  type Auth {
    token: ID!
    user: User
  }
    
  type Query {
    me: User
    getSavedDestinations: [Travel]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(input: UserInput!): Auth
    saveDestination(travelData: travelInput!): User
    removeDestination(travelId: Float!): User
  }

`;

export default typeDefs;