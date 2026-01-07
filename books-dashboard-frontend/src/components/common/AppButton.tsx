import { Button, type ButtonProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface AppButtonProps
  extends Pick<
    ButtonProps,
    "background" | "color" | "disabled" | "loading" | "loadingText" | "onClick"
  > {
  variant?: "solid" | "outline" | "surface";
  children: ReactNode;
}

function AppButton({
  variant = "solid",
  children,
  background = "primary",
  color = "white",
  disabled = false,
  loading,
  loadingText,
  onClick,
}: AppButtonProps) {
  return (
    <Button
      size="sm"
      background={background}
      color={color}
      rounded="l3"
      variant={variant}
      disabled={disabled}
      loading={loading}
      loadingText={loadingText}
      onClick={onClick}
      cursor={disabled ? "disabled" : "pointer"}
    >
      {children}
    </Button>
  );
}

export default AppButton;
