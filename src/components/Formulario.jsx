const Formulario = ({ cliente }) => {
  return (
    <>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nombre"
        >
          Nombre:
        </label>
        <input
          id="nombre"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Nombre del Cliente"
          name="nombre"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="empresa"
        >
          Empresa:
        </label>
        <input
          id="empresa"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Empresa del Cliente"
          name="empresa"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Email del Cliente"
          name="email"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="telefono"
        >
          Teléfono:
        </label>
        <input
          id="telefono"
          type="tel"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Teléfono del Cliente"
          name="telefono"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="notas"
        >
          Notas:
        </label>
        <textarea
          as="textarea"
          id="notas"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Notas del Cliente"
          name="notas"
        />
      </div>
    </>
  );
};

export default Formulario;
