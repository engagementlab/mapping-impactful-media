import * as dotenv from 'dotenv';
dotenv.config();

import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import * as appInsights from 'applicationinsights';
if (process.env.NODE_ENV === 'production') appInsights.setup();

import { strict as assert } from 'assert';

import { DB, COLLECTION_PREFIX } from '../shared/db';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  // Get the DB instance
  const dbInstance = await DB(context);
  // Find About data
  let docs = [];
  try {
    docs = await dbInstance
      .collection(`${COLLECTION_PREFIX}abouts`)
      .findOne({});
//     For debugging, send env and db string
    context.res.status(200).json({
      env:process.env.NODE_ENV,
      db: process.env.DB_URI,
      docs});
//     assert.notEqual(null, docs);
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
