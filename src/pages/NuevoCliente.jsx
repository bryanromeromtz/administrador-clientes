import React from "react";
import styled from "styled-components";
import { useNavigate, Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";

import { Error } from "../components/Error";

const H1 = styled.h1`
  line-height: normal;
  font-family: "PT Serif", serif;
  word-spacing: 0.2em;
  letter-spacing: 0.1em;
`;

export const action = async ({ request }) => {
  const formData = await request.formData();

  const datos = Object.fromEntries(formData);
  // validate data
  const errores = [];

  let regex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$");
  if (Object.keys(datos).length === 0) {
    errores.push("Todos los campos son obligatorios");
  } else {
    if (datos.nombre.trim() === "") {
      errores.push("El nombre del cliente es obligatorio");
    }
    if (datos.empresa.trim() === "") {
      errores.push("El nombre de la empresa es obligatorio");
    }
    if (datos.email.trim() === "") {
      errores.push("El email es obligatorio");
    } else if (!regex.test(datos.email)) {
      errores.push("El email no es válido");
    }
    if (datos.telefono.trim() === "") {
      errores.push("El teléfono del cliente es obligatorio");
    }
    if (datos.notas.trim() === "") {
      errores.push("Las notas son obligatorias");
    }
  }

  if (errores.length) {
    return {
      data: { errores },
    };
  }
};

const NuevoCliente = () => {
  const navigate = useNavigate();
  const errores = useActionData();
  return (
    <>
      <H1 className="text-3xl font-bold mb-4 text-center">Nuevo Cliente</H1>
      <p className="text-center text-xl">
        Administra tus clientes desde esta sección
      </p>
      <span className="border-b-2 border-gray-200 w-64 block mx-auto mt-3 mb-10"></span>
      <div
        className="flex justify-center"
        style={{ background: "rgb(255,242,242)" }}
      >
        <div className="w-full max-w-lg mt-10">
          <div className="bg-white shadow-md px-8 pt-6 pb-8 mb-4">
            <Form className="grid grid-cols-1 gap-6" method="POST" noValidate>
              <Formulario />
              {errores &&
                errores.data.errores.map((error, index) => (
                  <Error key={index}>{error}</Error>
                ))}
              <input
                className="bg-slate-900 hover:bg-slate-700 w-full p-2 text-white uppercase font-bold mt-5"
                type="submit"
                value="Guardar Cliente"
              />
            </Form>
          </div>
        </div>
      </div>
      <div className="flex justify-end position: fixed bottom-9 left-90">
        <button
          className="bg-teal-500 w-full sm:w-auto font-bold uppercase text-xs rounded py-3 px-3 text-white shadow-md hover:bg-teal-600"
          type="button"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>
    </>
  );
};

export default NuevoCliente;
