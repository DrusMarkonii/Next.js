import { NextPage } from "next"
import Head from "next/head"
import Heading from "../../components/Heading"



export const getStaticProps = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { contacts: data }
    }
};

const Contacts = ({contacts}:any) => {
    
    return (
    <>
    <Head>
        <title>Contacts</title>
    </Head>
    <Heading text="Contacts list:" />
    <ul>
        {contacts && contacts.map( ({id, email, name, phone}:any) => (
            <li key={id}>
                <strong>{name}</strong> (<i>{email}, {phone}</i>)
            </li>
        ))}
    </ul>
    </>
  
  )
}
  export default Contacts