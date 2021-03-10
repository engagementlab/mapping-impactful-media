import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { strict as assert } from "assert";

import DB from "../shared/db";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  // Get the documents collection
  const dbInstance = await DB();
  // Find some documents
  const docs = await dbInstance.collection("about").find({}).toArray();
  assert(null !== docs);
  console.log("Found the following records");
  console.log(docs);
  context.res.status(200).json(docs);
};

export default httpTrigger;
