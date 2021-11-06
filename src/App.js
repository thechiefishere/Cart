import { ContextProvider } from "./components/context";
import Header from "./components/Header";
import Bag from "./components/Bag";

function App() {
  return (
    <ContextProvider>
      <main>
        <Header />
        <Bag />
      </main>
    </ContextProvider>
  );
}

export default App;
