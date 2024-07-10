const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
  }));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB'));

app.get('/', (req, res) => {
    res.send('Netflix Clone Backend');
});

// integrate routes
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movies');

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));