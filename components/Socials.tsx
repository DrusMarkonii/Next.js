import Head from "next/head";
import { useMemo } from "react";
import { socialsTypes } from "../types";

import styles from "../styles/Socials.module.scss";

type socialsType = {
  socials: socialsTypes
}

const Socials = ({ socials }: socialsType) => {
  const socialsMemo = useMemo(
    () =>
      socials &&
      socials.map(({ id, icon, path }: socialsTypes) => (
        <li key={id}>
          <a href={path} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-${icon}`} aria-hidden="true" />
          </a>
        </li>
      )),
    []
  );

  if (!socials) {
    return null;
  }
  
  return (
    <div className={styles.socialsList}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css"
        />
      </Head>
      <ul className={styles.socials}>{socialsMemo}</ul>
    </div>
  );
};

export default Socials;
