import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {  
  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`, // Just one column on small screens
        lg: `"nav nav" "aside main"` // Two colums on large screens
      }}
      templateColumns={{
        base: '1fr', // Just one column takes up all the availale space on small screen
        lg: '200px 1fr' // // The side column takes all the available space and the large one takes 200px
      }}
      >
        <GridItem area={"nav"}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList></GenreList>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
