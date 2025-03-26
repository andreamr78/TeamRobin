import { Schema, type Document } from 'mongoose';

export interface TravelDocument extends Document {
    travelId: Number
    photos: String[]
    price: Number
    description: String
    weather: Number
    activities: Number[]
    videos: String[]
    temperature: Number
    country: String
    city: String
}

const destinationsSchema = new Schema<TravelDocument>({
    travelId: {
        type: Number,
        required: true,
    },
    photos: [
        {
            type: String,
            required: true,
        }
    ],
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    weather: {
        type: Number,
        required: true,
    },
    activities: [
        {
            type: Number,
            required: true,
        }
    ],
    videos: [
        {
            type: String,
            required: true,
        }
    ],
    temperature: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    }
 
});

export default destinationsSchema;