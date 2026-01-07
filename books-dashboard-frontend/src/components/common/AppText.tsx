import { Text, type TextProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface AppTextProps
  extends Pick<TextProps, "color" | "fontSize" | "fontWeight"> {
  children: ReactNode;
}

function AppText({
  children,
  fontSize = "sm",
  fontWeight = "normal",
  color = "text",
}: AppTextProps) {
  return (
    <Text
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </Text>
  );
}

export default AppText;
