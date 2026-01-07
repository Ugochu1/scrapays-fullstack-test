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
  query GetBooks($name: String, $limit: Int, $page: Int) {
    books(name: $name, limit: $limit, page: $page) {
      books {
        ...BookFields
      }
      pageInfo {
        page
        hasNextPage
        limit
        totalCount
        totalPages
      }
    }
  }
`;

export const GET_BOOK: TypedDocumentNode<GetBookQuery, GetBookVariables> = gql`
  ${BOOK_FIELDS}
  query GetBook($id: Int!) {
    book(id: $id) {
      ...BookFields
    }
  }
`;
