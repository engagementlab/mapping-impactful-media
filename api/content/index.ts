import * as dotenv from 'dotenv';
dotenv.config();

import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import * as appInsights from 'applicationinsights';
if (process.env.NODE_ENV === 'production') appInsights.setup();

import { strict as assert } from 'assert';
import { Collection } from 'mongodb';

import { DB, COLLECTION_PREFIX } from '../shared/db';

// Store pluralized keys for collection names
const modelRef = {
  about: 'abouts',
  home: 'homes',
};

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  // Get the DB instance
  const dbInstance = await DB(context);

  // Find specified data
  let docs = [];
  // Get pluralized key of collection
  const collectionName = modelRef[context.bindingData.name];
  try {
    const collection: Collection = dbInstance.collection(
      `${COLLECTION_PREFIX}${collectionName}`
    );

    // Get one or all records depending on "mod"
    docs =
      context.bindingData.mod === 'all'
        ? await collection.find({}).project({ _id: 0, __v: 0 }).toArray()
        : await collection.findOne({}, { projection: { _id: 0, __v: 0 } });
    assert.notEqual(null, docs);
    console.log(docs);
  } catch (e) {
    context.res.status(500).send(e);
  }

  // Fallback
  if (!docs || docs.length < 1) {
    context.res.status(204).send('No data found.');
    return;
  }

  context.res.status(200).json(docs);
};

// Default export wrapped with Application Insights FaaS context propagation
export default async function contextPropagatingHttpTrigger(context, req) {
  if (process.env.NODE_ENV === 'production') {
    // Start an AI Correlation Context using the provided Function context
    const correlationContext = appInsights.startOperation(context, req);

    // Wrap the Function runtime with correlationContext
    return appInsights.wrapWithCorrelationContext(async () => {
      const startTime = Date.now(); // Start trackRequest timer

      // Run the Function
      await httpTrigger(context, req);

      // Track Request on completion
      appInsights.defaultClient.trackRequest({
        name: context.req.method + ' ' + context.req.url,
        resultCode: context.res.status,
        success: true,
        url: req.url,
        duration: Date.now() - startTime,
        id: correlationContext.operation.parentId,
      });
      appInsights.defaultClient.flush();
    }, correlationContext)();
  } else {
    // Run the Function
    await httpTrigger(context, req);
  }
}
