import { Schema, type Document } from 'mongoose';

export interface TravelDocument extends Document {
  travelId: string;
  location: string;
  description: string;
  ticketPrice: string;
  hotelPrice: string;
  link: string;
}

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
  },
});

export default destinationsSchema;