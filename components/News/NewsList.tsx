import { FC } from "react";

import NewsCard from "./NewsCard";

import styles from "../../styles/NewsList.module.scss";

const NewsList: FC<any> = ({ news }) => {
  return (
    <div className={styles.newsPage}>
      <h1>News:</h1>
      <ul className={styles.newsList}>
        {news.map(
          ({
            publishedAt,
            title,
            author,
            urlToImage,
            content,
            url,
            description,
          }: any) => (
            <li key={title}>
              <NewsCard
                publishedAt={publishedAt}
                title={title}
                author={author}
                description={description}
                url={url}
                urlToImage={urlToImage}
                content={content}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default NewsList;
