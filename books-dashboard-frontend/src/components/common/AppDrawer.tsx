"use client";

import { CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { useState, type ReactNode } from "react";

interface AppDrawerProps extends Pick<Drawer.RootProps, 'placement' | 'size'> {
  trigger: ReactNode;
  children: ReactNode;
}

function AppDrawer({ trigger, children, ...drawerProps }: AppDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} {...drawerProps}>
      <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Body>{children}</Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

export default AppDrawer;
