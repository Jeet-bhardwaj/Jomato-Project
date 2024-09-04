const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://bhardwajjeet408:2b8ykuIE0PsH9O56@cluster0.f1pcg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const Mongodb = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Failed to connect to the database", err);
    }
}

module.exports = Mongodb;

