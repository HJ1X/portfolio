import { Grid, GridItem, ResponsiveValue, Show } from "@chakra-ui/react";
import Canvas from "../components/Canvas";
import LeftPanel from "../components/LeftPanel";
import TopBar from "../components/TopBar";
import RightPanel from "../components/RightPanel";

enum gridAreas {
  LEFTPANEL = "sidepanel",
  RIGHTPANEL = "rightpanel",
  MAINAREA = "mainarea",
  TOPBAR = "topbar",
}

const templateAreas: ResponsiveValue<string> = {
  base: `
      "${gridAreas.TOPBAR}"
      "${gridAreas.MAINAREA}"
    `,
  lg: `
      "${gridAreas.LEFTPANEL} ${gridAreas.MAINAREA} ${gridAreas.RIGHTPANEL}"
  `,
};

const gridTemplateColumns = {
  base: "1fr",
  lg: "18rem 1fr 4rem",
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
        <GridItem area={gridAreas.TOPBAR}>
          <TopBar />
        </GridItem>
      </Show>
      <Show above="lg">
        <GridItem area={gridAreas.LEFTPANEL} height="100vh" pl={10} py={7}>
          <LeftPanel />
        </GridItem>
        <GridItem area={gridAreas.RIGHTPANEL} height="100vh" py={7}>
          <RightPanel />
        </GridItem>
      </Show>
      <GridItem area={gridAreas.MAINAREA} height="100vh" py={7}>
        <Canvas />
      </GridItem>
    </Grid>
  );
};

export default Layout;
