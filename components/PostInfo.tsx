import Heading from "./Heading";

const PostInfo = ({post}:any) => {
    const { title, body }:any = post || {};
    
    if (!post) {
        return <Heading tag="h3" text = "Empty contact" />
    }

    return (
        <>
            <Heading tad="h3" text={title}/>
            <div>
                <strong>Post: </strong>
                {body}
            </div>
        </>
    )
}

export default PostInfo