import { Outlet, Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
  line-height: normal;
  font-family: "PT Serif", serif;
  word-spacing: 0.2em;
  letter-spacing: 0.1em;
`;

export const Layout = () => {
  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-green-200 px-5 py-10">
        <H1 className="text-2xl font-bold text-gray-800 text-center">
          CRM - Clientes
        </H1>

        <nav className="mt-5 list-none">
          <li className="text-gray-800 mb-1">
            <Link
              to="/"
              className={`p-1 block text-gray-800 hover:text-white rounded transition duration-300 ease-in-out hover:bg-green-500
                ${location.pathname === "/" ? "bg-green-500 text-white" : ""}`}
            >
              <span className="mr-2">Clientes</span>
            </Link>
          </li>
          <li className="text-gray-800 mb-1">
            <Link
              to="/clientes/nuevo"
              className={`p-1 block text-gray-800 hover:text-white rounded transition duration-300 ease-in-out hover:bg-green-500
                ${
                  location.pathname === "/clientes/nuevo"
                    ? "bg-green-500 text-white"
                    : ""
                }`}
            >
              Nuevo Cliente
            </Link>
          </li>
          <li className="text-gray-800 mb-1">
            <Link
              to="/editar/:id"
              className="p-1 block text-gray-800 hover:text-white rounded transition duration-300 ease-in-out hover:bg-green-500"
            >
              Editar Cliente
            </Link>
          </li>
        </nav>
      </aside>
      <main className="md:w-3/4  p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};
