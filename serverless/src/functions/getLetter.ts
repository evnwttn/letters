import {
  APIGatewayProxyHandler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda";
import AWS from "aws-sdk";

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const scanParams = {
      TableName: process.env.DYNAMODB_LETTER_TABLE ?? "",
      AttributesToGet: ["id"],
    };

    // Fetch all the ids
    const data = await dynamoDb.scan(scanParams).promise();

    if (data.Items && data.Items.length > 0) {
      // Select a random id
      const randomKey =
        data.Items[Math.floor(Math.random() * data.Items.length)];

      // Get the item for the selected id
      const getParams = {
        TableName: process.env.DYNAMODB_LETTER_TABLE ?? "",
        Key: randomKey,
      };

      const letter = await dynamoDb.get(getParams).promise();

      const response = {
        statusCode: 200,
        body: JSON.stringify({
          letter: letter.Item,
        }),
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
          "Access-Control-Allow-Credentials": true,
        },
      };

      return response;
    } else {
      const response = {
        statusCode: 404,
        body: JSON.stringify({
          error: "No letters found in the database",
        }),
      };

      return response;
    }
  } catch (error) {
    console.error("An error occurred:", error);

    const response = {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };

    return response;
  }
};
