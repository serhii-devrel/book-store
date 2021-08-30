// Network
import { RESTClient } from "./config";

export const RESTService = {
  authors: {
    getAuthors() {
      return RESTClient.get("/authors/", {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    searchAuthor(pattern) {
      return RESTClient.get(`/authors?search=${pattern}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    deleteAuthor(id) {
      return RESTClient.delete(`/authors/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    addAuthor(author) {
      return RESTClient.post("/.../", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...author }),
      });
    },
  },
  books: {
    getBooks() {
      return RESTClient.get("/authors/", {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    findBooksAuthorBased(id) {
      return RESTClient.get(`/authors/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    searchBooks(pattern) {
      return RESTClient.get(`/authors?search=${pattern}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
};
