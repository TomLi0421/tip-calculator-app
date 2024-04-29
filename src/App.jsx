import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="md:px-6 md:flex md:flex-col md:pt-32 md:h-screen md:max-w-4xl md:mx-auto">
      <Header />
      <Calculator />
    </div>
  );
}

export default App;
