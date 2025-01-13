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

  async register(name, email, password) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        name,
        email,
        password
      );

      if (userAccount) {
        return this.login({ email, password });
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }

  async logout({ email, password }) {
    try {
      await this.account.deleteSessions(email, password);
    } catch (error) {
      throw error;
    }
  }
}
const authService = new AuthService();
export default authService;
