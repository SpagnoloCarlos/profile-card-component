import "./App.css";
import bgTop from "./assets/images/pics/bg-pattern-top.svg";
import bgBottom from "./assets/images/pics/bg-pattern-bottom.svg";
import Card from "./components/Card/Card";

function App() {
  return (
    <main className="main">
      <img src={bgTop} alt="Background top" className="bg-top" />
      <img src={bgBottom} alt="Background bottom" className="bg-bottom" />
      <Card />
    </main>
  );
}

export default App;
