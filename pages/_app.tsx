import '../styles/globals.scss'
import Head from 'next/head';
import type { AppProps } from 'next/app'
import Image from 'next/image'
import starBucksImg from '../public/Starbucks-Logo-700x394.png';

import Layout from '../components/Layout';

const MyApp = ({Component, pageProps}:AppProps) => (
  <Layout >
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image 
      src={starBucksImg}
      width={500}
      height={350}
      alt="big-img"
      placeholder='blur'
    />
  </Layout>
)

export default MyApp;


