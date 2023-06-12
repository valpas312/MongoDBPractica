REPLICACION EN MONGODB

La replicación en MongoDB es el proceso de mantener
copias idénticas de los datos en múltiples servidores.
Esto proporciona redundancia y alta disponibilidad, ya que si uno de los servidores falla,
los otros pueden asumir la carga de trabajo sin interrupciones.

////////////////////////////////////////////////////////////////////////////////////////
 const MongoClient = require('mongodb').MongoClient;

 const uri = 'mongodb://host1:port1,host2:port2,host3:port3/?replicaSet=myReplicaSet';
 const client = new MongoClient(uri);

 async function connectToReplicaSet() {
   try {
     await client.connect();
     console.log('Conexión establecida con el conjunto de réplicas');
   } catch (error) {
     console.error('Error al conectarse al conjunto de réplicas:', error);
   }
 }

 connectToReplicaSet();
////////////////////////////////////////////////////////////////////////////////////////

En este ejemplo, se utiliza la cadena de conexión mongodb://host1:port1,host2:port2,host3:port3/?replicaSet=myReplicaSet
para conectarse a un conjunto de réplicas en MongoDB.
Debes reemplazar host1, host2, host3 con las direcciones IP o nombres de host de los servidores de la réplica,
y port1, port2, port3 con los puertos correspondientes.

PARTICIONAMIENTO (SHARDING) EN MONGODB

El particionamiento, también conocido como sharding, en MongoDB es el proceso de distribuir los datos de una colección en varios servidores (shards) para mejorar
la escalabilidad y el rendimiento. Cada shard almacena solo una parte de los datos y las consultas se distribuyen entre los shards.

////////////////////////////////////////////////////////////////////////////////////////
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://configServer1:port1,configServer2:port2,configServer3:port3';
const client = new MongoClient(uri);

async function connectToShardedCluster() {
  try {
    await client.connect();
    console.log('Conexión establecida con el clúster particionado');
  } catch (error) {
    console.error('Error al conectarse al clúster particionado:', error);
  }
}

connectToShardedCluster();
////////////////////////////////////////////////////////////////////////////////////////

En este ejemplo, se utiliza la cadena de conexión mongodb://configServer1:port1,configServer2:port2,configServer3:port3 para conectarse a un clúster particionado en MongoDB.
Debes reemplazar configServer1, configServer2, configServer3 con las direcciones IP o nombres de host de los servidores de configuración y port1, port2, port3 con los puertos correspondientes.

Es importante tener en cuenta que la configuración de la replicación y el particionamiento (sharding) en MongoDB es un proceso más complejo y requiere una configuración adecuada de los servidores y la infraestructura.
Los ejemplos anteriores son solo una introducción básica a los conceptos y la configuración.