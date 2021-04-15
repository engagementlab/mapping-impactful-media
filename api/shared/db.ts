import { Context } from '@azure/functions';
import { Db, MongoClient } from 'mongodb';
import { strict as assert } from 'assert';

// May be retained between function executions depending on whether Azure garbage collects; re-use speeds up queries
let client = null;

export const DB = async function (context: Context): Promise<Db> {
  const dbAddress = process.env.DB_URI;

  if (client) return client.db();

  try {
    client = await MongoClient.connect(dbAddress);
    assert(null !== client);
    context.log('Connected successfully to DB on ' + process.env.NODE_ENV);

    return client.db();
  } catch (e) {
    context.log(`DB error: ${e}`);
    throw new Error(e);
  }
};

export const COLLECTION_PREFIX =
  process.env.NODE_ENV === 'production' ? process.env.COLLECTION_PREFIX : '';
