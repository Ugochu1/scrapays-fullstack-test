import { EmptyState, VStack } from "@chakra-ui/react";
import { FaBookOpen } from "react-icons/fa";

interface AppEmptyStateProps {
  title: string;
  description: string;
}

function AppEmptyState({ title, description }: AppEmptyStateProps) {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <FaBookOpen />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>{title}</EmptyState.Title>
          <EmptyState.Description>{description}</EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
}

export default AppEmptyState;
