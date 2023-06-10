import { URL } from "./constantes.js";
import { MongoClient } from "mongodb";

async function main() {
    const client = new MongoClient(URL, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err){
        console.log(err);
    } finally {
        await client.close();
        console.log("Disconnected correctly from server")
    }
}

main().catch(console.error);