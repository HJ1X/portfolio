import { ColorModeProvider } from "@/components/ui/chakra/color-mode.tsx";
import { Provider } from "@/components/ui/chakra/provider.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import system from "./theme";
import Router from "./routes";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ChakraProvider value={system}>
        <ColorModeProvider>
          <Router />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
