import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import AppLoader from "./components/common/AppLoader";
import { DashboardLayout } from "./components/layouts/DashboardLayout";
import Sidebar from "./components/common/Sidebar";
import AppText from "./components/common/AppText";
import { VStack } from "@chakra-ui/react";

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
      <VStack>
        <AppText>
          YOu can create, edit and delete any books in your collection.
        </AppText>
      </VStack>
    </DashboardLayout>
  );
}

export default App;
