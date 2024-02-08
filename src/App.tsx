import { Grid, GridItem, ResponsiveValue, Show } from "@chakra-ui/react";
import Canvas from "./components/Canvas";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";

enum gridAreas {
  sidebar = "sidebar",
  mainarea = "mainarea",
  topbar = "topbar",
}

const templateAreas: ResponsiveValue<string> = {
  base: `
    "${gridAreas.topbar}"
    "${gridAreas.mainarea}"
  `,
  lg: `
    "${gridAreas.sidebar} ${gridAreas.mainarea}"
`,
};

const gridTemplateColumns = {
  base: "1fr",
  lg: "18rem 1fr",
};

const gridTemplateRows = {
  base: "3rem 1fr",
  lg: "1fr",
};

function App() {
  return (
    <Grid
      templateAreas={templateAreas}
      gridTemplateColumns={gridTemplateColumns}
      gridTemplateRows={gridTemplateRows}
    >
      <Show below="lg">
        <GridItem area="topbar">
          <TopBar />
        </GridItem>
      </Show>
      <Show above="lg">
        <GridItem area="sidebar">
          <Navbar />
        </GridItem>
      </Show>
      <GridItem area="mainarea">
        <Canvas />
      </GridItem>
    </Grid>
  );
}

export default App;
