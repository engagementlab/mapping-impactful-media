import * as mongoose from 'mongoose'
import { globals } from 'svelte/internal';

const MONGODB_URI = import.meta.env.VITE_MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the VITE_MONGODB_URI environment variable inside .env'
  );
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = globals.mongooseInst

if (!cached) {
  cached = globals.mongooseInst = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: false,
      useCreateIndex: true,
    }

    console.log(mongoose)
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect