import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../store/Favorites/actions";
import { FavoritesContext } from "../store/Favorites/context";
import { newsCard } from "./NewsCard.module.css";

export default function NewsCard(props) {
  const { favoritesDispatch } = useContext(FavoritesContext);

  const { newsItem } = props;

  const { id, image, title, description, hasDeleteButton } = newsItem;

  const handleRemoveFromFavorites = () => {
    const actionResult = removeFromFavorites(id);
    favoritesDispatch(actionResult);
  };

  return (
    <Card className={`h-100 ${newsCard}`}>
      <Link to={`/news/${id}`} className="text-dark">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
      {hasDeleteButton && (
        <Button onClick={handleRemoveFromFavorites} variant="light">
          <span className="material-icons text-dark">close</span>
        </Button>
      )}
    </Card>
  );
}
