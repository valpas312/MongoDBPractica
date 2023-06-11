import client from '../clientReutilizable.js';
import { DB } from '../constantes.js';

async function createIndex(client) {
    const result = await
        client
            .db(DB)
            .collection("collection")
            .createIndex({ "name": 1 })

        console.log(`Index created: ${result}`)
}

createIndex(client).catch(console.error).finally(() => client.close())