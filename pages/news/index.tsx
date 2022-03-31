import { NextPage } from "next";
import NewsList from "../../components/News/NewsList";
import { newsType } from "../../types";

type newsProps = {
  news: newsType
}
export const getStaticProps = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-02-28&sortBy=publishedAt&apiKey=337567b121d34b70bb01e2a4f5b655bf"
  );
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }

  return {
    props: { news: data.articles },
  };
};

const News:NextPage<newsProps> = ({ news }) => {
  return (
    <>
      <NewsList news={news} />
    </>
  );
};

export default News;
