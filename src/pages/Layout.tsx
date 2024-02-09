import { ResponsiveValue, Grid, Show, GridItem } from "@chakra-ui/react";
import Canvas from "../components/Canvas";
import SectionsList from "../components/SectionsList";
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
      height="100vh"
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
        <GridItem area={gridAreas.sidepanel} pl={10} pt={24}>
          <SectionsList />
        </GridItem>
      </Show>
      <GridItem area={gridAreas.mainarea} py={14} pr={10}>
        <Canvas />
      </GridItem>
    </Grid>
  );
};

export default Layout;
