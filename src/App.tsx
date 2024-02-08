import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <Grid templateAreas={`"nav main"`} gridTemplateColumns={"180px 1fr"}>
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="main">
        <Main />
      </GridItem>
    </Grid>
  );
}

export default App;
