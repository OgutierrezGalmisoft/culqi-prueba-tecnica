import { ZodError } from "zod";
import { TokenService } from "../services/tokenService";
import { tokenValidation } from "../validations/tokenValidation";

export class TokenController {
  static async createToken(request, context) {
    try {
      const payload = tokenValidation.parse(request.body);
      const token = await TokenService.createToken(payload);
      return {
        statusCode: 200,
        body: JSON.stringify(token),
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: JSON.stringify(error)
        }
      }
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      };
    }
  }

  static async getToken(request, context) {
    try {
      const token = await TokenService.getToken(request.pathParameters.token);
      return {
        statusCode: 200,
        body: JSON.stringify(token),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      };
    }
  }
}