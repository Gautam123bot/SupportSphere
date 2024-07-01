import axios from "axios";

const PLACE_API_KEY = "YOUR_PLACE_API_KEY";

async function getNearbyStores(address) {
    try {
        const response = await axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
            params: {
                key: PLACE_API_KEY,
                location: address,
                radius: 5000, // Adjust radius as needed
                type: "store" // Specify the type of place you're looking for
            }
        });

        const nearbyStores = response.data.results.map(result => ({
            name: result.name,
            address: result.vicinity,
            // You can include more information about the store if needed
        }));

        return nearbyStores;
    } catch (error) {
        console.error("Error fetching nearby stores:", error);
        return [];
    }
}

export { getNearbyStores };
