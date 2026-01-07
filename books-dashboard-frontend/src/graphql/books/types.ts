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

export interface EditBookMutation {
  edit_book: Book
}

export interface EditBookVariables {
  editBookData: {
    id: number;
    name?: string;
    description?: string;
  }
}

export interface CreateBookMutation {
  add_book: Book;
}

export interface CreateBookVariables {
  newBookData: {
    name: string;
    description: string;
  }
}

export interface DeleteBookMutation {
  delete_book: Book;
}

export interface DeleteBookVariables {
  bookId: number;
}