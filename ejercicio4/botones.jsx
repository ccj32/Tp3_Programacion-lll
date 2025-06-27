function App() {
  const [izquierdoHabilitado, setIzquierdoHabilitado] = React.useState(true);

  const manejarClickIzquierdo = () => {
    setIzquierdoHabilitado(false);
  };

  const manejarClickDerecho = () => {
    setIzquierdoHabilitado(true);
  };

  return (
    <div>
      <button onClick={manejarClickIzquierdo} disabled={!izquierdoHabilitado}>
        izquierdo
      </button>
      <button onClick={manejarClickDerecho} disabled={izquierdoHabilitado}>
        derecho
      </button>
    </div>
  );
}
