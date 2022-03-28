import Head from "next/head";
import Image from 'next/image'
import Link from "next/link";
import { GetStaticProps } from 'next'
import { contactType } from '../../types'

import Heading from "../../components/Heading";
import { FC } from "react";

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
    props: { games: data.results },
  };
};

const Contacts:FC<any> = ({ games }) => {
    console.log(games)
    const url = games[0].background_image
    console.log(`"${url}"`)
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Games list:" />
      <ul>
        {games &&
          games.map(({ id, name}: any) => (
            <li key={id}>
              {/* <Link href={`/contacts/${id}`}> */}
                <strong>{name}</strong>
              {/* </Link> */}
            </li>
          ))}
      </ul>
    </>
  );
};
export default Contacts;
