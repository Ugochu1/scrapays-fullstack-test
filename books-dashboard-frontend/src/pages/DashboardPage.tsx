import BookList from "@/components/books/BookList";
import AppButton from "@/components/common/AppButton";
import AppDialog from "@/components/common/AppDialog";
import AppLoader from "@/components/common/AppLoader";
import AppText from "@/components/common/AppText";
import AppTextInput from "@/components/common/AppTextInput";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import Sidebar from "@/components/layouts/Sidebar";
import { GET_BOOKS } from "@/graphql/books/queries";
import type { Book } from "@/interfaces/book";
import { useQuery } from "@apollo/client/react";
import { useAuth0 } from "@auth0/auth0-react";
import { HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function DashboardPage() {
  const { user, logout } = useAuth0();
  const { data, loading: isBooksLoading, error } = useQuery(GET_BOOKS);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  if (error) console.log(error);

  const onPressDelete = (book: Book) => {
    setSelectedBook(book);
    setDialogOpen(true);
  };

  const onPressView = (book: Book) => {
    console.log(book.id);
  };

  const onPressEdit = (book: Book) => {
    console.log(book.id);
  };

  return (
    <>
      <DashboardLayout
        headerTitle="My books"
        sidebar={<Sidebar user={user} logout={logout} />}
      >
        <VStack spaceY={5} alignItems="left">
          <AppText>
            Manage books in your collection. You can search, create, edit and
            delete.
          </AppText>
          <VStack alignItems="left" spaceY={2}>
            <div>
              <AppButton>
                <IoMdAdd /> Create
              </AppButton>
            </div>
            <HStack>
              <AppTextInput placeholder="Search book by name" />
              <AppButton>Search</AppButton>
            </HStack>
            {isBooksLoading ? (
              <AppLoader />
            ) : (
              <BookList
                bookList={data?.books ?? []}
                onPressView={onPressView}
                onPressDelete={onPressDelete}
                onPressEdit={onPressEdit}
              />
            )}
          </VStack>
        </VStack>
      </DashboardLayout>

      {/* dialog for delete book confirmation */}
      <AppDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        actionTrigger={<AppButton background="danger">Yes, Delete</AppButton>}
        title="Delete book"
      >
        Are you sure you want to delete {selectedBook?.name}?
      </AppDialog>
    </>
  );
}

export default DashboardPage;
