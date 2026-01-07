import { gql } from "@apollo/client";

export const BOOK_FIELDS = gql`
  fragment BookFields on Book {
    id
    name
    description
  }
`;