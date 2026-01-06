import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import AppLoader from "./components/common/AppLoader";
import { DashboardLayout } from "./components/layouts/DashboardLayout";
import Sidebar from "./components/layouts/Sidebar";
import AppText from "./components/common/AppText";
import { HStack, VStack } from "@chakra-ui/react";
import AppButton from "./components/common/AppButton";
import AppTextInput from "./components/common/AppTextInput";
import { IoMdAdd } from "react-icons/io";
import BookList from "./components/books/BookList";

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect, user, logout } =
    useAuth0();

  if (isLoading) {
    return <AppLoader loaderText="Sign in" />;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return (
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
          <BookList
            bookList={
              [
                // {
                //   id: 1,
                //   name: "My housemates",
                //   description:
                //     "This is a book that talks about having different sets of people as housemates. It's so funny",
                // },
                // {
                //   id: 2,
                //   name: "My neighbors",
                //   description:
                //     "This is a book that talks about having different sets of people as neighbors. It's so funny",
                // },
                // {
                //   id: 3,
                //   name: "Chike and the river",
                //   description:
                //     "A bold attempt to copy Chinua Achebe, what you saying now?",
                // },
                // {
                //   id: 4,
                //   name: "Chike and the river 2",
                //   description:
                //     "A bold attempt to copy Chinua Achebe, what you saying now?",
                // },
              ]
            }
            onDelete={() => {}}
            onEdit={() => {}}
          />
        </VStack>
      </VStack>
    </DashboardLayout>
  );
}

export default App;
