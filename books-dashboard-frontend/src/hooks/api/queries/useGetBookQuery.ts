import { GET_BOOK } from "@/graphql/books/queries";
import { useQuery } from "@apollo/client/react";

const useGetBookQuery = ({id}: {id: number}) => {
  const { data, error, loading } = useQuery(GET_BOOK, {
    variables: { id },
  });

  return {
    data,
    error,
    loading,
  };
};

export default useGetBookQuery;
