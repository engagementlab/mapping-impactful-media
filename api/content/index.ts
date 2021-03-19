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
  const docs = await dbInstance
    .collection(`${COLLECTION_PREFIX}abouts`)
    .findOne({});
  assert(null !== docs);

  context.res.status(200).json(docs);
};

export default httpTrigger;
