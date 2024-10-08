import { Link } from "react-router-dom";

export default function Pelicula(props) {
  const img = `https://image.tmdb.org/t/p/w220_and_h330_face${props.pelicula.poster_path}`;
  const descripcion = `${props.pelicula.overview.slice(0, 150)}...`;
  const cardUrl = props.pelicula.id.toString() ;
  return (
    <div className="Pelicula-card card">
      <img src={img} className="card-img-top" alt={props.pelicula.title} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{props.pelicula.title}</h5>
        <p className="card-text">{descripcion}</p>
        <Link to={cardUrl} className="btn btn-primary">
          + INFO
        </Link>
      </div>
    </div>
  );
}
