import Head from "next/head";
import { GetStaticProps } from 'next'

import { FC } from "react";
import Heading from "../../components/Heading";
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

const Contacts:FC<any> = ({ games }) => {

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Games list:" />
      <GamesList games={games}/>
      
    </>
  );
};
export default Contacts;
