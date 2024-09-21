import { useParams, Navigate, Link } from "react-router-dom";

export default function PeliDetalles(props) {
  const { id } = useParams();
  const peli = props.seleccionarPeli(id);
  if (!peli) {
    return <Navigate to="NotFound" replace={true} />;
  } else {
    const img = `https://image.tmdb.org/t/p/original${peli.poster_path}`;
    return (
      <div className="container my-5">
        <div className="card mx-auto" style={{ width: "40%" }}>
          <img
            className="card-img-top"
            src={img}
            style={{ objectFit: "contain" }}
            alt={peli.title}
          />
          <h5 className="card-title fw-bold mt-3 ms-3">{peli.title}</h5>
          <div className="card-body">
            <p className="card-text">{peli.overview}</p>
          </div>
        </div>
        <div className="text-center mt-5" style={{ width: "100%" }}>
          <Link to="/" className="btn btn-warning btn-lg">
            Volver a la página principal
          </Link>
        </div>
      </div>
    );
  }
}
