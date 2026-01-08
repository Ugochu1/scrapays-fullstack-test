import { ChakraAppProvider } from "@/components/ui/provider.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "./graphql/client.ts";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraAppProvider>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
            useRefreshTokens={true}
            cacheLocation="localstorage" // prevent re-authentication with every page refresh
          >
            <App />
          </Auth0Provider>
        </BrowserRouter>
      </ApolloProvider>
    </ChakraAppProvider>
  </StrictMode>
);
