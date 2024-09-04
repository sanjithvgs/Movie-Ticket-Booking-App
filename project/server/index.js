const express = require('express');

const mongoose = require('mongoose');

const app = express();

const PORT = 5000;

const userRoutes = require('./routes/userRoutes')

mongoose.connect('mongodb+srv://vgsanjith166:4da0f7Yn05cBdjzW@cluster0.tqjzn.mongodb.net/Booking_Data?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log("Database Connected...")).catch((err) => {console.log(err); });

app.use(express.json())
app.use(express.urlencoded())

app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log("Server Started...");
});