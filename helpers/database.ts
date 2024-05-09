import { Sequelize, QueryTypes } from "sequelize";
//import { config } from "../common/config";

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
  } catch (err: any) {
    console.error(err, sql, values);
    throw "Database delete record error";
  }
};
