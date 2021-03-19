import * as dotenv from 'dotenv';
dotenv.config();

import { Db, MongoClient } from 'mongodb';
import { strict as assert } from 'assert';

export const DB = async function (): Promise<Db> {
  const dbAddress = process.env.DB_URI;

  try {
    const client = await MongoClient.connect(dbAddress);
    assert(null !== client);
    console.log('Connected successfully to DB.');

    return client.db();
  } catch (e) {
    throw new Error(e);
    return null;
  }
};

export const COLLECTION_PREFIX =
  process.env.NODE_ENV === 'production' ? process.env.COLLECTION_PREFIX : '';
