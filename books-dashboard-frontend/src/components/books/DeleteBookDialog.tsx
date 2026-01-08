import type { Book } from "@/interfaces/book";
import AppButton from "../common/AppButton";
import AppDialog from "../common/AppDialog";
import { useMutation } from "@apollo/client/react";
import { DELETE_BOOK } from "@/graphql/books/mutations";
import AppLoader from "../common/AppLoader";
import type { Reference } from "@apollo/client";

interface DeleteBookDialogProps {
  selectedBook: Book | null;
  dialogOpen: boolean;
  setDialogOpen: (value: boolean) => void;
  onDelete?: (book: Book) => void;
}

function DeleteBookDialog({
  selectedBook,
  dialogOpen,
  setDialogOpen,
  onDelete,
}: DeleteBookDialogProps) {
  const [deleteBook, { loading: isDeleting }] = useMutation(DELETE_BOOK, {
    variables: { bookId: selectedBook?.id },
    onError(error) {
      console.log(error.name, "occurred when deleting book");
    },
    onCompleted(data) {
      console.log(data.delete_book.name, "deleted successfully");
      if (onDelete) onDelete(data.delete_book); // call onDelete callback on parent
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

  const deleteBookAndCloseDialog = async () => {
    await deleteBook()
    setDialogOpen(false);
  }

  return (
    <AppDialog
      open={dialogOpen}
      setOpen={setDialogOpen}
      actionTrigger={
        <AppButton background="danger" onClick={deleteBookAndCloseDialog}>
          Yes, Delete {isDeleting && <AppLoader size="sm" />}
        </AppButton>
      }
      title="Delete book"
    >
      Are you sure you want to delete {selectedBook?.name}?
    </AppDialog>
  );
}

export default DeleteBookDialog;
