import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Game, Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  // The component holding the state should be the one updating it.
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <NavBar onSearch={(searchText) => {setGameQuery({...gameQuery, searchText})}}></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => {setGameQuery({...gameQuery, genre})}}></GenreList>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box paddingLeft={8}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector selectedPlatform = {gameQuery.platform} onSelectPlatform={(platform) => {setGameQuery({...gameQuery, platform})}}></PlatformSelector>
              </Box>
              <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => {setGameQuery({...gameQuery, sortOrder})}}></SortSelector>
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
