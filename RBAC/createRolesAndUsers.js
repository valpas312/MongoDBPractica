import client from "../clientReutilizable.js";
import { DB } from "../constantes.js";

async function createRolesAndUsers(client) {
  await client
    .db(DB)
        .command({
    createRole: "myRole",
    privileges: [
      {
        resource: { db: "practice", collection: "collection" },
        actions: ["find", "insert"],
      },
    ],
    roles: [],
  });

  await client
    .db("admin")
    .command({
    createUser: "myUser",
    pwd: "myPassword",
    roles: ["myRole"],
  });

  console.log("Roles y usuarios creados.");
}

createRolesAndUsers(client).catch(console.error).finally(() => client.close());
