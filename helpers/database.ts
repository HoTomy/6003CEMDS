import { Sequelize, QueryTypes } from 'sequelize';
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://tomyho:1Asdflkj@ds.o9ppmp9.mongodb.net/?retryWrites=true&w=majority&appName=DS';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: '1',
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db().command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);


export const run_query = async (query: string, values: any) => {
  try {
    await client.connect();
    const database = client.db('DS');
    const collection = database.collection('Dog');
    const data = await collection.find({}).toArray();
    return data;
  } catch (err: any) {
    console.error(err, query, values);
    throw 'Database query error';
  } finally {
    await client.close();
  }
};


export const run_insert = async (sql: string, values: any) => {
  try {
    await client.connect();
    const database = client.db('DS');
    const collection = database.collection('Dog');
    const result = await collection.insertOne(values);
    return result;
  } catch (err: any) {
    console.error(err, sql, values);
    throw 'Database record insert error';
  } finally {
    await client.close();
  }
};

export const run_update = async (sql: string, values: any) => {
  try {
    await client.connect();
    const database = client.db('DS');
    const collection = database.collection('Dog');
    const result = await collection.updateOne({ /* filter criteria */ }, { $set: values });
    return result;
  } catch (err: any) {
    console.error(err, sql, values);
    throw 'Database update record error';
  } finally {
    await client.close();
  }
};

export const run_delete = async (sql: string, values: any) => {
  try {
    await client.connect();
    const database = client.db('DS');
    const collection = database.collection('Dog');
    const result = await collection.deleteOne({ /* filter criteria */ });
    return result;
  } catch (err: any) {
    console.error(err, sql, values);
    throw 'Database delete record error';
  } finally {
    await client.close();
  }
};


/*
export const run_query = async (query: string, values: any) => {
  try {
    const sequelize = new Sequelize(
      config.database,
      config.user,
      config.password,
      {
        host: config.host,
        port: config.port,
        dialect: 'mysql',
      },
    );
    await sequelize.authenticate();
    const data = await sequelize.query(query, {
      replacements: values,
      type: QueryTypes.SELECT,
    });
    await sequelize.close();
    return data;
  } catch (err: any) {
    console.error(err, query, values);
    throw 'Database query error';
  }
};




export const run_insert = async (sql: string, values: any) => {
  try {
    const sequelize = new Sequelize(
      config.database,
      config.user,
      config.password,
      {
        host: config.host,
        port: config.port,
        dialect: 'mysql',
      },
    );
    await sequelize.authenticate();
    const data = await sequelize.query(sql, {
      replacements: values,
      type: QueryTypes.INSERT,
    });
    await sequelize.close();
    return data;
  } catch (err: any) {
    console.error(err, sql, values);
    throw 'Database record insert error';
  }
};

export const run_update = async (sql: string, values: any) => {
  try {
    const sequelize = new Sequelize(
      config.database,
      config.user,
      config.password,
      {
        host: config.host,
        port: config.port,
        dialect: 'mysql',
      },
    );
    await sequelize.authenticate();
    const data = await sequelize.query(sql, {
      replacements: values,
      type: QueryTypes.UPDATE,
    });
    await sequelize.close();
    return data;
  } catch (err: any) {
    console.error(err, sql, values);
    throw 'Database update record error';
  }
};

export const run_delete = async (sql: string, values: any) => {
  try {
    const sequelize = new Sequelize(
      config.database,
      config.user,
      config.password,
      {
        host: config.host,
        port: config.port,
        dialect: 'mysql',
      },
    );
    await sequelize.authenticate();
    const data = await sequelize.query(sql, {
      replacements: values,
      type: QueryTypes.DELETE,
    });
    await sequelize.close();
    return data;
  } catch (err: any) {
    console.error(err, sql, values);
    throw 'Database delete record error';
  }
};

*/