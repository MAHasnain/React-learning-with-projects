import { Client, Databases, ID, Query, Storage } from "appwrite";
import config from "../config/config";

class Service {
  client = new Client();
  bucket;
  database;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ slug, title, content, userId, featuredImage, status }) {
    try {
      await this.database.createDocument(
        config.appwriteDBId,
        config.appwriteCollectionId,
        slug,
        { title, content, userId, featuredImage, status }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async updatePost(slug, { title, content, userId, featuredImage, status }) {
    try {
      await this.database.updateDocument(
        config.appwriteDBId,
        config.appwriteCollectionId,
        slug,
        title,
        content,
        featuredImage,
        userId,
        status
      );
    } catch (error) {
      console.log(error);
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        config.appwriteDBId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(error);
    }
    return true;
  }

  async getPost(slug) {
    try {
      await this.database.getDocument(
        config.appwriteDBId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        config.appwriteDBId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(error);
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log(error);
      return true;
    }
  }

  FilePreview(fileId) {
    return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
