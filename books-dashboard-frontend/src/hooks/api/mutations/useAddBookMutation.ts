import { toaster } from "@/components/ui/toaster";
import { ADD_BOOK } from "@/graphql/books/mutations";
import { gql, type Reference } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

const useAddBookMutation = ({
  bookName,
  bookDescription,
  onAddCompleted,
}: {
  bookName: string;
  bookDescription: string;
  onAddCompleted: () => void;
}) => {
  const [addBook, { loading: addBookLoading }] = useMutation(ADD_BOOK, {
    variables: {
      newBookData: {
        name: bookName,
        description: bookDescription,
      },
    },
    onError(error) {
      toaster.create({
        description: error.message,
        type: "error",
      });
    },
    onCompleted(data) {
      toaster.create({
        description: `Successfully added book "${data.add_book.name}"`,
        type: "success",
      });
      onAddCompleted();
    },
    update(cache, { data }) {
      const newBook = data?.add_book;
      if (!newBook) return;

      cache.modify({
        fields: {
          books(existingBooksResponse = {}, { readField }) {
            const existingBooks: readonly Reference[] =
              existingBooksResponse.books ?? [];

            const newBookRef = cache.writeFragment({
              data: newBook,
              fragment: gql`
                fragment NewBook on Book {
                  id
                  name
                  description
                }
              `,
            });

            // Prevent duplicates
            if (
              existingBooks.some(
                (bookRef) => readField("id", bookRef) === newBook.id
              )
            ) {
              return existingBooksResponse;
            }

            return {
              ...existingBooksResponse,
              books: [newBookRef, ...existingBooks],
            };
          },
        },
      });
    },
  });

  return { addBook, addBookLoading };
};

export default useAddBookMutation;
