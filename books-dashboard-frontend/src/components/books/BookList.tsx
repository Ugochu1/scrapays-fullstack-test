import { EmptyState, VStack } from "@chakra-ui/react";
import { FaBookOpen } from "react-icons/fa";
import BookListItem from "./BookListItem";

interface BookListProps {
  bookList: { id: number; name: string; description: string }[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

function BookList({ bookList, onEdit, onDelete }: BookListProps) {
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
          bookId={book.id}
          bookName={book.name}
          bookDescription={book.description}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </VStack>
  );
}

export default BookList;
