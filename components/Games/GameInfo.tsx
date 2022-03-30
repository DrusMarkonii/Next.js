import { FC } from "react";
import Image from "next/image";

import Heading from "../Heading";
import ScreenShotCard from "./ScreenShotCard";

import styles from "../../styles/GamesList.module.scss";

const GameInfo: FC<any> = ({ gameOne }) => {
  const {
    name,
    added,
    platforms,
    background_image,
    released,
    rating,
    short_screenshots,
  } = gameOne;

  console.log(gameOne);
  console.log(short_screenshots);

  if (!gameOne) {
    return <Heading tag="h3" text="Empty contact" />;
  }

  return (
    <>
      <div className={styles.gamePage}>
        <h1 className={styles.titleGameInfo}>{name}</h1>
        <div>
          <img src={background_image} width={750} height={430} />
        </div>
        <div className={styles.statistics}>
          <div className={styles.ratingBox}>
            <strong>{rating}</strong>
            <div className={styles.imgRating}>
              <Image src="/rendering.png" width={30} height={30} alt="rating" />
            </div>
          </div>
          <div className={styles.downloadBox}>
            <div className={styles.imgDownload}>
              <Image
                src="/download.png"
                width={100}
                height={60}
                alt="logo-light"
              />
            </div>
            <strong>{added}</strong>
          </div>
          <div className={styles.releasedBox}>
            <p className={styles.textReleased}>Released: </p>
            <strong>{released}</strong>
          </div>
        </div>
        <div className={styles.platformBox}>
          <p>Platforms: </p>
          <ul className={styles.platformList}>
            {platforms.map((item: any, index: string) => (
              <li key={index} className={styles.platformItem}>
                <strong>{`${item.platform.name}`}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.screenshotBox}>
        {short_screenshots.map(({ image, id }: any) => (
          <ScreenShotCard id={id} image={image} key={id} />
        ))}
      </div>
    </>
  );
};

export default GameInfo;
