function App() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [imc, setImc] = React.useState(null);

  const calcularIMC = (e) => {
    e.preventDefault();
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (isNaN(p) || isNaN(a) || a <= 0) {
      setImc("error");
      return;
    }
    setImc((p / (a * a)).toFixed(2));
  };

  let resultado = "";
  let estilo = {};

  if (imc !== null) {
    if (imc === "error") {
      resultado = "Valores inválidos";
      estilo = { background: "#f8d7da", color: "#721c24" };
    } else {
      const valor = parseFloat(imc);
      if (valor < 18.5) {
        resultado = "Nivel bajo de IMC";
        estilo = { background: "#fff3cd", color: "#856404" };
      } else if (valor <= 24.9) {
        resultado = "IMC normal";
        estilo = { background: "#d4edda", color: "#155724" };
      } else if (valor <= 29.9) {
        resultado = "Nivel de sobrepeso";
        estilo = { background: "#ffeeba", color: "#856404" };
      } else {
        resultado = "Nivel de obesidad";
        estilo = { background: "#f8d7da", color: "#721c24" };
      }
    }
  }

  return (
    <div>
      <h2>Calculadora de IMC</h2>

      <form onSubmit={calcularIMC}>
        <label htmlFor="peso">Peso (kg):</label>
        <input
          id="peso"
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <label htmlFor="altura">Altura (m):</label>
        <input
          id="altura"
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button type="submit">Calcular IMC</button>
      </form>

      {imc !== null && (
        <div style={estilo}>
          {imc !== "error" ? `Tu IMC es ${imc} — ${resultado}` : resultado}
        </div>
      )}
    </div>
  );
}
