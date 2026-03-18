import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";
import InputText from "./components/InputText";

function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcularSuma = () => {
    let suma = numero1 + numero2;
    setResultado(suma);
  };

  const calculaResta = () => {
    let resta = numero1 - numero2;
    setResultado(resta);
  };

  const calculaMultiplicacion = () => {
    let multiplicacion = numero1 * numero2;
    setResultado(multiplicacion);
  };

  const calculaDivision = () => {
    let division = numero1 / numero2;
    setResultado(division);
  };

  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTareas = () => {
    if (tarea.trim() !== "") {
      setTareas([...tareas, tarea]);
      setTarea("");
    }
  };

  const eliminarTarea = (eliminarDeLista) => {
    const nuevasTareas = tareas.filter((_, index) => index !== eliminarDeLista);
    setTareas(nuevasTareas);
  };

  return (
    <>
      <h1 className="titulo">Cálculo de suma de 2 números</h1>
      <InputText
        label="ingrese el primer numero"
        placeholder="primer número"
        value={numero1}
        onChange={(e) => setNumero1(Number(e.target.value))}
        type="number"
        className="label"
      />

      <InputText
        label="ingrese el segundo numero"
        placeholder="primer número"
        value={numero2}
        onChange={(e) => setNumero2(Number(e.target.value))}
        type="number"
        className=""
      />

      <Boton label="Calcular suma" onClick={calcularSuma} />
      <Boton label="Calcular resta" onClick={calculaResta} />
      <Boton label="Calcular multiplicacion" onClick={calculaMultiplicacion} />
      <Boton label="Calcular division" onClick={calculaDivision} />

      <h2>Resultado: {resultado}</h2>

      <h1 className="titulo">To do List</h1>
      <InputText
        label="ingrese Tarea"
        placeholder="Tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        type="text"
        className="label"
      />

      <Boton label="Agregar tarea" onClick={agregarTareas} />

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {tarea}
            <button
              onClick={() => eliminarTarea(index)}
              style={{
                marginLeft: "10px",
                padding: "2px 8px",
                backgroundColor: "#ff4444",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

    </>
  );
}

export default App;