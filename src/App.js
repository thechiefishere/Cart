import { ContextProvider } from "./components/context";
import Header from "./components/Header";

function App() {
  return (
    <ContextProvider>
      <main>
        <Header />
      </main>
    </ContextProvider>
  );
}

export default App;
