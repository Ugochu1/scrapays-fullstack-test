import AppButton from "@/components/common/AppButton";
import AppLoader from "@/components/common/AppLoader";
import AppText from "@/components/common/AppText";
import AppTextInput from "@/components/common/AppTextInput";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import useAddBookMutation from "@/hooks/api/mutations/useAddBookMutation";
import { VStack } from "@chakra-ui/react";
import { useState } from "react";

function AddBookPage() {
  const [bookName, setBookName] = useState("");
  const [bookDescription, setBookDescription] = useState("");

  const { addBook, addBookLoading } = useAddBookMutation({
    bookName,
    bookDescription,
    onAddCompleted() {
      setBookName(""); // reset
      setBookDescription(""); // reset
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
