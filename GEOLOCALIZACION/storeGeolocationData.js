import client from "../clientReutilizable.js";
import { DB } from "../constantes.js";

async function storeGeolocationData(client) {
    const locationData = [
        { name: "Location 1", location: { type: "Point", coordinates: [40.416775, -3.703790] } },
        { name: "Location 2", location: { type: "Point", coordinates: [40.417775, -3.704790] } },
        { name: "Location 3", location: { type: "Point", coordinates: [40.418775, -3.705790] } },
        { name: "Location 4", location: { type: "Point", coordinates: [40.419775, -3.706790] } },
    ];

    const result = await client
        .db(DB)
        .collection("collection")
        .insertMany(locationData);

        console.log("Datos de geolocalización insertados correctamente", result);
}

storeGeolocationData(client).catch(console.error).finally(() => client.close());