import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  // The component holding the state should be the one updating it.
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
            <GenreList onSelectGenre={(genre) => {setSelectedGenre(genre)}}></GenreList>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid selectedGenre={selectedGenre}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
