import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Center, VStack } from "@chakra-ui/react";
import AppButton from "../common/AppButton";
import AppText from "../common/AppText";

function Sidebar() {
  const { user, logout } = useAuth0();
  return (
    <Center
      h="full"
      p={{ base: 0, md: 6 }}
      borderRadius={{ base: 0, md: 24 }}
      bg='surface'
      border="1px solid"
      borderColor='border'
    >
      <VStack spaceY={8}>
        <VStack spaceY={3}>
          <Avatar.Root colorPalette="blue">
            <Avatar.Fallback name={user?.name} />
          </Avatar.Root>
          <AppText fontWeight="bold">
            {user?.name}
          </AppText>
        </VStack>
        <AppButton
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </AppButton>
      </VStack>
    </Center>
  );
}

export default Sidebar;
