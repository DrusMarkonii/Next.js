import Head from "next/head";
import Link from "next/link";

import Heading from "../../components/Heading";

export const getStaticProps = async () => {
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

const Contacts = ({ contacts }: any) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {contacts &&
          contacts.map(({ id, name }: any) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>
                <strong>{name}</strong>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Contacts;
