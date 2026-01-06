import BookDetailsView from "@/components/books/BookDetailsView";
import BookEdit from "@/components/books/BookEdit";
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

type ModalType = "edit" | "delete" | "view";

interface DashboardModalProps {
  modalType?: ModalType;
  selectedBook: Book | null;
}

function DashboardModalBody({ modalType, selectedBook }: DashboardModalProps) {
  if (modalType === "delete")
    return `Are you sure you want to delete ${selectedBook?.name}?`;

  if (modalType === "view") return <BookDetailsView book={selectedBook} />;

  if (modalType === "edit") return <BookEdit book={selectedBook} />;
}

function DashboardActionTriggers({
  modalType,
  selectedBook,
}: DashboardModalProps) {
  if (modalType === "delete") return <div>{selectedBook?.description}</div>;

  if (modalType === "view") return <div></div>;

  if (modalType === "edit") return <div></div>;
}

function DashboardPage() {
  const { user, logout } = useAuth0();
  const { data, loading: isBooksLoading, error } = useQuery(GET_BOOKS);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [modalType, setModalType] = useState<ModalType | undefined>();

  if (error) console.log(error);

  const selectBookAndOpenModal = (book: Book) => {
    // set the selected book
    setSelectedBook(book);
    // open the modal
    setDialogOpen(true);
  };

  const onPressDelete = (book: Book) => {
    setModalType("delete");
    selectBookAndOpenModal(book);
  };

  const onPressView = (book: Book) => {
    setModalType("view");
    selectBookAndOpenModal(book);
  };

  const onPressEdit = (book: Book) => {
    setModalType("edit");
    selectBookAndOpenModal(book);
  };

  const deleteSelectedBook = () => {
    if (!selectedBook) return;

    console.log("book deleted. Id:", selectedBook.id);
    setDialogOpen(false);
  };

  const getModalTitle = () => {
    switch (modalType) {
      case "delete":
        return "Delete book";
      case "edit":
        return "Edit book";
      case "view":
        return selectedBook?.name;
    }
  };

  return (
    <>
      <DashboardLayout sidebar={<Sidebar user={user} logout={logout} />}>
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

      {/* one dialog box for all situations */}
      <AppDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        actionTrigger={
          <DashboardActionTriggers
            modalType={modalType}
            selectedBook={selectedBook}
          />
        }
        title={getModalTitle()}
      >
        <DashboardModalBody modalType={modalType} selectedBook={selectedBook} />
      </AppDialog>
    </>
  );
}

export default DashboardPage;
