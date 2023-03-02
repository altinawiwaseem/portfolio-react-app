import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
