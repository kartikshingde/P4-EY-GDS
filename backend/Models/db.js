const mongoose = require('mongoose');

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    });
