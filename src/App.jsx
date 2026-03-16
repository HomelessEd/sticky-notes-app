import { ColourProvider } from "./context/ColourContext";
import { ColourSelector } from "./components/ColourSelector";
import NoteBoard from "./components/NoteBoard";
import "./App.css";

function App() {
  return (
    <ColourProvider>
    <main>
      <h1>🗒️ Sticky Notes</h1>
      <ColourSelector/>
      <hr />
      {<NoteBoard/>}
      </main>
      </ColourProvider>
  );
}

export default App
