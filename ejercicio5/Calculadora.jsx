function App() {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [operacion, setOperacion] = React.useState("suma");
  const [resultado, setResultado] = React.useState(null);

  
  const botonDeshabilitado =
    operacion === "division" && (num2 === "" || parseFloat(num2) === 0);

  const calcular = (e) => {
    e.preventDefault();
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Por favor ingresa números válidos.");
      return;
    }

    let res;
    if (operacion === "suma") res = n1 + n2;
    else if (operacion === "resta") res = n1 - n2;
    else if (operacion === "multiplicacion") res = n1 * n2;
    else if (operacion === "division") res = n1 / n2;
    else res = "Operación inválida";

    setResultado(res);
  };

  return (
    <div>
      <h2>Calculadora</h2>
      <form onSubmit={calcular}>
        <label htmlFor="num1">Número1</label>
        <input
          id="num1"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <label htmlFor="num2">Número2</label>
        <input
          id="num2"
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <select
          value={operacion}
          onChange={(e) => setOperacion(e.target.value)}
        >
          <option value="suma">Suma</option>
          <option value="resta">Resta</option>
          <option value="multiplicacion">Multiplicación</option>
          <option value="division">División</option>
        </select>

        <button type="submit" disabled={botonDeshabilitado}>
          Calcular
        </button>
      </form>

      {resultado !== null && (
        <div className="resultado">Resultado: {resultado}</div>
      )}
    </div>
  );
}
