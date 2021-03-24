import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { strict as assert } from 'assert';

import { DB, COLLECTION_PREFIX } from '../shared/db';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  // Get the DB instance
  const dbInstance = await DB();
  // Find About data
  let docs = [];
  try {
    docs = await dbInstance
      .collection(`${COLLECTION_PREFIX}abouts`)
      .findOne({});
    assert.notEqual(null, docs);
  } catch (e) {
    context.res.status(500).send(e);
  }

  // Fallback
  if (!docs || docs.length < 1) {
    context.res.status(204).send('No docs.');
    return;
  }

  context.res.status(200).json(docs);
};

export default httpTrigger;
