const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to fetch a random anime quote
app.get('/anime-quote', async (req, res) => {
    try {
        const url = 'https://animechan.io/api/v1/quotes/random';
        
        const response = await axios.get(url);
        
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Couldn't fetch anime quote at the moment." });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
