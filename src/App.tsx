import "./App.css";
import { DarkModeProvider } from "./providers/DarkModeProvider";
import MainApp from "./components/MainApp";

function App() {
  return (
    <DarkModeProvider>
      <MainApp />
    </DarkModeProvider>
  );
}

export default App;
