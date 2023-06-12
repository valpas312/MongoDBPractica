import client from "../clientReutilizable.js";
import { DB } from "../constantes.js";

async function performTransaction(client) {
  const session = client.startSession();

  try {
    session.startTransaction();

    const result1 = await client
      .db(DB)
      .collection("collection")
      .insertOne({ name: "John" }, { session });

    const result2 = await client
      .db(DB)
      .collection("collection")
      .updateOne({ name: "John" }, { $set: { age: 30 } }, { session });

    await session.commitTransaction();
    console.log("Transaction committed.", result1, result2);
  } catch (error) {
    await session.abortTransaction();
    console.log("Transaction aborted.");
  } finally {
    session.endSession();
    await client.close();
  }
}

performTransaction(client);
