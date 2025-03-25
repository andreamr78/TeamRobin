import { Schema, type Document } from 'mongoose';

export interface TravelDocument extends Document {
    travelId: Float64Array
    photos: String[]
    price: Float64Array
    description: String
    weather: Float64Array
    activities: Float64Array[]
    videos: String[]
    temperature: Float64Array
    country: String
    city: String
}

const destinationsSchema = new Schema<TravelDocument>({
    travelId: {
        type: Float64Array,
        required: true,
    },
    photos: [
        {
            type: String,
            required: true,
        }
    ],
    price: {
        type: Float64Array,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    weather: {
        type: Float64Array,
        required: true,
    },
    activities: [
        {
            type: Float64Array,
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
        type: Float64Array,
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