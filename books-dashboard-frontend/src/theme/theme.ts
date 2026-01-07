import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import colors from "./colors";

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: colors,
    },
  },
});

export const system = createSystem(defaultConfig, config);
