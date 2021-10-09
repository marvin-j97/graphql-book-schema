import { books, authors } from "./database";

export default {
  Query: {
    hello(_: unknown, { name }: { name: string }): string {
      return `Hello ${name}!`;
    },
    book(_: unknown, { id }: { id: number }) {
      return Object.values(books).find((book) => book.id === id);
    },
  },

  Book: {
    authors(book: { authors: number[] }) {
      return Object.values(authors).filter((author) => book.authors.includes(author.id));
    },
  },

  Author: {
    books(author: { id: number }) {
      return Object.values(books).filter((books) => books.authors.includes(author.id));
    },
  },
};
