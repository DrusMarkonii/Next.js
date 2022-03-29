import { FC } from "react";
import Link from "next/link";

import styles from "../../styles/GamesList.module.scss"
import GameCard from "./GameCard";

const GamesList: FC<any> = ({ games }) => {
  return (
    <div className={styles.gamesList}>
      <GameCard games={games}/>
    </div>
  );
};

export default GamesList;
