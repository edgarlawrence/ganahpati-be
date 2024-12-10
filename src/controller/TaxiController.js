const axios = require('axios');

const getTaxiData = async (req, res) => {
    const { offset = 0, limit = 10, pickup_datetime, trip_distance, fare_amount } = req.query;

    try {
        const params = {
            $offset: offset,
            $limit: limit,
        };

        // Add filters if provided
        if (pickup_datetime) params.pickup_datetime = pickup_datetime;
        if (trip_distance) params.trip_distance = trip_distance;
        if (fare_amount) params.fare_amount = fare_amount;

        // Fetch data from the API
        const response = await axios.get(process.env.API_URL, { params });
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Failed to fetch data from API' });
    }
};

module.exports = { getTaxiData };
