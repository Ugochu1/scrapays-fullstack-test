import { VStack } from "@chakra-ui/react";
import BookListItem from "./BookListItem";
import type { Book } from "@/interfaces/book";
import AppEmptyState from "../common/AppEmptyState";

interface BookListProps {
  isBooksLoading: boolean;
  bookList: { id: number; name: string; description: string }[];
  onPressView: (book: Book) => void;
  onPressEdit: (book: Book) => void;
  onPressDelete: (book: Book) => void;
}

function BookList({
  isBooksLoading,
  bookList,
  onPressView,
  onPressEdit,
  onPressDelete,
}: BookListProps) {
  if (bookList.length === 0 && !isBooksLoading) {
    return (
      <AppEmptyState
        title="No books found."
        description={'Add a book by clicking on "+ Add book" above.'}
      />
    );
  }

  return (
    <VStack>
      {bookList.map((book) => (
        <BookListItem
          key={book.id}
          book={book}
          onPressView={onPressView}
          onPressEdit={onPressEdit}
          onPressDelete={onPressDelete}
        />
      ))}
    </VStack>
  );
}

export default BookList;
