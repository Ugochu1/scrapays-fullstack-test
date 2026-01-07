import { HStack, IconButton, Menu, Portal, VStack } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import AppText from "../common/AppText";
import type { Book } from "@/interfaces/book";

interface BookItemProps {
  book: Book;
  onPressView: (book: Book) => void;
  onPressEdit: (book: Book) => void;
  onPressDelete: (book: Book) => void;
}

const TRUNCATE_LENGTH = 70

function BookListItem({
  book,
  onPressView,
  onPressEdit,
  onPressDelete,
}: BookItemProps) {
  const { name, description } = book;

  const truncateDescription = () => {
    let desc = description.substring(0, TRUNCATE_LENGTH)
    if (description.length > TRUNCATE_LENGTH) {
      desc += "..."
    }
    return desc;
  }

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
        alignItems="flex-start"
        w="90%"
        minW={0}
        py={5}
        pl={5}
        onClick={() => onPressView(book)}
        cursor="pointer"
      >
        <AppText fontWeight="bold">{name}</AppText>
        <AppText>{truncateDescription()}</AppText>
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
                value="view-book"
                onClick={() => onPressView(book)}
                color="primary"
              >
                View
              </Menu.Item>
              <Menu.Item
                cursor="pointer"
                value="edit-book"
                onClick={() => onPressEdit(book)}
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
