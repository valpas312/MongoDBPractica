import client from "../clientReutilizable.js";
import { findDocuments } from "../operacionesCRUD.js";

async function main() {
  try {
    await findDocuments(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);