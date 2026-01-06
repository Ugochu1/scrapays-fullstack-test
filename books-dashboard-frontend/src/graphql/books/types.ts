import type { Book } from "@/interfaces/book";

export interface GetBookQuery {
  book: Book;
}

export interface GetBookVariables {
  id: number;
}

export interface GetBooksQuery {
  books: Book[];
}

export interface GetBooksVariables {
  name?: string;
  offset?: number;
  limit?: number;
}
