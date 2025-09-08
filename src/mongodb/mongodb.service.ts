import { Injectable } from '@nestjs/common';
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri =
  'mongodb+srv://liuyunlong2333:liuyunlong@cluster0.o04dl6z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

@Injectable()
export class MongoDBService {
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  private client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  // 连接mongodb，必备操作
  async connect() {
    try {
      console.log('connecting to MongoDB');
      // Connect the client to the server	(optional starting in v4.7)
      await this.client.connect();
      // Send a ping to confirm a successful connection.
      await this.client.db('admin').command({ ping: 1 });
      console.log('连接MongoDB成功!!');
    } catch (error) {
      console.error('连接MongoDB失败: ', error);
    }
  }

  async insertData() {
    const db = this.client.db('test');
    const collection = db.collection('users');
    collection.insertOne({
      name: 'John',
      age: 30,
      comment: ['123', 321],
      haha: {
        aa: 1,
        bb: '22',
      },
    });
  }

  async getData() {
    const db = this.client.db('test');
    const collection = db.collection('users');
    return collection.find({}).toArray();
  }

  deleteData() {
    const db = this.client.db('test');
    const collection = db.collection('users');
    collection.deleteOne({ name: 'John' });
  }

  updateData() {
    const db = this.client.db('test');
    const collection = db.collection('users');
    collection.updateOne({ name: 'John' }, { $set: { age: 31 } });
  }
}
