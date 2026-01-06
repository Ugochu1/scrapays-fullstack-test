import { HStack, IconButton, Menu, Portal, VStack } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import AppText from "../common/AppText";

interface BookItemProps {
  bookId: number;
  bookName: string;
  bookDescription: string;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

function BookListItem({
  bookId,
  bookName,
  bookDescription,
  onDelete,
  onEdit,
}: BookItemProps) {
  return (
    <HStack
      justifyContent="space-between"
      pr={5}
      border="1px solid"
      borderColor="border"
      rounded="l3"
      w="full"
    >
      <VStack
        alignItems="left"
        w="90%"
        py={5}
        pl={5}
        onClick={() => console.log("Book item", bookId, "clicked")}
        cursor="pointer"
      >
        <AppText fontWeight="bold">
          {bookName}
        </AppText>
        <AppText truncate>{bookDescription}</AppText>
      </VStack>

      <Menu.Root>
        <Menu.Trigger asChild>
          <IconButton color="text" bg="bg">
            <MdMoreVert />
          </IconButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content bg="bg">
              <Menu.Item
                cursor="pointer"
                value="edit-book"
                onClick={() => onEdit(bookId)}
                color="text"
              >
                Edit
              </Menu.Item>
              <Menu.Item
                cursor="pointer"
                value="delete-book"
                onClick={() => onDelete(bookId)}
                color="danger"
              >
                Delete
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </HStack>
  );
}

export default BookListItem;
