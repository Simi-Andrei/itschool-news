import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getNewsDetails } from "../api/adapters";
import { getNewsDetailsEndpoint } from "../api/endpoints";
import Layout from "../components/Layout";
import { useFetch } from "../utils/hooks/useFetch";
import styles from "./NewsDetails.module.css";
import { getFormattedDate } from "../utils/date";
import { addToFavorites } from "../store/Favorites/actions";
import { FavoritesContext } from "../store/Favorites/context";

export default function NewsDetails() {
  const params = useParams();
  const newsId = params.newsId + "/" + params["*"];

  const { favoritesDispatch } = useContext(FavoritesContext);

  const newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);

  const newsDetails = useFetch(newsDetailsEndpoint);

  const adaptedNewsDetails = getNewsDetails(newsDetails);

  const { date, title, description, image, content, author, thumbnail } =
    adaptedNewsDetails;

  const handleAddToFavorites = () => {
    const newsItem = {
      id: newsId,
      image: thumbnail,
      title,
      description,
      hasDeleteButton: true,
    };
    const actionResult = addToFavorites(newsItem);
    favoritesDispatch(actionResult);
  };

  return (
    <Layout>
      <Container className={`${styles.newsDetails} text-start`}>
        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            <h1 className="my-5">{title}</h1>
            <p className="fw-bold">{description}</p>
            <div dangerouslySetInnerHTML={{ __html: image }} className="mb-4" />
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="fw-bold">
                <p>{author}</p>
                <p>{getFormattedDate(date)}</p>
              </div>
              <Button onClick={handleAddToFavorites} variant="success">
                Adauga la favorite
              </Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
