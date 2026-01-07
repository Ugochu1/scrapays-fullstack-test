import { Text, type TextProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface AppTextProps
  extends Pick<TextProps, "color" | "fontSize" | "fontWeight" | "truncate"> {
  children: ReactNode;
}

function AppText({
  children,
  fontSize = "sm",
  fontWeight = "normal",
  color = "text",
  truncate = false,
}: AppTextProps) {
  return (
    <Text
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      truncate={truncate}
    >
      {children}
    </Text>
  );
}

export default AppText;
