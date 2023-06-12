import client from "../../clientReutilizable.js";
import { DB } from "../../constantes.js";

async function createTextIndexWithWeights(client) {
    const result = await client
        .db(DB)
        .collection("collection")
        .createIndex(
            { content: "text", title: "text" },
            { weights: { content: 1, title: 3 } }
        )

    console.log(`Index with weights created: ${result}`);
}

createTextIndexWithWeights(client).catch(console.error).finally(() => client.close());