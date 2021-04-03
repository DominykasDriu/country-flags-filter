import './styles/App.scss'
import Filters from "./components/Filters";
import Header from "./components/Header";
import Output from "./components/Output";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Filters />
        <Output />
      </main>
    </div>
  );
}

export default App;
