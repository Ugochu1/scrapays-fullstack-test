import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface AppDialogProps {
  title?: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  children: ReactNode;
  actionTrigger?: ReactNode;
}

function AppDialog({
  title,
  open = false,
  setOpen,
  children,
  actionTrigger,
}: AppDialogProps) {
  const closeDialog = () => {
    setOpen(false); // set dialog open to false
  };

  return (
    <Dialog.Root open={open}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content bg="bg" border="1px solid" borderColor="border">
            {title && (
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>
            )}
            <Dialog.Body>{children}</Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" onClick={closeDialog} color="text">
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              {actionTrigger}
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" onClick={closeDialog} color="text" bg="bg" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default AppDialog;
