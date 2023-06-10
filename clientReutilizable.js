import { MongoClient } from "mongodb";
import { URL } from "./constantes.js";

const client = new MongoClient(URL, { useNewUrlParser: true, useUnifiedTopology: true });

export default client;