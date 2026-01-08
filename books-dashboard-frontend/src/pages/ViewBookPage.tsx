import AppButton from "@/components/common/AppButton";
import AppLoader from "@/components/common/AppLoader";
import AppText from "@/components/common/AppText";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { GET_BOOK } from "@/graphql/books/queries";
import { useQuery } from "@apollo/client/react";
import { HStack, VStack } from "@chakra-ui/react";
import { Link, useParams } from "react-router";

function ViewBookPage() {
  const { id } = useParams();
  const { data, error, loading } = useQuery(GET_BOOK, {
    variables: { id: parseInt(id as string) },
  });

  if (error) console.log(error);

  return (
    <DashboardLayout
      headerTitle={
        data?.book.name ? data.book.name : "Book Details"
      }
    >
      {loading && <AppLoader loaderText="Fetching Book..." />}

      <VStack alignItems="flex-start" spaceY={10}>
        <VStack alignItems="flex-start" w="full" spaceY={3}>
          <HStack>
            <AppText fontWeight="bold">ID:</AppText>
            <AppText>{data?.book.id}</AppText>
          </HStack>
          <div>
            <AppText fontWeight="bold">Name:</AppText>
            <AppText>{data?.book.name}</AppText>
          </div>
          <div>
            <AppText fontWeight="bold">Description:</AppText>
            <AppText>{data?.book.description}</AppText>
          </div>
        </VStack>
        <HStack>
          <AppButton background="danger">Delete</AppButton>
          <Link to={`/books/${data?.book.id}/edit`}>
            <AppButton>Edit</AppButton>
          </Link>
        </HStack>
      </VStack>
    </DashboardLayout>
  );
}

export default ViewBookPage;
