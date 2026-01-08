import DeleteBookDialog from "@/components/books/DeleteBookDialog";
import AppButton from "@/components/common/AppButton";
import AppEmptyState from "@/components/common/AppEmptyState";
import AppLoader from "@/components/common/AppLoader";
import AppText from "@/components/common/AppText";
import AppTextInput from "@/components/common/AppTextInput";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import useEditBookMutation from "@/hooks/api/mutations/useEditBookMutation";
import useGetBookQuery from "@/hooks/api/queries/useGetBookQuery";
import { HStack, VStack } from "@chakra-ui/react";
import { useEffect, useEffectEvent, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditBookPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data,
    loading: isFetchingBookLoading,
    error: isFetchingBookError,
  } = useGetBookQuery({ id: parseInt(id as string) });

  // manage delete dialog state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [bookId, setBookId] = useState<number>(0); // give abitrary value (not important)
  const [bookName, setBookName] = useState("");
  const [bookDescription, setBookDescription] = useState("");

  const {editBook, isEditBookLoading} = useEditBookMutation({
    bookId,
    bookName,
    bookDescription,
    onEditCompleted(data) {
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

  if (isFetchingBookError) console.log(isFetchingBookError);

  return (
    <>
      <DashboardLayout headerTitle="Edit Book">
        {isFetchingBookLoading && <AppLoader loaderText="Fetching book..." />}

        {!data?.book && !isFetchingBookLoading && (
          <AppEmptyState
            title="Book not found."
            description="The searched book does not exist"
          />
        )}
        {data?.book && !isFetchingBookLoading && (
          <VStack alignItems="flex-start" spaceY={5}>
            <AppText>Update the texts to edit</AppText>
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
              <AppButton
                background="danger"
                onClick={() => setDeleteDialogOpen(true)}
              >
                Delete
              </AppButton>
              <AppButton
                disabled={checkDetailsMatch}
                onClick={() => editBook()}
              >
                Update {data?.book.name}{" "}
                {isEditBookLoading && <AppLoader size="sm" />}
              </AppButton>
            </HStack>
          </VStack>
        )}
      </DashboardLayout>
      <DeleteBookDialog
        dialogOpen={deleteDialogOpen}
        setDialogOpen={setDeleteDialogOpen}
        selectedBook={data?.book}
        onDeleteCompleted={() => navigate("/")}
      />
    </>
  );
}

export default EditBookPage;
