import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import AppLoader from "./components/common/AppLoader";
import DashboardPage from "./pages/DashboardPage";
import { Center } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import ViewBookPage from "./pages/ViewBookPage";
import EditBookPage from "./pages/EditBookPage";
import AddBookPage from "./pages/AddBookPage";

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <Center h="full" w="100vw" bg="bg">
        <AppLoader fullPage loaderText="Signing in" />
      </Center>
    );
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  // return <DashboardPage />;
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/books/:id" element={<ViewBookPage />} />
      <Route path="/books/:id/edit" element={<EditBookPage />} />
      <Route path="/books/add" element={<AddBookPage />} />
    </Routes>
  );
}

export default App;
