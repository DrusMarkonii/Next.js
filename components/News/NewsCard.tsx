import { FC } from "react";

import Heading from "../Heading";
import styles from "../../styles/NewsList.module.scss"

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
      <strong>{title}</strong>
      <strong>{content}</strong>
      <strong>{description}</strong>
      <strong>{author}</strong>
      <strong>{publishedAt}</strong>
      {urlToImage ? <img src={urlToImage} alt={title} width={100} /> : ""}
      <strong>
        <a href={url} target="_blank" rel="noreferrer">
          Read more
        </a>
      </strong>
    </div>
  );
};

export default NewsCard;
