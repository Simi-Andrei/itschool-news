import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { getNewsList } from "../api/adapters";
import { useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import NewsCardList from "../components/NewsCardList";
import { Pagination } from "../components/Pagination";

export default function NewsCategory() {
  const { categoryId } = useParams();
  const queryParams = new URLSearchParams(useLocation().search);

  let currentPage = queryParams.get("page");
  if (!currentPage) {
    currentPage = 1;
  }

  const newsEndpoint = getNewsCategoriesEndpoint(categoryId, currentPage);

  const news = useFetch(newsEndpoint);

  const adaptedNews = getNewsList(news); // array adaptat

  let title = "";

  switch (categoryId) {
    case "technology": {
      title = "Tech";
      break;
    }
    case "football": {
      title = "Fotbal";
      break;
    }
    case "games": {
      title = "Games";
      break;
    }
    default: {
      break;
    }
  }

  return (
    <Layout>
      <h1 className="my-5">{title}</h1>
      <NewsCardList newsList={adaptedNews} />
      <Pagination baseUrl={`/category/${categoryId}`} active={currentPage} />
    </Layout>
  );
}
