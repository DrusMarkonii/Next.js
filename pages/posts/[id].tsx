import { NextPage } from "next"
import Head from "next/head"
import Heading from "../../components/Heading"
import PostInfo from "../../components/PostInfo";

export const getStaticPaths = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths = data.map(({id}:any) => ({
        params: {id: `${id}`}
    }))

    return {
        paths,
        fallback: false,
    }
};


export const getStaticProps = async (context:any) => {
    const {id} = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { post: data }
    }
};


const Post = ({post}:any) => (
    <>
    <Head>
        <title>Post</title>
    </Head>
    <PostInfo post={post}/>
    </>
  )
  
  export default Post