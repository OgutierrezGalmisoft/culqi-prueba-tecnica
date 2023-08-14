export class TokenUtils {

  static async generateToken() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
    let token: string[] = [];
    for (let i = 0; i < 16; i++) {
      let rand = Math.floor(Math.random() * characters.length).toFixed(0);
      token.push(characters[rand]);
    }
    return token.join('');
  }

  static async generateExpirationDate(value: number) {
    let date = new Date();
    date.setMinutes(date.getMinutes() + value);
    return date.toISOString();
  }
}