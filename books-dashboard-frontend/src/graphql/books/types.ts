import type { Book } from "@/interfaces/book";

export interface GetBookQuery {
  book: Book;
}

export interface GetBookVariables {
  id: number;
}

export interface GetBooksQuery {
  books: {
    books: Book[]
    pageInfo: {
      page: number;
      hasNextPage: boolean;
      limit: number;
      totalCount: number;
      totalPages: number;
    }
  }
}

export interface GetBooksVariables {
  name?: string;
  page?: number;
  limit?: number;
}
