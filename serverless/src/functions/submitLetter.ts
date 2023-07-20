import {
  APIGatewayProxyHandler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda";
import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const requestBody = JSON.parse(event.body as string);
    const { name, message } = requestBody;

    if (!name || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Missing required fields: name and/or message",
        }),
      };
    }

    const id = uuidv4();

    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const putParams = {
      TableName: process.env.DYNAMODB_LETTER_TABLE ?? "",
      Item: {
        id: id,
        name: name,
        message: message,
      },
    };

    try {
      await dynamoDb.put(putParams).promise();
    } catch (error) {
      console.error("Database error:", error);
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Letter from ${name} successfully uploaded.`,
        success: true,
      }),
      headers: {
        "Access-Control-Allow-Origin": "https://evnwttn.github.io",
        "Access-Control-Allow-Credentials": true,
      },
    };

    return response;
  } catch (error) {
    console.error("An error occurred:", error);

    const response = {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };

    return response;
  }
};
