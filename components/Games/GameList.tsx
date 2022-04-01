import { NextPage } from "next";
import Link from "next/link";
import { useMemo } from "react";
import { gameType } from "../../types";

import styles from "../../styles/GamesList.module.scss";

type gameTypeProps = {
  games: [gameType]
}

const GameList: NextPage<gameTypeProps> = ({ games }) => {
  const gameMemo = useMemo(
    () =>
      games &&
      games.map(({ id, name, background_image }: gameType) => (
        <Link href={`/games/${name}`} key={id}>
          <li key={id} className={styles.gameCardItem}>
            <img src={background_image} width={300} height={200} />
            <div className={styles.gameNameBox}>
              <p className={styles.gameNameItem}>{name}</p>
            </div>
          </li>
        </Link>
      )),
    []
  );

  return (
    <div className={styles.gameCard}>
      <ul className={styles.gameCardList}>{gameMemo}</ul>
    </div>
  );
};

export default GameList;
