import Boton from "./componentes/Boton/Boton";

function App() {
  return (
    <div>
      <Boton texto={"Transparent"} isTransparent={true} />
      <Boton texto={"Blue"} isBlue={true} />
      <Boton texto={"White"} isWhite={true} />
    </div>
  );
}

export default App;
