import { EmptyState, VStack } from "@chakra-ui/react";
import { FaBookOpen } from "react-icons/fa";
import BookListItem from "./BookListItem";
import type { Book } from "@/interfaces/book";

interface BookListProps {
  bookList: { id: number; name: string; description: string }[];
  onPressView: (book: Book) => void;
  onPressEdit: (book: Book) => void;
  onPressDelete: (book: Book) => void;
}

function BookList({
  bookList,
  onPressView,
  onPressEdit,
  onPressDelete,
}: BookListProps) {
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
    <>
      {bookList.map((book) => (
        <BookListItem
          key={book.id}
          book={book}
          onPressView={onPressView}
          onPressEdit={onPressEdit}
          onPressDelete={onPressDelete}
        />
      ))}
    </>
  );
}

export default BookList;
