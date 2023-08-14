import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { TokenController } from "./src/controllers/tokenController";

export const createToken = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    return await TokenController.createToken(event, null);
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};

export const getToken = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    return await TokenController.getToken(event, null);
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
}
