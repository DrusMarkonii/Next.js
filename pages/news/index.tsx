import { NextPage } from "next";
import NewsList from "../../components/News/NewsList";
import { newsType } from "../../types";

type newsProps = {
  news: [newsType]
}
export const getStaticProps = async () => {
  const date = new Date()
  const dateForRequest = date.toISOString().slice(0, 10)

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=${dateForRequest}&sortBy=publishedAt&apiKey=337567b121d34b70bb01e2a4f5b655bf`
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
