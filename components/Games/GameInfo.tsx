import { FC } from 'react';

import Heading from "../Heading";

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