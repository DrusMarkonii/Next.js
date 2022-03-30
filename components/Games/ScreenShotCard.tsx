import { FC } from "react";

import styles from "../../styles/GamesList.module.scss";

const ScreenShotCard: FC<any> = ({ id, image }) => {
  return (
    <div className={styles.screenShotCard}>
      <img key={id} src={image} alt="screenshot" width={250} />
    </div>
  );
};

export default ScreenShotCard;
