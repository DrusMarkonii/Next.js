import { NextPage } from "next";

import styles from "../../styles/GamesList.module.scss";

type ScreenShotType = {
  id: string;
  image: string
}

const ScreenShotCard: NextPage<ScreenShotType> = ({ id, image }) => {
  return (
    <div className={styles.screenShotCard}>
      <img key={id} src={image} alt="screenshot" width={250} height={150} />
    </div>
  );
};

export default ScreenShotCard;
