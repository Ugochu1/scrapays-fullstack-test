import type { Book } from "@/interfaces/book";
import AppButton from "../common/AppButton";
import AppDialog from "../common/AppDialog";
import AppLoader from "../common/AppLoader";
import useDeleteBookMutation from "@/hooks/api/mutations/useDeleteBookMutation";

interface DeleteBookDialogProps {
  selectedBook?: Book;
  dialogOpen: boolean;
  setDialogOpen: (value: boolean) => void;
  onDeleteCompleted?: (book: Book) => void;
}

function DeleteBookDialog({
  selectedBook,
  dialogOpen,
  setDialogOpen,
  onDeleteCompleted,
}: DeleteBookDialogProps) {
  const { deleteBook, isDeleting } = useDeleteBookMutation({
    selectedBook,
    onDeleteCompleted,
  });

  const deleteBookAndCloseDialog = async () => {
    await deleteBook();
    setDialogOpen(false);
  };

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
      Are you sure you want to delete "{selectedBook?.name}"?
    </AppDialog>
  );
}

export default DeleteBookDialog;
