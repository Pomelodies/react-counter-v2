import "./App.css";
import { MdTimer } from "react-icons/md";
import { useState } from "react";
import Counter from "./components/counter";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <header>
        <MdTimer className="icone" />
        <h1>React Counter v2</h1>
      </header>
      <main>
        <div>
          <button
            onClick={() => {
              return <Counter counter={counter} setCounter={setCounter} />;
            }}
          >
            Add Counter
          </button>
        </div>
        <Counter counter={counter} setCounter={setCounter} />
      </main>
      <footer>Made with React at Le Reacteur by Elodie 🐸</footer>
    </>
  );
}

export default App;
