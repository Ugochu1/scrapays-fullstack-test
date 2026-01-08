import DeleteBookDialog from "@/components/books/DeleteBookDialog";
import AppButton from "@/components/common/AppButton";
import AppEmptyState from "@/components/common/AppEmptyState";
import AppLoader from "@/components/common/AppLoader";
import AppText from "@/components/common/AppText";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import useGetBookQuery from "@/hooks/api/queries/useGetBookQuery";
import { HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

function ViewBookPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error, loading } = useGetBookQuery({ id: parseInt(id as string) });

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  if (error) console.log(error);

  return (
    <>
      <DashboardLayout headerTitle="Book Details">
        {loading && <AppLoader loaderText="Fetching Book..." />}

        {!data?.book && !loading && (
          <AppEmptyState
            title="Book not found."
            description="The searched book does not exist"
          />
        )}
        {data?.book && !loading && (
          <VStack alignItems="flex-start" spaceY={10}>
            <VStack alignItems="flex-start" w="full" spaceY={3}>
              <HStack>
                <AppText fontWeight="bold">ID:</AppText>
                <AppText>{data.book.id}</AppText>
              </HStack>
              <div>
                <AppText fontWeight="bold">Name:</AppText>
                <AppText>{data.book.name}</AppText>
              </div>
              <div>
                <AppText fontWeight="bold">Description:</AppText>
                <AppText>{data.book.description}</AppText>
              </div>
            </VStack>
            <HStack>
              <AppButton
                background="danger"
                onClick={() => setDeleteDialogOpen(true)}
              >
                Delete
              </AppButton>
              <Link to={`/books/${data.book.id}/edit`}>
                <AppButton>Edit</AppButton>
              </Link>
            </HStack>
          </VStack>
        )}
      </DashboardLayout>
      {/* display are you sure delete dialog to confirm */}
      <DeleteBookDialog
        dialogOpen={deleteDialogOpen}
        setDialogOpen={setDeleteDialogOpen}
        selectedBook={data?.book}
        onDeleteCompleted={() => navigate("/")} // navigate to "My books" on delete
      />
    </>
  );
}

export default ViewBookPage;
