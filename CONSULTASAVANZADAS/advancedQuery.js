import client from "../clientReutilizable.js";
import { DB } from "../constantes.js";

async function advancedQuery(client) {
    const query = { age: { $gt: "30"}}
    const projection = { name: 1, age: 1, _id: 0}

    const result = await client
        .db(DB)
        .collection("collection")
        .find(query)
        .project(projection)
        .toArray()
        
    console.log("Result: ", result)
}

advancedQuery(client).catch(console.error).finally(() => client.close())