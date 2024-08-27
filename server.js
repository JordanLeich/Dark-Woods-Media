const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Basic Route
app.get('/', (req, res) => {
    res.send('Welcome to Dark Woods Media API');
});

const movieRoutes = require('./routes/movies');
app.use('/api/movies', movieRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
