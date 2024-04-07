import Navbar from "./Component/Navbar/navbar";
import Intro from "./Component/Intro/intro";
import Skills from "./Component/Skills/skills";
import Works from "./Component/Works/works";
import Contact from "./Component/Contact/contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
