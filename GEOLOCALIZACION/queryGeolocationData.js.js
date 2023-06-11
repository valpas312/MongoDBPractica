import client from "../clientReutilizable.js";
import { DB } from "../constantes.js";

async function queryGeolocationData(client) {
    const query = {
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [-73.95, 40.78]
            },
          }
        }
      };
    
      const coordinates = await client
        .db(DB)
        .collection('collection')
        .find(query)
        .toArray();

      const result = await coordinates.forEach(element => {
        console.log(element);
      });

    console.log("Datos de geolocalización obtenidos correctamente", result);
}

queryGeolocationData(client).catch(console.error).finally(() => client.close());