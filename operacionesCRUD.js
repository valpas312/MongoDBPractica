import { DB } from "./constantes.js";

// CREATE
async function createDocument(client, document) {
  const result = await client
    .db(DB)
    .collection("collection")
    .insertOne(document);
  console.log(
    `New document created with the following id: ${result.insertedId}`
  );
}

// READ
async function findDocuments(client) {
  const result = client.db(DB).collection("collection").find();

  await result.forEach((doc) => {
    console.log(doc);
  });
}

// UPDATE
async function updateDocument(client, documentName, updatedFields) {
  const result = await client
    .db(DB)
    .collection("collection")
    .updateOne({ name: documentName }, { $set: updatedFields });

  console.log(`${result.matchedCount} document(s) was/were updated.`);
}

// DELETE
async function deleteDocument(client, documentName) {
  const result = await client
    .db(DB)
    .collection("collection")
    .deleteOne({ name: documentName });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

export { createDocument, findDocuments, updateDocument, deleteDocument };