import { gql, type TypedDocumentNode } from "@apollo/client";
import type {
  CreateBookMutation,
  CreateBookVariables,
  DeleteBookMutation,
  DeleteBookVariables,
  EditBookMutation,
  EditBookVariables,
} from "./types";
import { BOOK_FIELDS } from "./fragments";

export const EDIT_BOOK: TypedDocumentNode<
  EditBookMutation,
  EditBookVariables
> = gql`
  ${BOOK_FIELDS}
  mutation EditBook($editBookData: UpdateBookInput!) {
    edit_book(editBookData: $editBookData) {
      ...BookFields
    }
  }
`;

export const CREATE_BOOK: TypedDocumentNode<
  CreateBookMutation,
  CreateBookVariables
> = gql`
  ${BOOK_FIELDS}
  mutation CreateBook($newBookData: NewBookInput!) {
    add_book(newBookData: $newBookData) {
      ...BookFields
    }
  }
`;

export const DELETE_BOOK: TypedDocumentNode<
  DeleteBookMutation,
  DeleteBookVariables
> = gql`
  ${BOOK_FIELDS}
  mutation DeleteBook($bookId: Int!) {
    delete_book(bookId: $bookId) {
      ...BookFields
    }
  }
`;
