import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Portfolio from "./components/Portfolio";
import Counter from "./components/Counter";
import Testimonials from "./components/Testimonials";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/header.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <WorkExperience />
      <Counter />
      <Portfolio />
      <Testimonials />
    </div>
  );
}

export default App;
