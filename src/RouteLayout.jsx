import { Outlet } from "react-router-dom";

export default function RouteLayout() {
  return (
    <>
      <header className="RouteLayout">
        <h1 className="text-center pt-5">Películas Recientes</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
