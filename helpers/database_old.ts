import { Sequelize, QueryTypes } from "sequelize";
//import { config } from "../common/config";
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://tomyho:1Asdflkj@ds.o9ppmp9.mongodb.net/?retryWrites=true&w=majority&appName=DS";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);





/*

const config = {
  host: "tiny.db.elephantsql.com",
  port: 5432,
  user: "apzvtefj",
  password: "NyiReeL2m-RoO-J_LUFDhneQR-ZnrZEb",
  database: "apzvtefj",
  connection_limit: 100,
};


export const run_query = async (query: string, values: any) => {
  try {
    const sequelize = new Sequelize(
      config.database,
      config.user,
      config.password,
      {
        host: config.host,
        port: config.port,
        dialect: "mysql",
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
    throw "Database query error";
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
        dialect: "mysql",
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
    throw "Database record insert error";
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
        dialect: "mysql",
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
    throw "Database update record error";
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
        dialect: "mysql",
      },
    );
    await sequelize.authenticate();
    const data = await sequelize.query(sql, {
      replacements: values,
      type: QueryTypes.DELETE,
    });
    await sequelize.close();
    return data;




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