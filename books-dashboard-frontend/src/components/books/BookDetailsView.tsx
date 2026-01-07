import { HStack, VStack } from "@chakra-ui/react";
import AppText from "../common/AppText";
import type { Book } from "@/interfaces/book";

interface BookDetailsViewProps {
  book: Book | null;
}

function BookDetailsView({ book }: BookDetailsViewProps) {
  return (
    <VStack alignItems="left">
      <HStack>
        <AppText fontWeight="bold">ID:</AppText>
        <AppText>{book?.id}</AppText>
      </HStack>
      <div>
        <AppText fontWeight="bold">Description:</AppText>
        <AppText>{book?.description}</AppText>
      </div>
    </VStack>
  );
}

export default BookDetailsView;
