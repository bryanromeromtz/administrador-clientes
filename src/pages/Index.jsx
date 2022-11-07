import styled from "styled-components";
import { useLoaderData } from "react-router-dom";

import { Cliente } from "../components/Cliente";

const H1 = styled.h1`
  line-height: normal;
  font-family: "PT Serif", serif;
  word-spacing: 0.2em;
  letter-spacing: 0.1em;
`;

export const loader = () => {
  // fetch a la api de jsonplaceholder
  return [
    {
      id: 1,
      nombre: "Juan",
      empresa: "Empresa 1",
      email: "correo@correo.com",
      telefono: "123456789",
    },
  ];
};

const styleSettings = {
  color: {
    color: "#000",
  },
};

const Index = () => {
  const data = useLoaderData();
  return (
    <>
      <H1
        className="text-3xl font-bold mb-4 text-center"
        style={styleSettings.color}
      >
        Clientes
      </H1>
      <p className="text-center text-xl" style={styleSettings.color}>
        Administra tus clientes desde esta sección
      </p>
      <span className="border-b-2 border-gray-200 w-64 block mx-auto mt-3"></span>
      {data.length === 0 ? (
        <p className="text-xl font-bold mt-10" style={styleSettings.color}>
          No hay clientes registrados
        </p>
      ) : (
        <div className="flex flex-col mt-10">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead style={{ background: "rgb(255,242,242)" }}>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-pink-500 uppercase tracking-wider"
                      >
                        Nombre
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-pink-500 uppercase tracking-wider"
                      >
                        Contacto
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-pink-500 uppercase tracking-wider"
                      >
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((cliente) => (
                      <Cliente key={cliente.id} cliente={cliente} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
