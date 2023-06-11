import client from "../clientReutilizable.js";
import { DB } from "../constantes.js";

async function createGeolocationIndex(client) {
    const result = await client
        .db(DB)
        .collection("collection")
        .createIndex({ location: "2dsphere" });

    console.log("Índice de geolocalización creado correctamente", result);
};

createGeolocationIndex(client).catch(console.error).finally(() => client.close());