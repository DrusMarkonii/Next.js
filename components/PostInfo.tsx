import { FC } from "react";

import { postType } from "../types";
import Heading from "./Heading";

type propsInfoProps = {
    post: postType,
}

const PostInfo:FC<propsInfoProps> = ({post}) => {
    const { title, body } = post || {};
    
    if (!post) {
        return <Heading tag="h3" text = "Empty contact" />
    }

    return (
        <>
            <Heading tag="h3" text={title}/>
            <div>
                <strong>Post: </strong>
                {body}
            </div>
        </>
    )
}

export default PostInfo