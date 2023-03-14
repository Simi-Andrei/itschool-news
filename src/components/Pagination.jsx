import BootstrapPagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import styles from "./Pagination.module.css";

export function Pagination(props) {
  let { active, baseUrl } = props;
  const navigate = useNavigate();
  if (!active) {
    active = 1;
  }

  const onPageClick = (page) => {
    navigate(`${baseUrl}?page=${page}`);
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return (
    <div className="d-flex justify-content-center mb-5">
      <BootstrapPagination className={styles.pagination}>
        {[1, 2, 3, 4, 5].map((page) => (
          <BootstrapPagination.Item
            key={page}
            active={page === Number(active)}
            onClick={() => onPageClick(page)}
          >
            {page}
          </BootstrapPagination.Item>
        ))}
      </BootstrapPagination>
    </div>
  );
}
