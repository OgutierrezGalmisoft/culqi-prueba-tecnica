import { TokenRequest, TokenResponse } from "../models/token";
import { TokenUtils } from "../utils/tokenUtils";
import { DynamoService } from "./dynamoService";

export class TokenService {
  static async createToken(tokenRequest: TokenRequest): Promise<TokenResponse> {
    const token = await TokenUtils.generateToken();
    const expirationDate = await TokenUtils.generateExpirationDate(15);
    const tokenResponse: TokenResponse = {
      token,
      expirationDate,
      ...tokenRequest
    };
    await DynamoService.createItem(tokenResponse);
    return tokenResponse;
  }

  static async getToken(token: string): Promise<TokenResponse> {
    const tokenResponse = await DynamoService.getItem(token);
    return tokenResponse as TokenResponse;
  }
}