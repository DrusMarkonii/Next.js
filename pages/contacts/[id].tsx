import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";;

import { contactType } from "../../types";
import ContactInfo from "../../components/ContactInfo";

import styles from "../../styles/Contact.module.scss";

type contactTypeProps = {
  contact: contactType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: any = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

const Contact: NextPage<contactTypeProps> = ({ contact }) => (
  <div className={styles.contactItem}>
    <Head>
      <title>Contact</title>
    </Head>
    <ContactInfo contact={contact} />
  </div>
);

export default Contact;
