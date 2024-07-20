import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface GameCardsProps {
  game: Game;
}

const GameCards = ({ game }: GameCardsProps) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCards;
