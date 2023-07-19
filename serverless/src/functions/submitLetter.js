"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const uuid_1 = require("uuid");
const handler = async (event) => {
    try {
        const requestBody = JSON.parse(event.body);
        const { name, message } = requestBody;
        const id = (0, uuid_1.v4)();
        const dynamoDb = new aws_sdk_1.default.DynamoDB.DocumentClient();
        const putParams = {
            TableName: process.env.DYNAMODB_LETTER_TABLE ?? "",
            Item: {
                id: id,
                name: name,
                message: message,
            },
        };
        await dynamoDb.put(putParams).promise();
        const response = {
            statusCode: 200,
            body: JSON.stringify({ name, message }),
            headers: {
                "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
                "Access-Control-Allow-Credentials": true,
            },
        };
        return response;
    }
    catch (error) {
        console.error("An error occurred:", error);
        const response = {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
        return response;
    }
};
exports.handler = handler;
//# sourceMappingURL=submitLetter.js.map