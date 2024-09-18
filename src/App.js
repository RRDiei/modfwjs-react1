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

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RouteLayout />}></Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
