import { EmptyState, VStack } from "@chakra-ui/react";
import { FaBookOpen } from "react-icons/fa";
import BookListItem from "./BookListItem";
import type { Book } from "@/interfaces/book";

interface BookListProps {
  bookList: { id: number; name: string; description: string }[];
  onPressEdit: (id: number) => void;
  onPressDelete: (book: Book) => void;
}

function BookList({ bookList, onPressEdit, onPressDelete }: BookListProps) {
  if (bookList.length === 0) {
    return (
      <EmptyState.Root>
        <EmptyState.Content>
          <EmptyState.Indicator>
            <FaBookOpen />
          </EmptyState.Indicator>
          <VStack textAlign="center">
            <EmptyState.Title>Your book collection is empty</EmptyState.Title>
            <EmptyState.Description>
              Create a book by clicking on "+ Create" above.
            </EmptyState.Description>
          </VStack>
        </EmptyState.Content>
      </EmptyState.Root>
    );
  }

  return (
    <VStack>
      {bookList.map((book) => (
        <BookListItem
          key={book.id}
          book={book}
          onPressEdit={onPressEdit}
          onPressDelete={onPressDelete}
        />
      ))}
    </VStack>
  );
}

export default BookList;
