import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
}

const GameGrid = ({selectedGenre, selectedPlatform} : Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={5} padding={10}>
        {isLoading && Skeletons.map((skeleton) => (<GameCardSkeleton key={skeleton}></GameCardSkeleton>))}
        {data.map((game) => (
            <GameCards key={game.id} game={game}></GameCards>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
