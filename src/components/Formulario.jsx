
const Formulario = () => {
  const arrayCategorias = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "politics"
  ];

  return (
    <div className="py-2">
      <form>
        <label htmlFor="categoria" className="mx-3 fs-5">
          Buscar por categoria:
        </label>
        <select
          name="categoria"
        >
          {arrayCategorias.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Formulario;
