import { FC } from "react";

import GameCard from "./GameCard";

import styles from "../../styles/GamesList.module.scss";

const GamesList: FC<any> = ({ games }) => {
  return (
    <div className={styles.gamesList}>
      <h2 className={styles.titlePage}>The most popular games:</h2>
      <GameCard games={games} />
    </div>
  );
};

export default GamesList;
