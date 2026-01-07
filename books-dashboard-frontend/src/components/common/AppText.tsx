import { Text, type TextProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface AppTextProps
  extends Pick<TextProps, "color" | "fontSize" | "fontWeight" | "textTransform"> {
  children: ReactNode;
}

function AppText({
  children,
  fontSize = "sm",
  fontWeight = "normal",
  color = "text",
  textTransform,
}: AppTextProps) {
  return (
    <Text
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      textTransform={textTransform}
    >
      {children}
    </Text>
  );
}

export default AppText;
