import { Form, useNavigate, useActionData, redirect } from "react-router-dom";

import { eliminarCliente } from "../api/clientes";

export const action = async ({ params }) => {
  eliminarCliente(params.id);
  return redirect("/");
};

export const Cliente = ({ cliente }) => {
  const { nombre, empresa, email, telefono, notas, id } = cliente;
  const navigate = useNavigate();
  // const data = useActionData();
  // console.log(data);
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 space-x-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 text-bold">
              <span className="font-bold">{nombre}</span>
            </div>
            <p className="text-sm text-gray-500">{empresa}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap space-y-4">
        <div className="bg-gray-200 text-indigo-400 text-sm font-bold px-2 inline-flex rounded-full">
          <span className="font-bold">Email: </span>
          &nbsp;
          {email}
        </div>
        <br />
        <div className="bg-gray-200 text-indigo-400 text-sm font-bold px-2 inline-flex rounded-full">
          <span className="font-bold">Teléfono: </span>
          &nbsp;
          {telefono}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {notas}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <div className="flex space-x-4">
          <button
            className="bg-teal-300 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate(`/clientes/${id}/editar`)}
          >
            Editar
          </button>
          <Form
            method="POST"
            action={`/clientes/${id}/eliminar`}
            onSubmit={async (e) => {
              if (!confirm("¿Estás seguro de eliminar este cliente?")) {
                e.preventDefault();
              }
            }}
          >
            <button
              className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Eliminar
            </button>
          </Form>
        </div>
      </td>
    </tr>
  );
};
