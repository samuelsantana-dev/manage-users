const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const connectDb = async () => {
  try {
    const dbConnection = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.urxi6ud.mongodb.net/?appName=Cluster0`
    );
    

    console.log('✅ MongoDB connected:', dbConnection.connection.host);
    return dbConnection;
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
  }
};

export default connectDb;
