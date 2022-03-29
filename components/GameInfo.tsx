import { FC } from 'react';
import Image from 'next/image'


import Heading from "./Heading";
import { contactType } from "../types";

// type contactInfoProps = {
//     contact: contactType
// }

const GameInfo:FC<any> = ({gameOne}) => {
    const {name, added, platforms, background_image, released, rating } = gameOne
    
    console.log(gameOne)
    console.log(background_image)
    const img = background_image
    
    if (!gameOne) {
        return <Heading tag="h3" text = "Empty contact" />
    }

    return (
        <>
            <Heading tag="h3" text={`Description`}/>
            <div>
                <strong>Name: </strong>
                {name}
            </div>
            <div>
                <strong>Img: </strong>
                <img src={img}  width={300} height={200}/>
                {/* <Image src={img} width={400} height={400}/> */}
            </div>
            <div>
                <strong>Rating: </strong>
                {rating}
            </div>
            <div>
                <strong>Released: </strong>
                {released}
            </div>
            <div>
                <strong>Added: </strong>
                {added}
            </div>
            <div>
                <strong>Platforms: </strong>
                <ul>
                    {platforms.map((item:any, index:string)=> <li key={index}>{`${item.platform.name}`}</li>)}
                </ul>
            </div>
            {/* <div>
                <strong>Address: </strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div> */}
        </>
    )
}

export default GameInfo