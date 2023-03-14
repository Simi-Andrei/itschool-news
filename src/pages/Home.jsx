import { getNewsCategoriesEndpoint } from "../api/endpoints";
import Layout from "../components/Layout";

export default function Home() {
  return <Layout>{getNewsCategoriesEndpoint("football", 3, 30)}</Layout>;
}
