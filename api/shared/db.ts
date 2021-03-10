import * as dotenv from "dotenv";
dotenv.config();

import { Db, MongoClient } from "mongodb";
import { strict as assert } from "assert";

const DB = async function (): Promise<Db> {
  const dbAddress = process.env.DB_URI;

  try {
    const client = await MongoClient.connect(dbAddress);
    assert(null !== client);
    console.log("Connected successfully to server");

    return client.db();
  } catch (e) {
    throw new Error(e);
    return null;
  }
};
export default DB;
