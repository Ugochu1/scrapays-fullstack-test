import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import AppLoader from "./components/common/AppLoader";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect } =
    useAuth0();

  if (isLoading) {
    return <AppLoader loaderText="Sign in" />;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return <DashboardPage />;
}

export default App;
