import { Center, HStack, Spinner } from "@chakra-ui/react";

interface AppLoaderProps {
  loaderText?: string;
  fullPage?: boolean;
}

function AppLoader({ loaderText, fullPage = false }: AppLoaderProps) {
  return (
    <Center h={fullPage ? "100vh" : undefined}>
      <HStack>
        <Spinner />
        {loaderText && <div>{loaderText}</div>}
      </HStack>
    </Center>
  );
}

export default AppLoader;
