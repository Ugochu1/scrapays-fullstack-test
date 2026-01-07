import { Box, Flex, HStack, IconButton } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import type { ReactNode } from "react";
import AppDrawer from "../common/AppDrawer";
import AppText from "../common/AppText";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  headerTitle: string;
  children: ReactNode;
}

const SIDEBAR_WIDTH = "max(300px, 20%)";

export function DashboardLayout({
  headerTitle,
  children,
}: DashboardLayoutProps) {
  return (
    <Flex width="100vw" minH="100vh" background="bg">
      {/* Sidebar */}
      <Box
        position="fixed"
        top={0}
        left={0}
        h="100vh"
        w={SIDEBAR_WIDTH}
        display={{ base: "none", md: "block" }}
      >
        <Sidebar />
      </Box>

      {/* Main Area */}
      <Flex direction="column" flex="1">
        {/* Top Bar */}
        <HStack
          px={{ base: 2, md: 4 }}
          pt={{ base: 2, md: 6 }}
          pb={{ base: 2, md: 2 }}
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
            <Sidebar />
          </AppDrawer>
          <AppText
            textTransform="capitalize"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
          >
            {headerTitle}
          </AppText>
          <Box />
        </HStack>

        {/* Page Content */}
        <Box
          flex="1"
          p={6}
          ml={{ base: 0, md: SIDEBAR_WIDTH }}
          overflowY="auto"
          maxW={800} // max width of 800px
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
