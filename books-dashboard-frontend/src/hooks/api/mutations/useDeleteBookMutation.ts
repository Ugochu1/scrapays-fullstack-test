import { toaster } from "@/components/ui/toaster";
import { DELETE_BOOK } from "@/graphql/books/mutations";
import type { Book } from "@/interfaces/book";
import type { Reference } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

const useDeleteBookMutation = ({
  selectedBook,
  onDeleteCompleted,
}: {
  selectedBook?: Book;
  onDeleteCompleted?: (book: Book) => void;
}) => {
  const [deleteBook, { loading: isDeleting }] = useMutation(DELETE_BOOK, {
    variables: { bookId: selectedBook?.id },
    onError(error) {
      console.log(error.name, "occurred when deleting book");
      toaster.create({
        description: error.message,
        type: "error",
      });
    },
    onCompleted(data) {
      toaster.create({
        description: `${data.delete_book.name} deleted successfully`,
        type: "success",
      });
      if (onDeleteCompleted) onDeleteCompleted(data.delete_book); // call onDelete callback on parent
    },
    update(cache, { data }) {
      const deletedBookId = data?.delete_book?.id;
      if (!deletedBookId) return;
      cache.modify({
        fields: {
          books(existingBooksResponse = {}, { readField }) {
            const existingBooks: readonly Reference[] =
              existingBooksResponse.books ?? [];

            return {
              ...existingBooksResponse,
              books: existingBooks.filter((bookRef) => {
                return readField("id", bookRef) !== deletedBookId;
              }),
            };
          },
        },
      });
    },
  });

  return { deleteBook, isDeleting };
};

export default useDeleteBookMutation;
