import { NextPage } from "next";
import { gameType } from "../../types";


type gameTypeProps = {
  games: [gameType]
}

import GameList from "./GameList";

import styles from "../../styles/GamesList.module.scss";

const GamePage: NextPage<gameTypeProps> = ({ games }) => {
  return (
    <div className={styles.gamesList}>
      <h2 className={styles.titlePage}>The most popular games:</h2>
      <GameList games={games} />
    </div>
  );
};

export default GamePage;
