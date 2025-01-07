import { ColorModeProvider } from "@/components/ui/color-mode.tsx";
import { Provider } from "@/components/ui/provider.tsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>
          <RouterProvider router={router} />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
