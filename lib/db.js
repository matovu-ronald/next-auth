import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://maron:zcPANlDDZxq7oLCU@cluster0.2fgoy.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  return client;
}
