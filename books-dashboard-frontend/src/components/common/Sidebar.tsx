import { User, type LogoutOptions } from "@auth0/auth0-react";
import { Avatar, Center, VStack } from "@chakra-ui/react";
import AppButton from "./AppButton";
import AppText from "./AppText";

interface SidebarProps {
  user: User | undefined;
  logout: (options?: LogoutOptions | undefined) => Promise<void>;
}

function Sidebar({ user, logout }: SidebarProps) {
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
          <Avatar.Root size="2xl" colorPalette="blue">
            <Avatar.Fallback name={user?.name} fontSize="4xl" />
          </Avatar.Root>
          <AppText fontSize="lg" fontWeight="bold">
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
