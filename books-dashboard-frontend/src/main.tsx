import { ChakraAppProvider } from "@/components/ui/provider.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "./graphql/client.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ChakraAppProvider>
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </ChakraAppProvider>
    </Auth0Provider>
  </StrictMode>
);
