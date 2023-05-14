const mongoose = require('mongoose');

const connectionString = process.env.MONGO_DB_URI;

mongoose.connect(connectionString);

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
})

mongoose.connection.on('erorr', (err) => {
    console.log('MongoDB connection error', err);
})

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
})