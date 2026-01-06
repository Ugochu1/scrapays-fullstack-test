import { VStack } from "@chakra-ui/react";
import AppTextInput from "../common/AppTextInput";
import type { Book } from "@/interfaces/book";

interface BookEditProps {
  book: Book | null;
}

function BookEdit({ book }: BookEditProps) {
  return (
    <VStack spaceY={3}>
      <AppTextInput
        label="Name"
        placeholder="Enter a new name"
        defaultValue={book?.name}
      />
      <AppTextInput
        label="Description"
        placeholder="Enter a new description"
        defaultValue={book?.description}
      />
    </VStack>
  );
}

export default BookEdit;
