export default function Pelicula(props) {
  const img = `https://image.tmdb.org/t/p/w220_and_h330_face${props.pelicula.poster_path}`;
  const descripcion = `${props.pelicula.overview.slice(0, 150)}...`;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.pelicula.title}</h5>
        <p className="card-text">{descripcion}</p>
        <button className="btn btn-primary">+ INFO</button>
      </div>
    </div>
  );
}
