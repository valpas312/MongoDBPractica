import client from "../clientReutilizable.js";
import { updateDocument } from "../operacionesCRUD.js";

async function main() {
  try {
    const documentName = "Documento 1";
    await updateDocument(client, documentName,
        { name: "Documento 1" });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);