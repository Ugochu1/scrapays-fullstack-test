import { User, type LogoutOptions } from "@auth0/auth0-react";
import { Avatar, Button, Center, Text, VStack } from "@chakra-ui/react";

interface SidebarProps {
  user: User | undefined;
  logout: (options?: LogoutOptions | undefined) => Promise<void>;
}

function Sidebar({ user, logout }: SidebarProps) {
  return (
    <Center h="full">
      <VStack spaceY={8}>
        <VStack spaceY={3}>
          <Avatar.Root size="2xl" colorPalette="blue">
            <Avatar.Fallback name={user?.name} fontSize="4xl" />
          </Avatar.Root>
          <Text fontSize="lg" fontWeight="bold">
            {user?.name}
          </Text>
        </VStack>
        <Button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </Button>
      </VStack>
    </Center>
  );
}

export default Sidebar;
