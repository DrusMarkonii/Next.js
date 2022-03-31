/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

import styles from "../../styles/NewsList.module.scss";

const NewsCard: FC<any> = ({
  publishedAt,
  title,
  author,
  urlToImage,
  content,
  url,
  description,
}) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.newsAuthor}>
        <strong>{author ? author : "Unknown "}</strong>
      </div>
      <div className={styles.newsTitle}>
        <h1 className={styles.newsTitleText}>{title}</h1>
      </div>
      <div className={styles.contentBox}>
        <p>{description}</p>
        <p>{content}</p>
        <p>{publishedAt}</p>
      </div>
      <div className={styles.imgBox}>
        <a href={url} target="_blank" rel="noreferrer">
          {urlToImage ? (
            <img
              src={urlToImage}
              alt={title}
              placeholder="blur"
              className={styles.newsImg}
            />
          ) : (
            ""
          )}
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
