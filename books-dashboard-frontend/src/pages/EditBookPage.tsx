import AppButton from "@/components/common/AppButton";
import AppLoader from "@/components/common/AppLoader";
import AppText from "@/components/common/AppText";
import AppTextInput from "@/components/common/AppTextInput";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { EDIT_BOOK } from "@/graphql/books/mutations";
import { GET_BOOK } from "@/graphql/books/queries";
import { useMutation, useQuery } from "@apollo/client/react";
import { HStack, VStack } from "@chakra-ui/react";
import { useEffect, useEffectEvent, useMemo, useState } from "react";
import { useParams } from "react-router";

function EditBookPage() {
  const { id } = useParams();
  const {
    data,
    error: isFetchingError,
    loading: isFetchingBookLoading,
  } = useQuery(GET_BOOK, {
    variables: { id: parseInt(id as string) },
  });

  const [bookId, setBookId] = useState<number>(0); // give abitrary value (not important)
  const [bookName, setBookName] = useState("");
  const [bookDescription, setBookDescription] = useState("");

  const [editBook, { loading: isEditBookLoading }] =
    useMutation(EDIT_BOOK, {
      variables: {
        editBookData: {
          id: bookId,
          name: bookName,
          description: bookDescription,
        },
      },
      onError(error) {
        // do something with the error message
        console.log(error.message, error.name)
      },
      onCompleted(data) {
        console.log(data.edit_book.name, "updated successfully")
        setBookName(data.edit_book.name);
        setBookDescription(data.edit_book.description);
      },
    });

  const checkDetailsMatch = useMemo(() => {
    if (!data?.book) return true;
    return (
      bookName.trim().toLowerCase() === data?.book.name &&
      bookDescription.trim().toLowerCase() === data?.book.description
    );
  }, [bookName, data?.book, bookDescription]);

  const setDefaultBookValues = useEffectEvent(() => {
    if (data?.book) {
      setBookId(data.book.id);
      setBookName(data.book.name);
      setBookDescription(data.book.description);
    }
  });

  useEffect(() => {
    setDefaultBookValues();
  }, [data?.book]);

  if (isFetchingError) console.log(isFetchingError);

  return (
    <DashboardLayout
      headerTitle={data?.book.name ? `Edit "${data.book.name}"` : "Edit Book"}
    >
      <VStack alignItems="flex-start" spaceY={5}>
        <AppText>Update the texts to edit</AppText>
        {isFetchingBookLoading && <AppLoader loaderText="Fetching book..." />}
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
        <HStack>
          <AppButton background="danger">Delete</AppButton>
          <AppButton disabled={checkDetailsMatch} onClick={() => editBook()}>
            Update {data?.book.name} {isEditBookLoading && <AppLoader size="sm" />}
          </AppButton>
        </HStack>
      </VStack>
    </DashboardLayout>
  );
}

export default EditBookPage;
