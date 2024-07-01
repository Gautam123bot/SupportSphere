import axios from "axios";

const DISTANCE_API_KEY = "YOUR_DISTANCE_API_KEY";

async function calculateDistance(origin, destination) {
    try {
        const response = await axios.get("https://maps.googleapis.com/maps/api/distancematrix/json", {
            params: {
                key: DISTANCE_API_KEY,
                origins: origin,
                destinations: destination,
                units: "metric" // You can specify units as needed (metric/imperial)
            }
        });

        // Extract distance from the response
        const distanceText = response.data.rows[0].elements[0].distance.text;
        const distanceValue = response.data.rows[0].elements[0].distance.value;

        return { text: distanceText, value: distanceValue };
    } catch (error) {
        console.error("Error calculating distance:", error);
        return { text: "N/A", value: -1 }; // Return default values or handle errors as needed
    }
}

export { calculateDistance };
