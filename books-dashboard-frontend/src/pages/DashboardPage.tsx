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
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router";
import { useDebounce } from "use-debounce";

const LIMIT = 1; // for simplicity, let's make this a constant

function DashboardPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth0();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  
  // search logic
  const [searchBookName, setSearchBookName] = useState("");
  const [offset, setOffset] = useState(0);
  const [debouncedSearch] = useDebounce(searchBookName, 300); // 300ms debounce

  // get books query
  const {
    data,
    loading: isBooksLoading,
    error,
    fetchMore,
  } = useQuery(GET_BOOKS, {
    variables: {
      name: debouncedSearch || undefined,
      limit: LIMIT,
      offset: offset,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (error) console.log(error);

  const loadMore = () => {
    fetchMore({
      variables: {
        offset: offset + LIMIT,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        return {
          books: [...prev.books, ...fetchMoreResult.books],
        };
      },
    });

    setOffset((prev) => prev + LIMIT);
  };

  const onPressDelete = (book: Book) => {
    setSelectedBook(book);
    setDialogOpen(true);
  };

  const onPressView = (book: Book) => {
    navigate(`/books/${book.id}`);
  };

  const onPressEdit = (book: Book) => {
    navigate(`/books/${book.id}/edit`);
  };

  useEffect(() => {
    console.log(data?.books, "is my books");
  }, [data]);

  return (
    <>
      <DashboardLayout
        headerTitle="My books"
        sidebar={<Sidebar user={user} logout={logout} />}
      >
        <VStack spaceY={5} alignItems="left">
          <AppText>
            Manage books in your collection. You can search, create, edit and
            delete. {searchBookName}
          </AppText>
          <VStack alignItems="left" spaceY={2}>
            <div>
              <AppButton>
                <IoMdAdd /> Create
              </AppButton>
            </div>
            <HStack>
              <AppTextInput
                placeholder="Search book by name"
                onTextChange={(newInput) => setSearchBookName(newInput)}
              />
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
