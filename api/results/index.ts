import * as dotenv from 'dotenv';
dotenv.config();

import { AzureFunction, Context, HttpRequest } from '@azure/functions';

import { strict as assert } from 'assert';

import { DB, COLLECTION_PREFIX } from '../shared/db';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  // Get the DB instance
  const dbInstance = await DB(context);
  // Create results record and unique retrieval ID for user
  let record;
  try {
    const increment = await dbInstance.collection('counters').findOneAndUpdate(
      {
        _id: 'resultsid',
      },
      {
        $inc: {
          seq: 1,
        },
      },
      { returnOriginal: false }
    );
    record = await dbInstance
      .collection(`${COLLECTION_PREFIX}results`)
      .insertOne({
        resultId: increment.value.seq,
      });
    assert.notEqual(null, record);

    context.res.status(200).json(record);
  } catch (e) {
    context.res.status(500).send(e);
  }
};

export default httpTrigger;
