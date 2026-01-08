import { toaster } from "@/components/ui/toaster";
import { EDIT_BOOK } from "@/graphql/books/mutations";
import type { EditBookMutation } from "@/graphql/books/types";
import { useMutation } from "@apollo/client/react";

const useEditBookMutation = ({
  bookId,
  bookName,
  bookDescription,
  onEditCompleted,
}: {
  bookId: number;
  bookName: string;
  bookDescription: string;
  onEditCompleted: (data: EditBookMutation) => void;
}) => {
  const [editBook, { loading: isEditBookLoading }] = useMutation(EDIT_BOOK, {
    variables: {
      editBookData: {
        id: bookId,
        name: bookName,
        description: bookDescription,
      },
    },
    onError(error) {
      // do something with the error message
      console.log(error.message, error.name);
      toaster.create({
        description: error.message,
        type: "error",
      });
    },
    onCompleted(data) {
      toaster.create({
        description: `Successfully updated book "${data.edit_book.name}"`,
        type: "success",
      });
      onEditCompleted(data);
    },
  });

  return { editBook, isEditBookLoading };
};

export default useEditBookMutation;
