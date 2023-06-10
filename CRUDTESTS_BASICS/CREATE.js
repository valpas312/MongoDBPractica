import { createDocument } from "../operacionesCRUD.js";
import client from "../clientReutilizable.js";

async function main() {
  try {
    await createDocument(client, {
      name: "Documento 1",
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
