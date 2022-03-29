import Head from "next/head";
import { GetStaticProps } from 'next'

import { FC } from "react";
import GamesList from "../../components/Games/GamesList";

// type contactTypeProps = {
//     contacts: [contactType]
// }

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch("https://api.rawg.io/api/games?key=3d82f555dfe84d948d40e655b5b7ebf5&dates=2019-09-01,2019-09-30&platforms=18,1,7");
  const data = await response.json();
  

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { games: data.results},
  };
};

const Games:FC<any> = ({ games }) => {
  console.log(games)
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <GamesList games={games}/>
    </>
  );
};
export default Games;
