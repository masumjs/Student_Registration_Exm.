import mongoose from "mongoose"

const clientOptions = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
  dbName: "StudentRegistration",
};

/**
 * Connects to the MongoDB database using provided connection string.
 **/

const connectDB = async (connectionURL) => {
  try {
    await mongoose.connect(connectionURL, clientOptions);
    console.log("Connect to MongoDB");
  } catch (error) {
    console.error("Error connecting to mongodb", error.message);
    throw Error(error.message);
  }
};

/**
 * Disconnect from the MongoDB database.
 **/

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnect from MongoDB");
  } catch (error) {
    console.error("Error disconnecting from mongodb", error.message);
    throw error;
  }
};

export { connectDB, disconnectDB };
