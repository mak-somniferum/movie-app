import PropTypes from  "prop-types";
import { Link } from "react-router-dom";
import "../css/Movie.css";

function Movie({id, year, title, summary, poster, genres}){
  return (
    <Link to={`/MovieDetail/${id}`} state={{ year, title, summary, poster, genres }} className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {
            genres.map((genre, index) => (
              <li className="genres__genre" key={index}>{genre}</li>
            ))
          }
        </ul>
        <p className="movie__summary">{summary.length >= 140 ? `${summary.slice(0, 140)}...` : summary}</p>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
