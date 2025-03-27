import dotenv from 'dotenv';
dotenv.config(); // Ensure .env variables are loaded

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI; 
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined in the environment variables');
    }

    await mongoose.connect(mongoUri, {});
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;
