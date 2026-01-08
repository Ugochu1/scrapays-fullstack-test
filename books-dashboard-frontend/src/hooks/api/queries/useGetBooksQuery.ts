import { GET_BOOKS } from "@/graphql/books/queries";
import { useQuery } from "@apollo/client/react";

const useGetBooksQuery = ({
  debouncedSearch,
  limit,
}: {
  debouncedSearch: string;
  limit: number;
}) => {
  const {
    data,
    loading: isBooksLoading,
    error,
    fetchMore,
  } = useQuery(GET_BOOKS, {
    variables: {
      name: debouncedSearch || undefined,
      limit: limit,
      page: 1,
    },
    notifyOnNetworkStatusChange: true,
  });

  const loadMore = async () => {
    if (!data?.books.pageInfo.hasNextPage) return;

    await fetchMore({
      variables: {
        page: data.books.pageInfo.page + 1,
        limit: limit,
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

  return { data, isBooksLoading, error, loadMore };
};

export default useGetBooksQuery;
