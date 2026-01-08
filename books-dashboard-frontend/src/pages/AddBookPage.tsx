import AppButton from "@/components/common/AppButton";
import AppLoader from "@/components/common/AppLoader";
import AppText from "@/components/common/AppText";
import AppTextInput from "@/components/common/AppTextInput";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { toaster } from "@/components/ui/toaster";
import { ADD_BOOK } from "@/graphql/books/mutations";
import type { Reference } from "@apollo/client";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { VStack } from "@chakra-ui/react";
import { useState } from "react";

function AddBookPage() {
  const [bookName, setBookName] = useState("");
  const [bookDescription, setBookDescription] = useState("");

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
      setBookName(""); // reset
      setBookDescription(""); // reset
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

  return (
    <DashboardLayout headerTitle="Add new book">
      <VStack alignItems="flex-start" spaceY={5}>
        <AppText>Complete form to add a new book to your collection</AppText>
        <VStack spaceY={3} w="full">
          <AppTextInput
            label="Name"
            placeholder="Enter a new name"
            value={bookName}
            onTextChange={(newText) => setBookName(newText)}
          />
          <AppTextInput
            label="Description"
            placeholder="Enter a new description"
            value={bookDescription}
            onTextChange={(newText) => setBookDescription(newText)}
          />
        </VStack>
        <div>
          <AppButton
            disabled={
              !(bookName.trim().length && bookDescription.trim().length)
            }
            onClick={() => addBook()}
          >
            Add book {addBookLoading && <AppLoader size="sm" />}
          </AppButton>
        </div>
      </VStack>
    </DashboardLayout>
  );
}

export default AddBookPage;
