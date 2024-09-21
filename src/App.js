import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Plantillas
import RouteLayout from "./RouteLayout";

// Componentes
import Home from "./Home";
import Pelicula from "./Pelicula";
import PeliDetalles from "./PeliDetalles";
import NotFound from "./NotFound";

// Películas
import peliculas from "./assets/movies.json";

// Crea elementos Pelicula a partir de un array de peliculas
const creaElementosPelicula = (peliculas) => {
  return peliculas.map((peli) => <Pelicula pelicula={peli} key={peli.id} />);
};

// Crea un array con cinco pelícuas aleatorias a partir del archivo movies.json
const seleccionaCincoPeliculas = (arrayPeliculas) => {
  const indexes = new Set();
  const peliculas = [];
  while (indexes.size < 5) {
    const index = Math.floor(Math.random() * arrayPeliculas.length);
    indexes.add(index);
  }
  for (let index of indexes) {
    peliculas.push(arrayPeliculas[index]);
  }
  return peliculas;
};

// Devuelve una película cuyo id es el que se le ha pasado a la función. Si la película no existe, devuelve undefined
const seleccionarPeli = (id) => {
  const numId = Number(id);
  const peliEncontrada = cincoPeliculas.find((peli) => peli.id === numId);

  return peliEncontrada;
};

const cincoPeliculas = seleccionaCincoPeliculas(peliculas);
const elementosPelicula = creaElementosPelicula(cincoPeliculas);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home peliculas={elementosPelicula} />} />
      <Route
        path=":id"
        element={<PeliDetalles seleccionarPeli={seleccionarPeli} />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
