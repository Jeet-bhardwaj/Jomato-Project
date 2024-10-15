const mongoose = require('mongoose');

// MongoDB connection string
const mongoURL = 'mongodb+srv://bhardwajjeet408:2b8ykuIE0PsH9O56@cluster0.f1pcg.mongodb.net/Database_Jomato?retryWrites=true&w=majority&appName=Cluster0';

// Function to connect to MongoDB
const connectToMongoDB = async () => {
    try {
        // Connect to the database with additional options
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Log success
        console.log("Database connected successfully");

        // Fetch data and set it as global variables
        const { data: FoodDetails, data2: FoodItems } = await fetchData();
        global.Food_details = FoodDetails; // Set global variable for Food_detail collection
        global.Food_items = FoodItems; // Set global variable for Food_items collection
    } catch (err) {
        console.error("Failed to connect to the database", err);
    }
};

// Function to fetch data from the "Food_detail" and "Food_items" collections
const fetchData = async () => {
    try {
        const collection = mongoose.connection.db.collection("Food_detail");
        const collection2 = mongoose.connection.db.collection("Food_items");

        const data = await collection.find({}).toArray();
        const data2 = await collection2.find({}).toArray();
        
        return { data, data2 }; // Return an object containing both datasets
    } catch (err) {
        console.error("Error fetching data", err);
    }
};

// Handling connection errors
mongoose.connection.on('error', err => {
    console.error('Connection error:', err);
});

module.exports = connectToMongoDB;
