import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Hoja de estilos
import "./App.css";

// Plantillas
import RouteLayout from "./RouteLayout";

// Componentes
import Home from "./Home";
import Pelicula from "./Pelicula";

// Películas
import peliculas from "./assets/movies.json";

const cincoPeliculas = (peliculas) => {
  const pelis = [];
  while (pelis.length < 5) {
    const nuevaPeli = peliculas.pop();
    pelis.push(<Pelicula pelicula={nuevaPeli} key={nuevaPeli.id} />);
  }
  return pelis;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home peliculas={cincoPeliculas(peliculas)}/>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
