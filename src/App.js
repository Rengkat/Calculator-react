import "./App.css";
import Calculator from "./Components/Calculator";
import CalculatorContextProvider from "./Components/CalculatorContext";

function App() {
  return (
    <div className="App ">
      <CalculatorContextProvider>
        <Calculator />
      </CalculatorContextProvider>
    </div>
  );
}

export default App;
