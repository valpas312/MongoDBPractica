import client from "../clientReutilizable.js";
import { DB } from "../constantes.js";

async function aggregationExample(client) {
  const pipeline = [
    { $match: { age: { $gt: "30" } } },
    { $group: { _id: "$category", total: { $sum: 1 } } },
    { $sort: { total: -1 } },
    { $limit: 5 },
  ];

  const result = await client
    .db(DB)
    .collection("collection")
    .aggregate(pipeline)
    .toArray();

  console.log(result);
}

aggregationExample(client)
  .catch(console.error)
  .finally(() => client.close());
