import { Center, HStack, Spinner } from "@chakra-ui/react";

interface AppLoaderProps {
  loaderText?: string;
}

function AppLoader({ loaderText }: AppLoaderProps) {
  return (
    <Center h="100vh">
      <HStack>
        <Spinner />
        {loaderText && <div>{loaderText}</div>}
      </HStack>
    </Center>
  );
}

export default AppLoader;
