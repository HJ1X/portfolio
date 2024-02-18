import { Grid, GridItem, ResponsiveValue, Show } from "@chakra-ui/react";
import Canvas from "../components/Canvas";
import SidePanel from "../components/SidePanel";
import TopBar from "../components/TopBar";

enum gridAreas {
  sidepanel = "sidepanel",
  mainarea = "mainarea",
  topbar = "topbar",
}

const templateAreas: ResponsiveValue<string> = {
  base: `
      "${gridAreas.topbar}"
      "${gridAreas.mainarea}"
    `,
  lg: `
      "${gridAreas.sidepanel} ${gridAreas.mainarea}"
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

const Layout = () => {
  return (
    <Grid
      templateAreas={templateAreas}
      gridTemplateColumns={gridTemplateColumns}
      gridTemplateRows={gridTemplateRows}
    >
      <Show below="lg">
        <GridItem area={gridAreas.topbar}>
          <TopBar />
        </GridItem>
      </Show>
      <Show above="lg">
        <GridItem area={gridAreas.sidepanel} height="100vh" pl={10} py={14}>
          <SidePanel />
        </GridItem>
      </Show>
      <GridItem area={gridAreas.mainarea} height="100vh" pr={10} py={14}>
        <Canvas />
      </GridItem>
    </Grid>
  );
};

export default Layout;
