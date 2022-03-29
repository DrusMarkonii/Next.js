import { FC } from "react";
import Image from "next/image";

import Heading from "../Heading";

import styles from "../../styles/GamesList.module.scss";

const GameInfo: FC<any> = ({ gameOne }) => {
  const { name, added, platforms, background_image, released, rating } =
    gameOne;

  console.log(gameOne);
  const img = background_image;

  if (!gameOne) {
    return <Heading tag="h3" text="Empty contact" />;
  }

  return (
    <div className={styles.gamePage}>
      <div>
        <img src={img} width={500} height={400} />
      </div>
      <div>{name}</div>
      <div className={styles.statistics}>
        <div>
          <Image src="/rendering.png" width={30} height={30} alt="rating" />
          {rating}
        </div>
        <div>
          <Image src="/download.png" width={100} height={60} alt="logo-light" />
          {added}
        </div>
      </div>
      <div>
        <strong>Released: </strong>
        {released}
      </div>

      <div>
        <strong>Platforms: </strong>
        <ul>
          {platforms.map((item: any, index: string) => (
            <li key={index}>{`${item.platform.name}`}</li>
          ))}
        </ul>
      </div>
      {/* <div>
                <strong>Address: </strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div> */}
    </div>
  );
};

export default GameInfo;
