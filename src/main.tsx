import { ColorModeProvider } from "@/components/ui/color-mode.tsx";
import { Provider } from "@/components/ui/provider.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import system from "./theme";
import router from "./routes";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ChakraProvider value={system}>
        <ColorModeProvider>
          <RouterProvider router={router} />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
