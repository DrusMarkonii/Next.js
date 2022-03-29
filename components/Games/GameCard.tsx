import { FC } from "react";
import Link from "next/link";

import styles from "../../styles/GamesList.module.scss";

const GameCard: FC<any> = ({ games }) => {
  return (
    <div className={styles.gameCard}>
      <ul className={styles.gameCardList}>
        {games &&
          games.map(({ id, name, background_image }: any) => (
            <Link href={`/games/${name}`} key={id}>
              <li key={id} className={styles.gameCardItem}>
                <img src={background_image} width={300} height={200} />
                <div className={styles.gameNameBox}>
                  <p className={styles.gameNameItem}>{name}</p>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default GameCard;
