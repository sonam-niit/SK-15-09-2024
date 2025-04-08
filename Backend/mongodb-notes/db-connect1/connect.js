import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db("skills");
        const collection = db.collection('courses');
        const insertResult = await collection.
        insertMany([{ name:'HTML' },{ name:'JS' },{ name:'NODE JS' }]);
        console.log('Inserted documents =>', insertResult);
    } catch (error) {
        console.log('error while connecting', error)
    }
}
main()
