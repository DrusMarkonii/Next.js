import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";

import GameInfo from "../../components/Games/GameCard";
import { gameType } from "../../types";

type GamePropsId = {
  game: gameType;
  id: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: any = context.params;
  const response = await fetch(
    `https://api.rawg.io/api/games?key=3d82f555dfe84d948d40e655b5b7ebf5&dates=2019-09-01,2019-09-30&platforms=18,1,7}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { game: data.results, id },
  };
};

const Game: NextPage<GamePropsId> = ({ id, game }) => {
  const gameOne = game.filter((game: gameType) => game.name === id)[0];
  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>
      <GameInfo gameOne={gameOne} />
    </>
  );
};

export default Game;
