import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/header.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
