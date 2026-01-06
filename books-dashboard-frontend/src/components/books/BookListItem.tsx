import { HStack, IconButton, Menu, Portal, VStack } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import AppText from "../common/AppText";
import type { Book } from "@/interfaces/book";

interface BookItemProps {
  book: Book;
  onPressEdit: (id: number) => void;
  onPressDelete: (book: Book) => void;
}

function BookListItem({ book, onPressEdit, onPressDelete }: BookItemProps) {
  const { id, name, description } = book;
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
        onClick={() => console.log("Book item", id, "clicked")}
        cursor="pointer"
      >
        <AppText fontWeight="bold">{name}</AppText>
        <AppText truncate>{description}</AppText>
      </VStack>

      <Menu.Root>
        <Menu.Trigger asChild>
          <IconButton color="text" bg="bg">
            <MdMoreVert />
          </IconButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content bg="bg" border="1px solid" borderColor="border">
              <Menu.Item
                cursor="pointer"
                value="edit-book"
                onClick={() => onPressEdit(id)}
                color="text"
              >
                Edit
              </Menu.Item>
              <Menu.Item
                cursor="pointer"
                value="delete-book"
                color="danger"
                onClick={() => onPressDelete(book)}
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
