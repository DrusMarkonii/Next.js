import { NextPage } from "next";
import Head from "next/head";
import { socialsTypes } from "../types";

import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from "../styles/Socials.module.scss";

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/socials/");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { socials: data },
  };
};

type socialsTypeProps = {
  socials: socialsTypes
}

const Home: NextPage<socialsTypeProps> = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Welcome to Next.js Application" />
    <Socials socials={socials} />
  </div>
);

export default Home;
