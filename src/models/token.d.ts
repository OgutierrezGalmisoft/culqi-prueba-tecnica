export interface TokenRequest {
  cardNumber: number;
  cvv: number;
  expirationMonth: string;
  expirationYear: string;
  email: string;
}

export interface TokenResponse extends TokenRequest {
  token: string;
  expirationDate: string;
}