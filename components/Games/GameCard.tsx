import { FC } from "react";
import Link from "next/link";

import styles from "../../styles/GamesList.module.scss";

const GameCard: FC<any> = ({ games }) => {
  return (
    <div className={styles.gameCard}>
      <ul className={styles.gameCardList}>
        {games &&
          games.map(({ id, name, background_image }: any) => (
            <li key={id} className={styles.gameCardItem}>
              <Link href={`/games/${name}`}>
                <img src={background_image} width={300} height={200} />
              </Link>
              <strong>{name}</strong>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GameCard;
