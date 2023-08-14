import { DynamoDB } from "aws-sdk";
export class DynamoService {
  static async createItem(item) {
    const dynamo = new DynamoDB.DocumentClient();
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: item,
    };
    await dynamo.put(params as any).promise();
  }

  static async getItem(key) {
    const dynamo = new DynamoDB.DocumentClient();
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: key,
    };
    const result = await dynamo.get(params as any).promise();
    return result.Item;
  }
}