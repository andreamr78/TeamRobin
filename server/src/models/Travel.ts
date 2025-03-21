import { Schema, type Document } from 'mongoose';

export interface TravelDocument extends Document {
    travelId: String
    location: String
    description: String
    ticketPrice: String
    hotelPrice: String
    link: String
}

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const destinationsSchema = new Schema<TravelDocument>({
    travelId: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ticketPrice: {
        type: String,
        required: true,
    },
    hotelPrice: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
});

export default destinationsSchema;