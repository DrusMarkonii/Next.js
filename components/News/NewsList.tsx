import { NextPage } from "next";
import { useMemo } from "react";

import NewsCard from "./NewsCard";
import { newsType } from "../../types";

import styles from "../../styles/NewsList.module.scss";
import React from "react";

type NewsListType = {
  news: newsType;
};

const NewsList: NextPage<NewsListType> = ({ news }) => {
  const memoList = useMemo(
    () =>
      news.map(
        ({
          publishedAt,
          title,
          author,
          urlToImage,
          content,
          url,
          description,
        }: newsType) => (
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
      ),
    []
  );

  return (
    <div className={styles.newsPage}>
      <h1>News:</h1>
      <ul className={styles.newsList}>{memoList}</ul>
    </div>
  );
};

export default NewsList;
