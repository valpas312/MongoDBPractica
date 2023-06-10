import client from "../clientReutilizable.js";
import { deleteDocument } from "../operacionesCRUD.js";

async function main() {
    try {
        const documentName = "Documento 1";
        await deleteDocument(client, documentName);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);