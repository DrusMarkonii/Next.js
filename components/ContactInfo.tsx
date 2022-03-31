import { NextPage } from "next";

import Heading from "./Heading";

import styles from "../styles/Contact.module.scss";
import { contactType } from "../types";

type contactInfoProps = {
  contact: contactType;
};

const ContactInfo:  NextPage <contactInfoProps> = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return <Heading tag="h3" text="Empty contact" />;
  }

  return (
    <div className={styles.contactInfoItem}>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </div>
  );
};

export default ContactInfo;
