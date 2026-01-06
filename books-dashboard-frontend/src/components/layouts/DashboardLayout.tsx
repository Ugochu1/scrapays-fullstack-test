import { Box, Flex, HStack, IconButton } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import type { ReactNode } from "react";
import AppDrawer from "../common/AppDrawer";
import AppText from "../common/AppText";

interface DashboardLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
}

const SIDEBAR_WIDTH = "max(300px, 20%)";

export function DashboardLayout({ sidebar, children }: DashboardLayoutProps) {
  return (
    <Flex width="100vw" minH="100vh" background="bg">
      {/* Sidebar */}
      <Box
        position="fixed"
        top={0}
        left={0}
        h="100vh"
        w={SIDEBAR_WIDTH}
        px={4}
        py={6}
        display={{ base: "none", md: "block" }}
      >
        {sidebar}
      </Box>

      {/* Main Area */}
      <Flex direction="column" flex="1">
        {/* Top Bar */}
        <HStack
          px={{ base: 6, md: 6 }}
          py={{ base: 6, md: 8 }}
          top={0}
          ml={{ base: 0, md: SIDEBAR_WIDTH }}
          position="sticky"
          gapX={4}
          bg="bg"
          borderBottom="1px solid"
          borderBottomColor="border"
        >
          <AppDrawer
            trigger={
              <IconButton
                aria-label="Open menu"
                display={{ base: "inline-flex", md: "none" }}
              >
                <RxHamburgerMenu />
              </IconButton>
            }
            placement="start"
            size="md"
          >
            {sidebar}
          </AppDrawer>
          <AppText fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
            Books' Dashboard
          </AppText>
          <Box />
        </HStack>

        {/* Page Content */}
        <Box
          flex="1"
          p={6}
          ml={{ base: 0, md: SIDEBAR_WIDTH }}
          overflowY="auto"
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
