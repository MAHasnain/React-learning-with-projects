import { Client, Account, ID } from "appwrite";
import config from "../config/config.js";
export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async register({ name, email, password }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        name,
        email,
        password
      );
      if (user) {
        return this.login(email, password);
      } else {
        return user;
      }
    } catch (error) {
      console.log("Appwrite service :: register :: error", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite service:: login :: error", error);
    }
  }

  async getCurrentAccount() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service:: getCurrentAccount :: error", error);
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service:: logout :: error", error);
    }
  }
}
const authService = new AuthService();
export default authService;
