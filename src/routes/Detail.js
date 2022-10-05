import { useLocation } from "react-router-dom";
import "../css/Detail.css";

function Detail() {
  const location = useLocation().state;

  return (
    <div className="details">
      <div className="details__poster">
        <img
          src={location.poster}
          alt={location.title}
          title={location.title}
        />
      </div>
      <div className="details__data">
        <h2>{location.title}</h2>
        <p>{location.year}</p>
        <p>{location.genres}</p>
        <p className="details__summary">{location.summary}</p>
      </div>
    </div>
  );
}

export default Detail;
