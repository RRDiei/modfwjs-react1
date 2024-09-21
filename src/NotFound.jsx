import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h2 className="text-center mt-5">Película no encontrada &#128577;</h2>
      <h3 className="text-center">Haz click <Link to="/">aquí</Link> para volver a la página principal</h3>
    </>
  );
}
