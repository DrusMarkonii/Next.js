import { NextPage } from "next";
import Image from "next/image";
import { gameType } from "../../types";

import Heading from "../Heading";
import ScreenShotCard from "./ScreenShotCard";

import styles from "../../styles/GamesList.module.scss";
import { useMemo } from "react";

type gameCardType = {
  gameOne: gameType;
};

type platformType = {
  id: number;
  name: string;
};

const GameCard: NextPage<gameCardType> = ({ gameOne }) => {
  const {
    name,
    added,
    platforms,
    background_image,
    released,
    rating,
    short_screenshots,
  } = gameOne;

  const platformMemo = useMemo(
    () =>
      platforms.map(({ id, name }: platformType) => (
        <li key={id} className={styles.platformItem}>
          <strong>{`${name}`}</strong>
        </li>
      )),
    []
  );

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
          <ul className={styles.platformList}>{platformMemo}</ul>
        </div>
      </div>
      <div className={styles.screenshotBox}>
        {short_screenshots.map(({ image, id }) => (
          <ScreenShotCard id={id} image={image} key={id} />
        ))}
      </div>
    </>
  );
};

export default GameCard;
