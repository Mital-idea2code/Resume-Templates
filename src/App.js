import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/header.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
