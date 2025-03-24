import { gql } from 'graphql-tag';

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    savedDestinations: [Travel]
  }

  input UserInput {
    username: String
    email: String
    password: String
  }

  input travelInput {
    travelId: String
    photos: string
    description: string
    country: string
    city: string
  }

  type Travel {
    travelId: String
    photos: string
    description: string
    country: string
    city: string
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