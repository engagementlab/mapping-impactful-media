import { Mongoose, connect, Connection } from 'mongoose';

const MONGODB_URI: string = import.meta.env.VITE_MONGODB_URI as string;

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
let cached: Connection;

// if (!cached) {
//   cached = Mongoose = { conn: null, promise: null };
// }

export async function dbConnect() {
  //   if (cached.conn) {
  //     return cached.conn;
  //   }

  //   if (!cached) {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
    useFindAndModify: false,
    useCreateIndex: true,
  };

  let conn = await connect(MONGODB_URI, opts);
  cached = conn.connection;

  //   cached.conn = await cached.promise;
  return cached.conn;
}

// export default dbConnect;
