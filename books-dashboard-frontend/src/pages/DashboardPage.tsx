import BookList from "@/components/books/BookList";
import AppButton from "@/components/common/AppButton";
import AppDialog from "@/components/common/AppDialog";
import AppLoader from "@/components/common/AppLoader";
import AppText from "@/components/common/AppText";
import AppTextInput from "@/components/common/AppTextInput";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { GET_BOOKS } from "@/graphql/books/queries";
import type { Book } from "@/interfaces/book";
import { useQuery } from "@apollo/client/react";
import { Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router";
import { useDebounce } from "use-debounce";

const LIMIT = 10; // for simplicity, let's make this a constant

function DashboardPage() {
  const navigate = useNavigate();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // search logic
  const [searchBookName, setSearchBookName] = useState("");
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
      page: 1,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (error) console.log(error);

  const loadMore = async () => {
    if (!data?.books.pageInfo.hasNextPage) return;

    await fetchMore({
      variables: {
        page: data.books.pageInfo.page + 1,
        limit: LIMIT,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        return {
          books: {
            ...fetchMoreResult.books,
            books: [...prev.books.books, ...fetchMoreResult.books.books],
          },
        };
      },
    });
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

  return (
    <>
      <DashboardLayout headerTitle="My books">
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

            <AppTextInput
              label="Search book name"
              placeholder="Search book by name"
              onTextChange={(newInput) => setSearchBookName(newInput)}
            />

            <BookList
              bookList={data?.books.books ?? []}
              onPressView={onPressView}
              onPressDelete={onPressDelete}
              onPressEdit={onPressEdit}
            />
            {isBooksLoading && <AppLoader loaderText="Fetching..." />}

            {data?.books.pageInfo.hasNextPage && (
              <Flex justifyContent="center">
                <AppButton onClick={loadMore}>Fetch More</AppButton>
              </Flex>
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
