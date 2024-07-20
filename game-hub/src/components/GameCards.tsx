import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface GameCardsProps {
  game: Game;
}

const GameCards = ({ game }: GameCardsProps) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={'space-between'}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCards
