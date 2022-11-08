export const obtenerClientes = async () => {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const data = await response.json();
  return data;
};

export const agregarCliente = async (cliente) => {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editarCliente = async (id, cliente) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerCliente = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const data = await response.json();
  return data;
};

export const eliminarCliente = async (id) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
