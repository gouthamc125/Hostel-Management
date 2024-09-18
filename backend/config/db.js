// db.js

import mongoose from 'mongoose';

// Create a function to connect to the database
const connectDB = async () => {
  try {
    // Establish connection to MongoDB using the MONGO_URI from .env file
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true, // Note: `useCreateIndex` is deprecated in newer versions of Mongoose
    });

    // Log the connection details
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Log any connection errors
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
