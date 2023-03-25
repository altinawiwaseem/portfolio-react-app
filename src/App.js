import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
