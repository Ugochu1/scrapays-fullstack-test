import { gql, type TypedDocumentNode } from "@apollo/client";
import { BOOK_FIELDS } from "./fragments";
import type {
  GetBookQuery,
  GetBooksQuery,
  GetBooksVariables,
  GetBookVariables,
} from "./types";

export const GET_BOOKS: TypedDocumentNode<
  GetBooksQuery,
  GetBooksVariables
> = gql`
  ${BOOK_FIELDS}
  query GetBooks($name: String, $limit: Int, $offset: Int) {
    books(name: $name, limit: $limit, offset: $offset) {
      ...BookFields
    }
  }
`;

export const GET_BOOK: TypedDocumentNode<GetBookQuery, GetBookVariables> = gql`
  ${BOOK_FIELDS}
  query GetBook($id: ID) {
    book(id: $id) {
      ...BookFields
    }
  }
`;
