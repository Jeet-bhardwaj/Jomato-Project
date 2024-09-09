const mongoose = require('mongoose');

// MongoDB connection string
const mongoURL = 'mongodb+srv://bhardwajjeet408:2b8ykuIE0PsH9O56@cluster0.f1pcg.mongodb.net/Database_Jomato?retryWrites=true&w=majority&appName=Cluster0';

// Function to connect to MongoDB
const connectToMongoDB = async () => {
    try {
        // Connect to the database without deprecated options
        await mongoose.connect(mongoURL);

        // Log success
        console.log("Database connected successfully");

        // Fetch and return data from the database
        const fetchedData = await fetchData();
        console.log(fetchedData);
    } catch (err) {
        console.error("Failed to connect to the database", err);
    }
};

// Function to fetch data from the "Food_detail" collection
const fetchData = async () => {
    try {
        const collection = mongoose.connection.db.collection("Food_detail");
        const data = await collection.find({}).toArray();
        return data;
    } catch (err) {
        console.error("Error fetching data", err);
    }
};

mongoose.connection.on('error', err => {
    console.error('Connection error:', err);
});

module.exports = connectToMongoDB;

