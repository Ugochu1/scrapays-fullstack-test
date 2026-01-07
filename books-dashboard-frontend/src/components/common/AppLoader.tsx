import { Center, HStack, Spinner } from "@chakra-ui/react";

interface AppLoaderProps {
  loaderText?: string;
  fullPage?: boolean;
  size?: "sm" | "md" | "lg";
}

function AppLoader({
  loaderText,
  fullPage = false,
  size = "md",
}: AppLoaderProps) {
  return (
    <Center h={fullPage ? "100vh" : undefined}>
      <HStack>
        <Spinner size={size} />
        {loaderText && <div>{loaderText}</div>}
      </HStack>
    </Center>
  );
}

export default AppLoader;
