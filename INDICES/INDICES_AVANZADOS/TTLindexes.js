import client from "../../clientReutilizable.js";
import { DB} from "../../constantes.js";

async function createTTLIndex(client) {
    const result = await client
        .db(DB)
        .collection("collection")
        .createIndex({ "createdAt": 1 }, { expireAfterSeconds: 3600 });

    console.log(`Index created: ${result}`);
}

createTTLIndex(client).catch(console.error).finally(() => client.close());