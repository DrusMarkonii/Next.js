import Head from "next/head";
import { FC } from "react";

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

const Home: FC = ({ socials }: any) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Welcome to Next.js Application" />
    <Socials socials={socials} />
  </div>
);

export default Home;
