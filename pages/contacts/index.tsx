import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { contactType } from "../../types";

import Heading from "../../components/Heading";
import { FC } from "react";

import styles from "../../styles/Contact.module.scss";

type contactTypeProps = {
  contacts: [contactType];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts: FC<contactTypeProps> = ({ contacts }) => {
  return (
    <div className={styles.contactPage}>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul className={styles.contactList}>
        {contacts &&
          contacts.map(({ id, name }: any) => (
            <Link href={`/contacts/${id}`} key={id}>
              <li className={styles.contactListItem}>
                <strong>{name}</strong>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};
export default Contacts;
