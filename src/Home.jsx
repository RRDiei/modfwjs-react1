import Pelicula from "./Pelicula";
import "./Home.css";

export default function Home(props) {
  const peliculas = props.peliculas.map((peli) => (
    <Pelicula pelicula={peli} key={peli.id} />
  ));
  return <div className="Home-container">{peliculas}</div>;
}
