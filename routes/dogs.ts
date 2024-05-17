import Router, {RouterContext} from "koa-router";
import bodyParser from "koa-bodyparser";
import * as model from '../models/dogs';
import { basicAuth } from "../controllers/auth";


const router = new Router({prefix: '/api/v1/dogs'});


import { ObjectId, MongoClient } from 'mongodb';

const uri = 'mongodb+srv://tomyho:1Asdflkj@ds.o9ppmp9.mongodb.net/?retryWrites=true&w=majority&appName=DS';

const client = new MongoClient(uri);

export const getById = async (id: any) => {
  try {
    await client.connect();
    const database = client.db('DS');
    const collection = database.collection('Dog');
    const data = await collection.findOne({ _id: new ObjectId(id) });
    return data;
  } catch (err: any) {
    console.error(err);
    throw 'Error retrieving data';
  } finally {
    await client.close();
  }
};

export const getAll = async () => {
  try {
    await client.connect();
    const database = client.db('DS');
    const collection = database.collection('Dog');
    const data = await collection.find({}).toArray();
    return data;
  } catch (err: any) {
    console.error(err);
    throw 'Error retrieving data';
  } finally {
    await client.close();
  }
};

export const add = async (dog: any) => {
  try {
    await client.connect();
    const database = client.db('DS');
    const collection = database.collection('Dog');
    const result = await collection.insertOne(dog);
    return { status: 201 };
  } catch (err: any) {
    console.error(err);
    throw 'Error adding record';
  } finally {
    await client.close();
  }
};

export const updateById = async (dog: any, id: any) => {
  try {
    await client.connect();
    const database = client.db('DS');
    const collection = database.collection('Dog');
    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: dog });
    return { status: 201 };
  } catch (err: any) {
    console.error(err);
    throw 'Error updating record';
  } finally {
    await client.close();
  }
};

export const deleteById = async (id: any) => {
  try {
    await client.connect();
    const database = client.db('DS');
    const collection = database.collection('Dog');
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return { status: 201 };
  } catch (err: any) {
    console.error(err);
    throw 'Error deleting record';
  } finally {
    await client.close();
  }
};