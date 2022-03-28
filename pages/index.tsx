import type { NextPage } from 'next'
import Head from 'next/head'
import Heading from '../components/Heading'
import styles from '../styles/Home.module.scss'
import Socials from '../components/Socials'

export const getStaticProps = async () => {

  const response = await fetch("http://localhost:3000/api/socials/");
  const data = await response.json();

  if (!data) {
      return {
          notFound: true
      }
  }

  return {
      props: { socials: data }
  }
};

const Home: NextPage = ({socials}:any) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text ="Next.js Application"/>
    <Socials socials={socials}/>
  </div>
);

export default Home;

